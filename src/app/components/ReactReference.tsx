// Import all necessary React hooks for demonstrations
import { useState, useEffect, useContext, createContext, useRef, useCallback, useMemo } from 'react';

// Create a Context for demonstrating Context API
// Context allows sharing data across component tree without props
const ExampleContext = createContext<{ value: string; setValue: (v: string) => void } | null>(null);

export function ReactReference() {
  return (
    <div className="space-y-6">
      <div className="p-6 bg-card border border-border rounded-lg">
        <h2 className="mb-3">React Complete Reference</h2>
        <p className="text-muted-foreground">
          Comprehensive guide to React hooks, patterns, and best practices
        </p>
      </div>

      {/* Overview section showing all core hooks */}
      <div className="p-6 border border-border rounded-lg">
        <h3 className="mb-4">Core Hooks Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-muted rounded-lg">
            <h4 className="mb-2">useState</h4>
            <p className="text-sm text-muted-foreground mb-3">Add state to functional components</p>
            <code className="text-sm">const [state, setState] = useState(initial)</code>
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <h4 className="mb-2">useEffect</h4>
            <p className="text-sm text-muted-foreground mb-3">Run side effects after render</p>
            <code className="text-sm">useEffect(() =&gt; {'{ }'}, [deps])</code>
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <h4 className="mb-2">useRef</h4>
            <p className="text-sm text-muted-foreground mb-3">Access DOM or persist values</p>
            <code className="text-sm">const ref = useRef(null)</code>
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <h4 className="mb-2">useContext</h4>
            <p className="text-sm text-muted-foreground mb-3">Share data across components</p>
            <code className="text-sm">const value = useContext(Context)</code>
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <h4 className="mb-2">useCallback</h4>
            <p className="text-sm text-muted-foreground mb-3">Memoize functions</p>
            <code className="text-sm">const fn = useCallback(() =&gt; {'{ }'}, [deps])</code>
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <h4 className="mb-2">useMemo</h4>
            <p className="text-sm text-muted-foreground mb-3">Memoize expensive calculations</p>
            <code className="text-sm">const value = useMemo(() =&gt; calc(), [deps])</code>
          </div>
        </div>
      </div>

      {/* useState patterns section */}
      <div className="p-6 border border-border rounded-lg">
        <h3 className="mb-4">useState Patterns</h3>
        <div className="space-y-4">
          <div>
            <h4 className="mb-2">Basic Usage</h4>
            <div className="p-4 bg-muted rounded-lg">
              <pre className="text-sm overflow-x-auto">
{`const [count, setCount] = useState(0);
setCount(count + 1);              // Direct value
setCount(prev => prev + 1);       // Updater function (preferred)`}
              </pre>
            </div>
          </div>
          <div>
            <h4 className="mb-2">Object State</h4>
            <div className="p-4 bg-muted rounded-lg">
              <pre className="text-sm overflow-x-auto">
{`const [user, setUser] = useState({ name: '', age: 0 });
setUser({ ...user, name: 'Alice' });  // Spread to update`}
              </pre>
            </div>
          </div>
          <div>
            <h4 className="mb-2">Array State</h4>
            <div className="p-4 bg-muted rounded-lg">
              <pre className="text-sm overflow-x-auto">
{`const [items, setItems] = useState([]);
setItems([...items, newItem]);        // Add item
setItems(items.filter(i => i.id !== id)); // Remove item`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* useEffect patterns section */}
      <div className="p-6 border border-border rounded-lg">
        <h3 className="mb-4">useEffect Patterns</h3>
        <div className="space-y-4">
          <div>
            <h4 className="mb-2">Run Once on Mount</h4>
            <div className="p-4 bg-muted rounded-lg">
              <pre className="text-sm overflow-x-auto">
{`useEffect(() => {
  console.log('Component mounted');
}, []); // Empty deps array = run once`}
              </pre>
            </div>
          </div>
          <div>
            <h4 className="mb-2">Run When Dependencies Change</h4>
            <div className="p-4 bg-muted rounded-lg">
              <pre className="text-sm overflow-x-auto">
{`useEffect(() => {
  console.log('Count changed:', count);
}, [count]); // Runs when count changes`}
              </pre>
            </div>
          </div>
          <div>
            <h4 className="mb-2">Cleanup Function</h4>
            <div className="p-4 bg-muted rounded-lg">
              <pre className="text-sm overflow-x-auto">
{`useEffect(() => {
  const timer = setInterval(() => {}, 1000);
  return () => clearInterval(timer); // Cleanup
}, []);`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Context API demo with live example */}
      <div className="p-6 border border-border rounded-lg">
        <h3 className="mb-4">Context API Demo</h3>
        <p className="text-sm text-muted-foreground mb-4">Share state without prop drilling</p>
        <ContextDemo />
        <div className="mt-4 p-4 bg-muted rounded-lg">
          <pre className="text-sm overflow-x-auto">
{`const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Child />
    </ThemeContext.Provider>
  );
}

function Child() {
  const { theme, setTheme } = useContext(ThemeContext);
  return <button onClick={() => setTheme('dark')}>{theme}</button>;
}`}
          </pre>
        </div>
      </div>

      {/* Custom Hooks section */}
      <div className="p-6 border border-border rounded-lg">
        <h3 className="mb-4">Custom Hooks</h3>
        <p className="text-sm text-muted-foreground mb-4">Extract and reuse stateful logic</p>
        <div className="space-y-4">
          <div>
            <h4 className="mb-2">useLocalStorage Hook</h4>
            <div className="p-4 bg-muted rounded-lg">
              <pre className="text-sm overflow-x-auto">
{`function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

// Usage:
const [name, setName] = useLocalStorage('name', 'Guest');`}
              </pre>
            </div>
          </div>
          <div>
            <h4 className="mb-2">useToggle Hook</h4>
            <div className="p-4 bg-muted rounded-lg">
              <pre className="text-sm overflow-x-auto">
{`function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const toggle = useCallback(() => setValue(v => !v), []);
  return [value, toggle];
}

// Usage:
const [isOpen, toggleOpen] = useToggle(false);`}
              </pre>
            </div>
          </div>
          {/* Live demo of custom hook */}
          <CustomHookDemo />
        </div>
      </div>

      {/* Performance hooks: useCallback and useMemo */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 border border-border rounded-lg">
          <h3 className="mb-4">useCallback</h3>
          <p className="text-sm text-muted-foreground mb-4">Prevent unnecessary re-renders of child components</p>
          <div className="p-4 bg-muted rounded-lg">
            <pre className="text-sm overflow-x-auto">
{`const handleClick = useCallback(() => {
  console.log('Clicked:', value);
}, [value]);

// Function reference stays the same
// unless 'value' changes`}
            </pre>
          </div>
        </div>

        <div className="p-6 border border-border rounded-lg">
          <h3 className="mb-4">useMemo</h3>
          <p className="text-sm text-muted-foreground mb-4">Cache expensive calculations</p>
          <div className="p-4 bg-muted rounded-lg">
            <pre className="text-sm overflow-x-auto">
{`const expensiveResult = useMemo(() => {
  return items.filter(...)
    .map(...)
    .reduce(...);
}, [items]);

// Only recalculates when items change`}
            </pre>
          </div>
        </div>
      </div>

      {/* Common component patterns */}
      <div className="p-6 border border-border rounded-lg">
        <h3 className="mb-4">Component Patterns</h3>
        <div className="space-y-4">
          <div>
            <h4 className="mb-2">Controlled Components</h4>
            <div className="p-4 bg-muted rounded-lg">
              <pre className="text-sm overflow-x-auto">
{`function Form() {
  const [value, setValue] = useState('');
  return (
    <input
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  );
}`}
              </pre>
            </div>
          </div>
          <div>
            <h4 className="mb-2">Conditional Rendering</h4>
            <div className="p-4 bg-muted rounded-lg">
              <pre className="text-sm overflow-x-auto">
{`{isLoading && <Spinner />}
{error ? <Error /> : <Content />}
{items.length > 0 ? <List /> : <Empty />}`}
              </pre>
            </div>
          </div>
          <div>
            <h4 className="mb-2">List Rendering</h4>
            <div className="p-4 bg-muted rounded-lg">
              <pre className="text-sm overflow-x-auto">
{`{items.map(item => (
  <div key={item.id}>
    {item.name}
  </div>
))}`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Best practices section */}
      <div className="p-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg">
        <h3 className="mb-3">React Best Practices</h3>
        <ul className="space-y-2 text-sm">
          <li>✓ Always provide keys when rendering lists</li>
          <li>✓ Use functional setState when new state depends on old state</li>
          <li>✓ Keep useEffect dependencies accurate to avoid bugs</li>
          <li>✓ Extract custom hooks for reusable logic</li>
          <li>✓ Use useCallback/useMemo only when needed (don't over-optimize)</li>
          <li>✓ Break large components into smaller, focused ones</li>
          <li>✓ Prefer composition over inheritance</li>
          <li>✓ Keep components pure - same props = same output</li>
        </ul>
      </div>
    </div>
  );
}

// Demo component showing Context API in action
function ContextDemo() {
  const [contextValue, setContextValue] = useState('Hello from Context!');

  return (
    // Provider wraps children and makes value available to all descendants
    <ExampleContext.Provider value={{ value: contextValue, setValue: setContextValue }}>
      <div className="p-4 border border-border rounded-lg space-y-3">
        {/* Input updates context value */}
        <input
          type="text"
          value={contextValue}
          onChange={(e) => setContextValue(e.target.value)}
          className="w-full px-3 py-2 border border-border rounded bg-input-background"
          placeholder="Change context value..."
        />
        {/* Child component reads from context */}
        <ContextConsumer />
      </div>
    </ExampleContext.Provider>
  );
}

// Consumer component that reads from Context
function ContextConsumer() {
  // useContext hook retrieves value from nearest Provider
  const context = useContext(ExampleContext);
  if (!context) return null;

  return (
    <div className="p-3 bg-blue-500 text-white rounded">
      Child component reading from context: "{context.value}"
    </div>
  );
}

// Live demo of custom hook in action
function CustomHookDemo() {
  // Using our custom useToggle hook
  const [isVisible, toggleVisible] = useToggle(false);

  return (
    <div className="mt-4 p-4 border border-border rounded-lg">
      <h4 className="mb-3">Live Custom Hook Demo</h4>
      <button
        onClick={toggleVisible} // toggle is from useToggle hook
        className="px-4 py-2 bg-primary text-primary-foreground rounded-lg mb-3"
      >
        {isVisible ? 'Hide' : 'Show'} (using useToggle)
      </button>
      {/* Conditional rendering based on toggle state */}
      {isVisible && (
        <div className="p-3 bg-green-500 text-white rounded">
          This uses a custom useToggle hook!
        </div>
      )}
    </div>
  );
}

// Custom hook: useToggle
// Encapsulates toggle logic for reuse across components
function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  // useCallback ensures toggle function reference stays stable
  const toggle = useCallback(() => setValue(v => !v), []);
  // Return as const for proper TypeScript tuple typing
  return [value, toggle] as const;
}
