import { useState } from 'react';

export function TailwindDemo() {
  // State to track selected Tailwind utility classes
  const [spacing, setSpacing] = useState('p-4'); // Padding utility
  const [bgColor, setBgColor] = useState('bg-blue-500'); // Background color
  const [rounded, setRounded] = useState('rounded-lg'); // Border radius
  const [isDark, setIsDark] = useState(false); // Dark mode toggle for demo

  return (
    // space-y-6 adds vertical spacing between direct children
    <div className="space-y-6">
      <div>
        <h3 className="mb-4">Interactive Tailwind Utility Demo</h3>
        {/* Responsive grid: 1 column on mobile, 3 on medium+ screens */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block mb-2">Spacing</label>
            {/* Controlled select updates state, which updates the demo box */}
            <select
              value={spacing}
              onChange={(e) => setSpacing(e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-md bg-background"
            >
              {/* Each option represents a different Tailwind padding class */}
              <option value="p-2">p-2 (small)</option>
              <option value="p-4">p-4 (medium)</option>
              <option value="p-8">p-8 (large)</option>
            </select>
          </div>

          <div>
            <label className="block mb-2">Background</label>
            <select
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-md bg-background"
            >
              <option value="bg-blue-500">Blue</option>
              <option value="bg-green-500">Green</option>
              <option value="bg-purple-500">Purple</option>
              <option value="bg-pink-500">Pink</option>
            </select>
          </div>

          <div>
            <label className="block mb-2">Border Radius</label>
            <select
              value={rounded}
              onChange={(e) => setRounded(e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-md bg-background"
            >
              <option value="rounded-none">None</option>
              <option value="rounded-lg">Large</option>
              <option value="rounded-full">Full</option>
            </select>
          </div>
        </div>

        {/* Live preview box showing selected utilities */}
        <div className="p-6 bg-muted rounded-lg">
          {/* Template literal combines multiple state values into className */}
          {/* inline-block prevents div from taking full width */}
          <div className={`${spacing} ${bgColor} ${rounded} text-white inline-block`}>
            I'm styled with Tailwind!
          </div>
          {/* Show the actual className being applied */}
          <div className="mt-4 p-3 bg-background rounded border border-border">
            <code className="text-sm">
              className="{spacing} {bgColor} {rounded}"
            </code>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 border border-border rounded-lg">
          <h4 className="mb-3">Responsive Design</h4>
          {/* Responsive utilities: base (mobile), sm: (640px+), md: (768px+) */}
          {/* bg-gradient-to-r on mobile, changes direction at breakpoints */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-lg text-white text-center sm:bg-gradient-to-b md:bg-gradient-to-l">
            <p>Resize your window!</p>
            {/* opacity-90 makes text slightly transparent */}
            <p className="text-sm mt-2 opacity-90">The gradient direction changes at different breakpoints</p>
          </div>
          <div className="mt-3 p-2 bg-muted rounded text-sm">
            <code>from-blue-500 to-purple-500</code><br/>
            <code>sm:bg-gradient-to-b</code><br/>
            <code>md:bg-gradient-to-l</code>
          </div>
        </div>

        <div className="p-4 border border-border rounded-lg">
          <h4 className="mb-3">Flexbox & Grid</h4>
          {/* Flexbox: flex enables flexbox, gap-2 adds space between items */}
          <div className="flex gap-2 mb-4">
            {/* flex-1 makes each item grow equally to fill space */}
            <div className="flex-1 p-3 bg-blue-500 text-white rounded text-center">flex-1</div>
            <div className="flex-1 p-3 bg-green-500 text-white rounded text-center">flex-1</div>
            <div className="flex-1 p-3 bg-purple-500 text-white rounded text-center">flex-1</div>
          </div>
          {/* CSS Grid: grid-cols-2 creates 2 equal columns */}
          <div className="grid grid-cols-2 gap-2">
            <div className="p-3 bg-pink-500 text-white rounded text-center">Grid 1</div>
            <div className="p-3 bg-orange-500 text-white rounded text-center">Grid 2</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 border border-border rounded-lg">
          <h4 className="mb-3">Hover & Focus States</h4>
          <div className="space-y-3">
            {/* hover: prefix applies styles only on mouse hover */}
            {/* transition-all smoothly animates all property changes */}
            <button className="w-full px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 hover:scale-105 transition-all">
              Hover me (hover:bg-blue-600 hover:scale-105)
            </button>
            {/* transition-shadow only animates shadow property (better performance) */}
            <button className="w-full px-4 py-3 bg-green-500 text-white rounded-lg hover:shadow-lg transition-shadow">
              Hover for shadow (hover:shadow-lg)
            </button>
            {/* focus: prefix applies styles when input is focused */}
            {/* ring creates an outline, good for accessibility */}
            <input
              type="text"
              placeholder="Click me (focus:ring-2)"
              className="w-full px-4 py-3 border-2 border-border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all bg-input-background"
            />
          </div>
        </div>

        <div className="p-4 border border-border rounded-lg">
          <h4 className="mb-3">Transitions & Animations</h4>
          <div className="space-y-3">
            {/* duration-500 makes transition take 500ms (0.5s) */}
            {/* Gradient colors swap on hover */}
            <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-pink-500 hover:to-purple-500 transition-all duration-500">
              Slow gradient transition (duration-500)
            </div>
            {/* Transform utilities: rotate-2 and -translate-y-1 (move up) */}
            {/* transition-transform only animates transform properties */}
            <div className="p-4 bg-orange-500 text-white rounded-lg hover:rotate-2 hover:-translate-y-1 transition-transform">
              Rotate & move on hover
            </div>
            {/* animate-pulse is a built-in Tailwind animation */}
            <div className="p-4 bg-cyan-500 text-white rounded-lg animate-pulse">
              Pulsing animation (animate-pulse)
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 border border-border rounded-lg">
        <h4 className="mb-3">Dark Mode Support</h4>
        <p className="text-sm text-muted-foreground mb-4">
          Tailwind's dark: prefix lets you style for dark mode
        </p>
        <div className={isDark ? 'dark' : ''}>
          <div className="p-6 bg-background border border-border rounded-lg space-y-4">
            <div className="flex items-center justify-between">
              <span>Toggle dark mode preview:</span>
              <button
                onClick={() => setIsDark(!isDark)}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg"
              >
                {isDark ? '☀️ Light' : '🌙 Dark'}
              </button>
            </div>
            <div className="p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg border border-gray-200 dark:border-gray-700">
              This box changes colors in dark mode!
            </div>
            <div className="p-2 bg-muted rounded border border-border text-sm">
              <code>bg-white dark:bg-gray-800</code><br/>
              <code>text-gray-900 dark:text-white</code>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 border border-border rounded-lg">
          <h4 className="mb-3">Spacing System</h4>
          <div className="space-y-2">
            <div className="bg-blue-500 text-white p-1 rounded">p-1 (0.25rem / 4px)</div>
            <div className="bg-blue-500 text-white p-2 rounded">p-2 (0.5rem / 8px)</div>
            <div className="bg-blue-500 text-white p-4 rounded">p-4 (1rem / 16px)</div>
            <div className="bg-blue-500 text-white p-6 rounded">p-6 (1.5rem / 24px)</div>
            <div className="bg-blue-500 text-white p-8 rounded">p-8 (2rem / 32px)</div>
          </div>
        </div>

        <div className="p-4 border border-border rounded-lg">
          <h4 className="mb-3">Shadow Depths</h4>
          <div className="space-y-4">
            <div className="p-4 bg-white rounded-lg shadow-sm">shadow-sm</div>
            <div className="p-4 bg-white rounded-lg shadow">shadow (default)</div>
            <div className="p-4 bg-white rounded-lg shadow-md">shadow-md</div>
            <div className="p-4 bg-white rounded-lg shadow-lg">shadow-lg</div>
            <div className="p-4 bg-white rounded-lg shadow-xl">shadow-xl</div>
          </div>
        </div>
      </div>

      <div className="p-4 border border-border rounded-lg">
        <h4 className="mb-3">Complex Layouts</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 p-4 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-lg">
            <h4>Main Content (col-span-2)</h4>
            <p className="text-sm opacity-90 mt-2">This takes up 2/3 of the grid on medium+ screens</p>
          </div>
          <div className="p-4 bg-gray-200 rounded-lg">
            <h4>Sidebar</h4>
            <p className="text-sm text-gray-600 mt-2">Takes up 1/3</p>
          </div>
        </div>
        <div className="mt-4 p-2 bg-muted rounded border border-border text-sm">
          <code>grid grid-cols-1 md:grid-cols-3</code><br/>
          <code>md:col-span-2</code>
        </div>
      </div>

      <div className="p-4 border border-border rounded-lg">
        <h4 className="mb-3">Typography Utilities</h4>
        <div className="space-y-3">
          <p className="text-xs">text-xs: Extra small text</p>
          <p className="text-sm">text-sm: Small text</p>
          <p className="text-base">text-base: Base size text</p>
          <p className="text-lg">text-lg: Large text</p>
          <p className="text-xl">text-xl: Extra large text</p>
          <p className="text-2xl">text-2xl: 2X large text</p>
          <p className="font-thin">font-thin: Thin weight</p>
          <p className="font-normal">font-normal: Normal weight</p>
          <p className="font-semibold">font-semibold: Semibold weight</p>
          <p className="font-bold">font-bold: Bold weight</p>
          <p className="italic">italic: Italic style</p>
          <p className="underline">underline: Underlined text</p>
          <p className="line-through">line-through: Strikethrough</p>
        </div>
      </div>
    </div>
  );
}
