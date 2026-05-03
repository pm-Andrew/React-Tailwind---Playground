// Import necessary React hooks
import { useState, useEffect, useRef } from 'react';

export function ReactDemo() {
  // useState examples: Each creates a piece of state and a function to update it
  const [count, setCount] = useState(0); // Number state
  const [text, setText] = useState(''); // String state
  const [showMessage, setShowMessage] = useState(false); // Boolean state
  const [timer, setTimer] = useState(0); // Timer counter
  const [todos, setTodos] = useState<string[]>(['Learn React', 'Build a project']); // Array state with TypeScript type
  const [newTodo, setNewTodo] = useState(''); // Input field state

  // useRef: Creates a reference to a DOM element (doesn't cause re-render when changed)
  const inputRef = useRef<HTMLInputElement>(null);

  // useEffect: Runs after component mounts (empty dependency array [])
  // Sets up an interval timer that increments every second
  useEffect(() => {
    const interval = setInterval(() => {
      // Updater function form: prev => prev + 1 ensures we get latest value
      setTimer(prev => prev + 1);
    }, 1000);

    // Cleanup function: runs when component unmounts to prevent memory leaks
    return () => clearInterval(interval);
  }, []); // Empty array = run once on mount

  // Function to add a todo to the list
  const addTodo = () => {
    if (newTodo.trim()) { // Only add if not empty
      // Spread operator creates new array with existing todos plus new one
      setTodos([...todos, newTodo]);
      setNewTodo(''); // Clear input field
    }
  };

  // Function to remove a todo by index
  const removeTodo = (index: number) => {
    // filter creates new array without the item at specified index
    setTodos(todos.filter((_, i) => i !== index));
  };

  // Function to programmatically focus the input element
  const focusInput = () => {
    // Optional chaining (?.) safely accesses ref if it exists
    inputRef.current?.focus();
  };

  return (
    // Container with vertical spacing between children
    <div className="space-y-6">
      {/* Grid layout: 1 column on mobile, 2 columns on medium+ screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* useState Demo Card */}
        <div className="p-4 border border-border rounded-lg">
          <h4 className="mb-3">useState Hook</h4>
          <p className="text-sm text-muted-foreground mb-4">
            State lets components "remember" values between renders
          </p>
          <div className="space-y-3">
            {/* Display current count value */}
            <div className="p-4 bg-muted rounded-lg text-center">
              <div className="text-3xl mb-2">{count}</div>
              {/* Button click handlers update state */}
              <button
                onClick={() => setCount(count + 1)} // Increment by 1
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg mr-2"
              >
                Increment
              </button>
              <button
                onClick={() => setCount(0)} // Reset to 0
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg"
              >
                Reset
              </button>
            </div>
            {/* Show the code syntax */}
            <div className="p-2 bg-background rounded border border-border text-sm">
              <code>const [count, setCount] = useState(0)</code>
            </div>
          </div>
        </div>

        {/* Controlled Input Demo */}
        <div className="p-4 border border-border rounded-lg">
          <h4 className="mb-3">Controlled Inputs</h4>
          <p className="text-sm text-muted-foreground mb-4">
            React controls form input values via state
          </p>
          <div className="space-y-3">
            {/* Controlled input: value comes from state, onChange updates state */}
            {/* This makes React the "single source of truth" for the input value */}
            <input
              type="text"
              value={text} // Input value controlled by React state
              onChange={(e) => setText(e.target.value)} // Update state on every keystroke
              placeholder="Type something..."
              className="w-full px-3 py-2 border border-border rounded-lg bg-input-background"
            />
            {/* Display the current state value */}
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground">You typed:</p>
              {/* || operator provides fallback text if empty */}
              <p className="mt-1">{text || '(nothing yet)'}</p>
            </div>
            <div className="p-2 bg-background rounded border border-border text-sm">
              <code>value={`{text}`} onChange={`{(e) => setText(e.target.value)}`}</code>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 border border-border rounded-lg">
          <h4 className="mb-3">Conditional Rendering</h4>
          <p className="text-sm text-muted-foreground mb-4">
            Show/hide elements based on state
          </p>
          <button
            onClick={() => setShowMessage(!showMessage)}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg mb-3"
          >
            {showMessage ? 'Hide' : 'Show'} Message
          </button>
          {showMessage && (
            <div className="p-4 bg-green-500 text-white rounded-lg animate-fade-in">
              🎉 Hello! I appear conditionally!
            </div>
          )}
          <div className="mt-3 p-2 bg-background rounded border border-border text-sm">
            <code>{`{showMessage && <div>...</div>}`}</code>
          </div>
        </div>

        <div className="p-4 border border-border rounded-lg">
          <h4 className="mb-3">useEffect Hook</h4>
          <p className="text-sm text-muted-foreground mb-4">
            Run side effects when component renders
          </p>
          <div className="p-4 bg-muted rounded-lg text-center">
            <p className="text-sm text-muted-foreground">Timer running since mount:</p>
            <div className="text-3xl mt-2">{timer}s</div>
          </div>
          <div className="mt-3 p-2 bg-background rounded border border-border text-sm">
            <code>useEffect(() =&gt; {`{ /* runs on mount */ }`}, [])</code>
          </div>
        </div>
      </div>

      <div className="p-4 border border-border rounded-lg">
        <h4 className="mb-3">Component Props</h4>
        <p className="text-sm text-muted-foreground mb-4">
          Pass data from parent to child components
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Greeting name="React" color="blue" />
          <Greeting name="Tailwind" color="cyan" />
          <Greeting name="TypeScript" color="purple" />
        </div>
      </div>

      {/* List Rendering Demo */}
      <div className="p-4 border border-border rounded-lg">
        <h4 className="mb-3">Lists & Keys</h4>
        <p className="text-sm text-muted-foreground mb-4">
          Render arrays of data with unique keys
        </p>
        <div className="space-y-3">
          {/* Input with Enter key support */}
          <div className="flex gap-2">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addTodo()} // Add on Enter key
              placeholder="Add a new task..."
              className="flex-1 px-3 py-2 border border-border rounded-lg bg-input-background"
            />
            <button
              onClick={addTodo}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg"
            >
              Add
            </button>
          </div>
          {/* List rendering with .map() */}
          <div className="space-y-2">
            {/* .map() transforms array into array of JSX elements */}
            {todos.map((todo, index) => (
              // key prop helps React identify which items changed/added/removed
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-muted rounded-lg"
              >
                <span>{todo}</span>
                {/* Arrow function in onClick passes index to removeTodo */}
                <button
                  onClick={() => removeTodo(index)}
                  className="px-3 py-1 bg-destructive text-destructive-foreground rounded"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="p-2 bg-background rounded border border-border text-sm">
            <code>{`{todos.map((todo, i) => <div key={i}>...</div>)}`}</code>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 border border-border rounded-lg">
          <h4 className="mb-3">useRef Hook</h4>
          <p className="text-sm text-muted-foreground mb-4">
            Access DOM elements directly
          </p>
          <div className="space-y-3">
            <input
              ref={inputRef}
              type="text"
              placeholder="Click button to focus me"
              className="w-full px-3 py-2 border border-border rounded-lg bg-input-background"
            />
            <button
              onClick={focusInput}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg"
            >
              Focus Input
            </button>
            <div className="p-2 bg-background rounded border border-border text-sm">
              <code>const ref = useRef(null)</code><br/>
              <code>ref.current?.focus()</code>
            </div>
          </div>
        </div>

        <div className="p-4 border border-border rounded-lg">
          <h4 className="mb-3">Event Handling</h4>
          <p className="text-sm text-muted-foreground mb-4">
            Respond to user interactions
          </p>
          <EventDemo />
        </div>
      </div>

      <div className="p-4 border border-border rounded-lg">
        <h4 className="mb-3">Component Composition</h4>
        <p className="text-sm text-muted-foreground mb-4">
          Build complex UIs from simple components
        </p>
        <Card>
          <CardHeader>
            <h4>Card Title</h4>
            <p className="text-sm text-muted-foreground">This is a card description</p>
          </CardHeader>
          <CardContent>
            <p>Cards are built by composing smaller components together. This pattern makes your code more reusable and maintainable.</p>
          </CardContent>
          <CardFooter>
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg mr-2">
              Action
            </button>
            <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg">
              Cancel
            </button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

// Separate component demonstrating different event handlers
function EventDemo() {
  const [lastEvent, setLastEvent] = useState('None');

  return (
    <div className="space-y-3">
      {/* Display which event was triggered last */}
      <div className="p-4 bg-muted rounded-lg text-center">
        Last event: <span className="font-semibold">{lastEvent}</span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {/* onClick: fires on single click */}
        <button
          onClick={() => setLastEvent('Click')}
          className="px-3 py-2 bg-blue-500 text-white rounded"
        >
          onClick
        </button>
        {/* onDoubleClick: fires on double click */}
        <button
          onDoubleClick={() => setLastEvent('Double Click')}
          className="px-3 py-2 bg-green-500 text-white rounded"
        >
          onDoubleClick
        </button>
        {/* onMouseEnter: fires when mouse enters element */}
        <div
          onMouseEnter={() => setLastEvent('Mouse Enter')}
          className="px-3 py-2 bg-purple-500 text-white rounded text-center cursor-pointer"
        >
          onMouseEnter
        </div>
        {/* onMouseLeave: fires when mouse leaves element */}
        <div
          onMouseLeave={() => setLastEvent('Mouse Leave')}
          className="px-3 py-2 bg-pink-500 text-white rounded text-center cursor-pointer"
        >
          onMouseLeave
        </div>
      </div>
    </div>
  );
}

// Component Composition Pattern: Building complex UIs from simple pieces
// Card component accepts children (any React nodes)
function Card({ children }: { children: React.ReactNode }) {
  return <div className="border border-border rounded-lg overflow-hidden">{children}</div>;
}

// CardHeader - Top section of card
function CardHeader({ children }: { children: React.ReactNode }) {
  return <div className="p-4 border-b border-border bg-muted">{children}</div>;
}

// CardContent - Main content area
function CardContent({ children }: { children: React.ReactNode }) {
  return <div className="p-4">{children}</div>;
}

// CardFooter - Bottom section with actions
function CardFooter({ children }: { children: React.ReactNode }) {
  return <div className="p-4 border-t border-border bg-muted flex gap-2">{children}</div>;
}

// Component that receives props from parent
// TypeScript inline type annotation defines expected props
function Greeting({ name, color }: { name: string; color: string }) {
  // Map color names to Tailwind classes
  // Record<string, string> is TypeScript type for object with string keys/values
  const colorClasses: Record<string, string> = {
    blue: 'bg-blue-500',
    cyan: 'bg-cyan-500',
    purple: 'bg-purple-500',
  };

  return (
    // Template literal allows dynamic class names based on props
    <div className={`${colorClasses[color]} text-white p-4 rounded-lg text-center`}>
      {/* Display prop value in JSX */}
      <p>Hello, {name}! 👋</p>
    </div>
  );
}
