// Component explaining dark mode implementation
export function DarkModeExplanation() {
  return (
    <div className="space-y-6">
      <div className="p-6 bg-card border border-border rounded-lg">
        <h2 className="mb-3">Dark Mode Implementation</h2>
        <p className="text-muted-foreground mb-4">
          This entire app uses Tailwind's dark mode feature! Click the theme toggle in the header to see it in action.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-muted rounded-lg">
            <div className="text-2xl mb-2">🎨</div>
            <h4>CSS Variables</h4>
            <p className="text-sm text-muted-foreground">
              Theme colors are defined as CSS variables that change based on dark mode
            </p>
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <div className="text-2xl mb-2">🔄</div>
            <h4>Automatic Switching</h4>
            <p className="text-sm text-muted-foreground">
              Toggle the dark class on the root element to switch themes
            </p>
          </div>
        </div>
      </div>

      {/* Step-by-step implementation guide */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 border border-border rounded-lg">
          <h3 className="mb-3">Step 1: React State</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Create a state variable to track dark mode
          </p>
          {/* useState creates boolean state for dark mode toggle */}
          <div className="p-4 bg-muted rounded-lg">
            <code className="text-sm">
              const [isDarkMode, setIsDarkMode] = useState(false);
            </code>
          </div>
        </div>

        <div className="p-6 border border-border rounded-lg">
          <h3 className="mb-3">Step 2: Toggle Function</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Create a button to toggle the state
          </p>
          {/* Button onClick inverts the boolean state */}
          <div className="p-4 bg-muted rounded-lg">
            <code className="text-sm">
              {'<button onClick={() => setIsDarkMode(!isDarkMode)}>'}
              <br />
              {/* Conditional rendering shows different text based on state */}
              {'  {isDarkMode ? "Light" : "Dark"}'}
              <br />
              {'</button>'}
            </code>
          </div>
        </div>

        <div className="p-6 border border-border rounded-lg">
          <h3 className="mb-3">Step 3: useEffect Hook</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Update the DOM when state changes
          </p>
          {/* useEffect runs side effect whenever isDarkMode changes */}
          {/* This adds/removes 'dark' class on <html> element */}
          <div className="p-4 bg-muted rounded-lg">
            <code className="text-sm">
              {'useEffect(() => {'}
              <br />
              {'  if (isDarkMode) {'}
              <br />
              {/* Add 'dark' class to enable dark mode styles */}
              {'    document.documentElement.classList.add("dark");'}
              <br />
              {'  } else {'}
              <br />
              {/* Remove 'dark' class to revert to light mode */}
              {'    document.documentElement.classList.remove("dark");'}
              <br />
              {'  }'}
              <br />
              {/* Dependency array: re-run when isDarkMode changes */}
              {'}, [isDarkMode]);'}
            </code>
          </div>
        </div>

        <div className="p-6 border border-border rounded-lg">
          <h3 className="mb-3">Step 4: Tailwind Classes</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Use the dark: prefix for dark mode styles
          </p>
          {/* dark: prefix applies styles only when .dark class exists on parent */}
          <div className="p-4 bg-muted rounded-lg">
            <code className="text-sm">
              {'<div className="'}
              <br />
              {/* Base style, then dark mode override */}
              {'  bg-white dark:bg-gray-900'}
              <br />
              {'  text-black dark:text-white'}
              <br />
              {'">'}
              <br />
              {'  Content adapts to theme!'}
              <br />
              {'</div>'}
            </code>
          </div>
        </div>
      </div>

      {/* Interactive examples that respond to dark mode toggle */}
      <div className="p-6 border border-border rounded-lg">
        <h3 className="mb-4">Live Examples</h3>
        <div className="space-y-4">
          {/* dark: prefix applies styles only when .dark class is on parent element */}
          {/* This box changes colors when you toggle dark mode */}
          <div className="p-4 bg-white dark:bg-gray-900 text-black dark:text-white border border-gray-300 dark:border-gray-700 rounded-lg">
            <p className="mb-2">This box uses:</p>
            <code className="text-sm">bg-white dark:bg-gray-900</code>
            <br />
            <code className="text-sm">text-black dark:text-white</code>
          </div>

          {/* Same pattern with colored backgrounds - lighter in light mode, darker in dark mode */}
          <div className="p-4 bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100 border border-blue-300 dark:border-blue-700 rounded-lg">
            <p className="mb-2">Colored box that adapts:</p>
            <code className="text-sm">bg-blue-100 dark:bg-blue-900</code>
            <br />
            <code className="text-sm">text-blue-900 dark:text-blue-100</code>
          </div>

          {/* Button examples with hover states for both light and dark modes */}
          <div className="grid grid-cols-2 gap-4">
            {/* Adaptive button with dark mode support for both normal and hover states */}
            <button className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              Adaptive Button
            </button>
            {/* Gradient button - even gradients can have dark mode variants */}
            <button className="px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-700 dark:to-pink-700 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 dark:hover:from-purple-800 dark:hover:to-pink-800 transition-all">
              Gradient Button
            </button>
          </div>
        </div>
      </div>

      {/* Best practices for implementing dark mode */}
      <div className="p-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg">
        <h3 className="mb-3">Pro Tips</h3>
        <ul className="space-y-2 text-sm">
          {/* Tip: Use CSS variables for maintainable theming */}
          <li className="flex items-start gap-2">
            <span>💡</span>
            <span>Use CSS variables (like --background, --foreground) for a consistent theme system</span>
          </li>
          {/* Tip: Persist user preference across sessions */}
          <li className="flex items-start gap-2">
            <span>💡</span>
            <span>Store the user's preference in localStorage so it persists across sessions</span>
          </li>
          {/* Tip: Respect system preferences */}
          <li className="flex items-start gap-2">
            <span>💡</span>
            <span>Consider using prefers-color-scheme media query to detect system preference</span>
          </li>
          {/* This app demonstrates comprehensive dark mode support */}
          <li className="flex items-start gap-2">
            <span>💡</span>
            <span>Every element in this app is themed using the dark: prefix or CSS variables</span>
          </li>
        </ul>
      </div>

      {/* Full working example showing all pieces together */}
      <div className="p-6 border border-border rounded-lg">
        <h3 className="mb-4">Complete Implementation Example</h3>
        {/* overflow-x-auto allows horizontal scrolling for long code lines */}
        <div className="p-4 bg-muted rounded-lg overflow-x-auto">
          <pre className="text-sm">
            {/* Complete, copy-pasteable dark mode implementation */}
            <code>{`import { useState, useEffect } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Update DOM when dark mode changes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="px-4 py-2 bg-primary text-primary-foreground rounded"
      >
        {isDarkMode ? '☀️ Light' : '🌙 Dark'}
      </button>

      <div className="p-6 bg-card border border-border rounded-lg">
        <h1>Hello, Dark Mode!</h1>
        <p className="text-muted-foreground">
          This content adapts to the theme automatically.
        </p>
      </div>
    </div>
  );
}`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
