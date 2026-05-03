// Import React hooks and components
import { useState, useEffect } from 'react';
import { ReactDemo } from './components/ReactDemo';
import { TailwindDemo } from './components/TailwindDemo';
import { CodeExample } from './components/CodeExample';
import { DarkModeExplanation } from './components/DarkModeExplanation';
import { ReactReference } from './components/ReactReference';
import { TailwindReference } from './components/TailwindReference';
import { TodoApp } from './components/TodoApp';

export default function App() {
  // useState: Create state to track which tab is currently active
  // TypeScript union type restricts values to only valid tab names
  const [activeTab, setActiveTab] = useState<'react' | 'tailwind' | 'darkmode' | 'examples' | 'react-ref' | 'tailwind-ref' | 'todo'>('react');

  // useState: Create state to track dark mode on/off
  const [isDarkMode, setIsDarkMode] = useState(false);

  // useEffect: Run side effect whenever isDarkMode changes
  // This adds/removes the 'dark' class on the root HTML element
  // which triggers Tailwind's dark mode styles
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]); // Dependency array: re-run when isDarkMode changes

  return (
    // Main container: min-h-screen ensures full viewport height, bg-background uses theme color
    <div className="min-h-screen bg-background">
      {/* Header: sticky top-0 keeps it fixed at top when scrolling, z-10 keeps it above other content */}
      <header className="border-b border-border bg-card sticky top-0 z-10">
        {/* Centered container with max width and responsive padding */}
        <div className="max-w-7xl mx-auto px-4 py-6">
          {/* Flexbox layout: items-start aligns to top, justify-between pushes items apart */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h1 className="mb-2">Learn React & Tailwind CSS</h1>
              <p className="text-muted-foreground">
                Interactive tutorial with live examples you can modify and experiment with
              </p>
            </div>
            {/* Dark mode toggle button - onClick handler toggles boolean state */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="px-4 py-2 bg-secondary text-secondary-foreground hover:bg-accent rounded-lg transition-colors flex items-center gap-2"
              aria-label="Toggle dark mode"
            >
              {/* Conditional rendering: show different emoji based on state */}
              {isDarkMode ? '☀️ Light' : '🌙 Dark'}
            </button>
          </div>
          {/* Tab navigation: flex with gap-2 spaces buttons, flex-wrap allows wrapping on small screens */}
          <div className="flex gap-2 flex-wrap">
            {/* Tab button: onClick updates state, className uses template literal for conditional classes */}
            <button
              onClick={() => setActiveTab('react')}
              // Dynamic classes: if this tab is active, show primary colors, else show secondary
              className={`px-4 py-2 rounded-lg transition-colors ${activeTab === 'react'
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground hover:bg-accent'
                }`}
            >
              React Basics
            </button>
            <button
              onClick={() => setActiveTab('react-ref')}
              className={`px-4 py-2 rounded-lg transition-colors ${activeTab === 'react-ref'
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground hover:bg-accent'
                }`}
            >
              React Reference
            </button>
            <button
              onClick={() => setActiveTab('tailwind')}
              className={`px-4 py-2 rounded-lg transition-colors ${activeTab === 'tailwind'
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground hover:bg-accent'
                }`}
            >
              Tailwind Basics
            </button>
            <button
              onClick={() => setActiveTab('tailwind-ref')}
              className={`px-4 py-2 rounded-lg transition-colors ${activeTab === 'tailwind-ref'
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground hover:bg-accent'
                }`}
            >
              Tailwind Reference
            </button>
            <button
              onClick={() => setActiveTab('todo')}
              className={`px-4 py-2 rounded-lg transition-colors ${activeTab === 'todo'
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground hover:bg-accent'
                }`}
            >
              Todo App
            </button>
            <button
              onClick={() => setActiveTab('darkmode')}
              className={`px-4 py-2 rounded-lg transition-colors ${activeTab === 'darkmode'
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground hover:bg-accent'
                }`}
            >
              Dark Mode
            </button>
            <button
              onClick={() => setActiveTab('examples')}
              className={`px-4 py-2 rounded-lg transition-colors ${activeTab === 'examples'
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground hover:bg-accent'
                }`}
            >
              Code Examples
            </button>
          </div>
        </div>
      </header>

      {/* Main content area with centered container */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Conditional rendering: && operator shows component only if condition is true */}
        {activeTab === 'react' && (
          <div className="space-y-6">
            <div className="p-6 bg-card border border-border rounded-lg">
              <h2 className="mb-3">What is React?</h2>
              <p className="text-muted-foreground mb-4">
                React is a JavaScript library for building user interfaces. It lets you create reusable components
                that manage their own state, making it easy to build complex, interactive UIs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-muted rounded-lg">
                  <div className="text-2xl mb-2">🧩</div>
                  <h4>Components</h4>
                  <p className="text-sm text-muted-foreground">Build encapsulated UI pieces</p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <div className="text-2xl mb-2">🔄</div>
                  <h4>State & Props</h4>
                  <p className="text-sm text-muted-foreground">Manage and pass data</p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <div className="text-2xl mb-2">⚡</div>
                  <h4>Hooks</h4>
                  <p className="text-sm text-muted-foreground">Add features to components</p>
                </div>
              </div>
            </div>
            <ReactDemo />
          </div>
        )}

        {activeTab === 'tailwind' && (
          <div className="space-y-6">
            <div className="p-6 bg-card border border-border rounded-lg">
              <h2 className="mb-3">What is Tailwind CSS?</h2>
              <p className="text-muted-foreground mb-4">
                Tailwind is a utility-first CSS framework. Instead of writing custom CSS, you compose designs
                using pre-built utility classes directly in your HTML/JSX.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-muted rounded-lg">
                  <div className="text-2xl mb-2">🎨</div>
                  <h4>Utility Classes</h4>
                  <p className="text-sm text-muted-foreground">px-4, bg-blue-500, rounded-lg</p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <div className="text-2xl mb-2">📱</div>
                  <h4>Responsive</h4>
                  <p className="text-sm text-muted-foreground">sm:, md:, lg: breakpoints</p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <div className="text-2xl mb-2">⚙️</div>
                  <h4>Customizable</h4>
                  <p className="text-sm text-muted-foreground">Extend with your own utilities</p>
                </div>
              </div>
            </div>
            <TailwindDemo />
          </div>
        )}

        {activeTab === 'react-ref' && <ReactReference />}

        {activeTab === 'tailwind-ref' && <TailwindReference />}

        {activeTab === 'todo' && <TodoApp />}

        {activeTab === 'darkmode' && <DarkModeExplanation />}

        {activeTab === 'examples' && (
          <div className="space-y-6">
            <div className="p-6 bg-card border border-border rounded-lg">
              <h2 className="mb-2">Code Examples</h2>
              <p className="text-muted-foreground">
                Learn by example - see how React and Tailwind work together
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <CodeExample
                title="Simple React Component"
                description="A functional component with props"
                code={`function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-500 text-white rounded"
    >
      {text}
    </button>
  );
}`}
              />

              <CodeExample
                title="Using useState"
                description="Manage component state with the useState hook"
                code={`function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`}
              />

              <CodeExample
                title="Tailwind Responsive Design"
                description="Use breakpoint prefixes for responsive layouts"
                code={`<div className="
  w-full           /* Full width by default */
  md:w-1/2         /* Half width on medium screens */
  lg:w-1/3         /* One third on large screens */
  p-4              /* Padding all around */
  bg-white         /* White background */
  rounded-lg       /* Rounded corners */
">
  Content here
</div>`}
              />

              <CodeExample
                title="Conditional Styling with Tailwind"
                description="Combine React state with Tailwind classes"
                code={`function Alert({ type, message }) {
  const styles = {
    success: 'bg-green-500 text-white',
    error: 'bg-red-500 text-white',
    info: 'bg-blue-500 text-white'
  };

  return (
    <div className={\`p-4 rounded \${styles[type]}\`}>
      {message}
    </div>
  );
}`}
              />

              <CodeExample
                title="useEffect for Side Effects"
                description="Run code when component mounts or updates"
                code={`function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Runs after component mounts
    fetch('/api/data')
      .then(res => res.json())
      .then(setData);
  }, []); // Empty array = run once on mount

  return <div>{data ? data.title : 'Loading...'}</div>;
}`}
              />

              <CodeExample
                title="Custom Hooks"
                description="Extract and reuse stateful logic"
                code={`function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

// Usage in component
function MyComponent() {
  const [name, setName] = useLocalStorage('name', '');
  return <input value={name} onChange={e => setName(e.target.value)} />;
}`}
              />

              <CodeExample
                title="Tailwind Flexbox Patterns"
                description="Common flexbox layouts with Tailwind"
                code={`/* Center everything */
<div className="flex items-center justify-center h-screen">
  <h1>Centered!</h1>
</div>

/* Space between items */
<div className="flex justify-between items-center">
  <span>Left</span>
  <span>Right</span>
</div>

/* Vertical stack with gap */
<div className="flex flex-col gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

/* Responsive flex direction */
<div className="flex flex-col md:flex-row gap-4">
  <div className="flex-1">Responsive!</div>
  <div className="flex-1">Layout</div>
</div>`}
              />

              <CodeExample
                title="React Context API"
                description="Share state across component tree without props"
                code={`const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Header />
      <Content />
    </ThemeContext.Provider>
  );
}

function Header() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Toggle {theme}
    </button>
  );
}`}
              />

              <CodeExample
                title="Tailwind Animations & Transitions"
                description="Add motion to your interfaces"
                code={`/* Smooth hover effects */
<button className="
  transition-all duration-300
  hover:scale-110
  hover:shadow-lg
  hover:bg-blue-600
">
  Hover me
</button>

/* Built-in animations */
<div className="animate-spin">⚙️</div>
<div className="animate-pulse">💓</div>
<div className="animate-bounce">⬆️</div>

/* Transition specific properties */
<div className="
  transition-colors duration-200
  hover:bg-blue-500
">
  Smooth color change
</div>`}
              />
            </div>
          </div>
        )}
      </main>

      <footer className="border-t border-border mt-12 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-muted-foreground">
          <p>Built with React + Tailwind CSS • Experiment and learn by doing!</p>
          <p>Thought of by: Andrew Sabourin</p>
          <a href="https://github.com/pm-Andrew/React-Tailwind---Playground">GitHub</a>
        </div>
      </footer>
    </div>
  );
}