// Component providing comprehensive Tailwind CSS reference
export function TailwindReference() {
  return (
    <div className="space-y-6">
      <div className="p-6 bg-card border border-border rounded-lg">
        <h2 className="mb-3">Tailwind CSS Complete Reference</h2>
        <p className="text-muted-foreground">
          A comprehensive guide to Tailwind's utility classes organized by category
        </p>
      </div>

      {/* Core concept: utility-first vs traditional CSS */}
      <div className="p-6 border border-border rounded-lg">
        <h3 className="mb-4">The Core Idea</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="mb-3">Traditional CSS:</h4>
            <div className="p-4 bg-muted rounded-lg">
              <pre className="text-sm">
{`.heading {
  font-size: 1.5rem;
  color: white;
  margin-bottom: 1rem;
}`}
              </pre>
            </div>
          </div>
          <div>
            <h4 className="mb-3">Tailwind Equivalent:</h4>
            <div className="p-4 bg-muted rounded-lg">
              <pre className="text-sm">
{`<h2 className="text-2xl text-white mb-4">
  Hello
</h2>`}
              </pre>
            </div>
          </div>
        </div>
        <p className="mt-4 text-muted-foreground">Same result, no CSS file needed!</p>
      </div>

      {/* Spacing and color systems - fundamental to Tailwind */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 border border-border rounded-lg">
          <h3 className="mb-4">Spacing System</h3>
          <p className="text-sm text-muted-foreground mb-4">Scale: 1 = 0.25rem (4px)</p>
          {/* Grid layout for two-column reference */}
          <div className="space-y-2 text-sm">
            <div className="grid grid-cols-2 gap-2">
              <code>m-4</code><span className="text-muted-foreground">margin all sides</span>
              <code>mt-4</code><span className="text-muted-foreground">margin top</span>
              <code>mb-4</code><span className="text-muted-foreground">margin bottom</span>
              <code>ml-4</code><span className="text-muted-foreground">margin left</span>
              <code>mr-4</code><span className="text-muted-foreground">margin right</span>
              <code>mx-4</code><span className="text-muted-foreground">margin left + right</span>
              <code>my-4</code><span className="text-muted-foreground">margin top + bottom</span>
              <code>p-4</code><span className="text-muted-foreground">padding all sides</span>
              <code>px-4</code><span className="text-muted-foreground">padding left + right</span>
              <code>py-4</code><span className="text-muted-foreground">padding top + bottom</span>
            </div>
          </div>
        </div>

        <div className="p-6 border border-border rounded-lg">
          <h3 className="mb-4">Color System</h3>
          <p className="text-sm text-muted-foreground mb-4">Pattern: {`{property}-{color}-{shade}`}</p>
          {/* Visual color gradient demonstration */}
          <div className="space-y-2">
            <div className="flex gap-2 items-center">
              {/* Show progression from light (100) to dark (900) */}
              <div className="w-8 h-8 bg-blue-100 rounded"></div>
              <div className="w-8 h-8 bg-blue-300 rounded"></div>
              <div className="w-8 h-8 bg-blue-500 rounded"></div>
              <div className="w-8 h-8 bg-blue-700 rounded"></div>
              <div className="w-8 h-8 bg-blue-900 rounded"></div>
              <span className="text-sm ml-2">100 → 900</span>
            </div>
            <div className="mt-4 space-y-1 text-sm">
              <code className="block">text-blue-500</code>
              <code className="block">bg-gray-900</code>
              <code className="block">border-red-400</code>
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              Colors: gray, red, orange, yellow, green, blue, purple, pink, white, black
            </p>
          </div>
        </div>
      </div>

      {/* Typography utilities */}
      <div className="p-6 border border-border rounded-lg">
        <h3 className="mb-4">Typography</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Size scale with live examples */}
          <div>
            <h4 className="mb-3">Size</h4>
            <div className="space-y-2">
              <p className="text-xs">text-xs</p>
              <p className="text-sm">text-sm</p>
              <p className="text-base">text-base</p>
              <p className="text-lg">text-lg</p>
              <p className="text-xl">text-xl</p>
              <p className="text-2xl">text-2xl</p>
            </div>
          </div>
          {/* Font weight and style utilities */}
          <div>
            <h4 className="mb-3">Weight & Style</h4>
            <div className="space-y-2">
              <p className="font-normal">font-normal</p>
              <p className="font-medium">font-medium</p>
              <p className="font-semibold">font-semibold</p>
              <p className="font-bold">font-bold</p>
              <p className="italic">italic</p>
              <p className="uppercase">uppercase</p>
            </div>
          </div>
          {/* Text alignment and decoration */}
          <div>
            <h4 className="mb-3">Alignment & Decoration</h4>
            <div className="space-y-2">
              <p className="text-left">text-left</p>
              <p className="text-center">text-center</p>
              <p className="text-right">text-right</p>
              <p className="underline">underline</p>
              <p className="line-through">line-through</p>
              <p className="tracking-wide">tracking-wide</p>
            </div>
          </div>
        </div>
      </div>

      {/* Width/height and display utilities */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 border border-border rounded-lg">
          <h3 className="mb-4">Sizing</h3>
          <div className="space-y-2 text-sm">
            <div className="grid grid-cols-2 gap-2">
              <code>w-full</code><span className="text-muted-foreground">width 100%</span>
              <code>w-1/2</code><span className="text-muted-foreground">width 50%</span>
              <code>w-64</code><span className="text-muted-foreground">width 16rem</span>
              <code>h-full</code><span className="text-muted-foreground">height 100%</span>
              <code>h-screen</code><span className="text-muted-foreground">height 100vh</span>
              <code>max-w-lg</code><span className="text-muted-foreground">max width large</span>
              <code>max-w-xl</code><span className="text-muted-foreground">max width xl</span>
              <code>min-h-screen</code><span className="text-muted-foreground">min height 100vh</span>
            </div>
          </div>
        </div>

        <div className="p-6 border border-border rounded-lg">
          <h3 className="mb-4">Display & Visibility</h3>
          <div className="space-y-2 text-sm">
            <div className="grid grid-cols-2 gap-2">
              <code>block</code><span className="text-muted-foreground">display block</span>
              <code>inline</code><span className="text-muted-foreground">display inline</span>
              <code>inline-block</code><span className="text-muted-foreground">inline-block</span>
              <code>hidden</code><span className="text-muted-foreground">display none</span>
              <code>flex</code><span className="text-muted-foreground">display flex</span>
              <code>grid</code><span className="text-muted-foreground">display grid</span>
              <code>opacity-0</code><span className="text-muted-foreground">fully transparent</span>
              <code>opacity-50</code><span className="text-muted-foreground">50% transparent</span>
              <code>opacity-100</code><span className="text-muted-foreground">fully visible</span>
              <code>invisible</code><span className="text-muted-foreground">hidden (takes space)</span>
            </div>
          </div>
        </div>
      </div>

      {/* CSS positioning utilities with visual example */}
      <div className="p-6 border border-border rounded-lg">
        <h3 className="mb-4">Positioning</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 text-sm">
            <div className="grid grid-cols-2 gap-2">
              <code>relative</code><span className="text-muted-foreground">position relative</span>
              <code>absolute</code><span className="text-muted-foreground">position absolute</span>
              <code>fixed</code><span className="text-muted-foreground">position fixed</span>
              <code>sticky</code><span className="text-muted-foreground">position sticky</span>
              <code>top-0</code><span className="text-muted-foreground">top: 0</span>
              <code>left-0</code><span className="text-muted-foreground">left: 0</span>
              <code>z-10</code><span className="text-muted-foreground">z-index: 10</span>
              <code>z-50</code><span className="text-muted-foreground">z-index: 50</span>
            </div>
          </div>
          {/* Visual demonstration of absolute positioning */}
          <div className="relative h-32 bg-muted rounded-lg">
            <div className="absolute top-0 left-0 bg-blue-500 text-white px-3 py-1 rounded text-sm">
              absolute top-0 left-0
            </div>
            <div className="absolute bottom-0 right-0 bg-green-500 text-white px-3 py-1 rounded text-sm">
              absolute bottom-0 right-0
            </div>
          </div>
        </div>
      </div>

      {/* Responsive design breakpoints - critical for mobile-first approach */}
      <div className="p-6 border border-border rounded-lg">
        <h3 className="mb-4">Responsive Breakpoints</h3>
        <p className="text-sm text-muted-foreground mb-4">Tailwind is mobile-first - apply base styles, then override at larger screens</p>
        <div className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Breakpoint reference table */}
            <div className="space-y-2 text-sm">
              <div className="flex justify-between p-2 bg-muted rounded">
                <code>(none)</code><span className="text-muted-foreground">all screens (mobile first)</span>
              </div>
              <div className="flex justify-between p-2 bg-muted rounded">
                <code>sm:</code><span className="text-muted-foreground">640px and up</span>
              </div>
              <div className="flex justify-between p-2 bg-muted rounded">
                <code>md:</code><span className="text-muted-foreground">768px and up</span>
              </div>
              <div className="flex justify-between p-2 bg-muted rounded">
                <code>lg:</code><span className="text-muted-foreground">1024px and up</span>
              </div>
              <div className="flex justify-between p-2 bg-muted rounded">
                <code>xl:</code><span className="text-muted-foreground">1280px and up</span>
              </div>
              <div className="flex justify-between p-2 bg-muted rounded">
                <code>2xl:</code><span className="text-muted-foreground">1536px and up</span>
              </div>
            </div>
            {/* Example of responsive text sizing */}
            <div className="p-4 bg-muted rounded-lg">
              <pre className="text-sm overflow-x-auto">
{`<h1 className="
  text-xl
  sm:text-2xl
  md:text-4xl
">
  Gets bigger on larger screens
</h1>`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive state modifiers */}
      <div className="p-6 border border-border rounded-lg">
        <h3 className="mb-4">State Variants</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 text-sm">
            <div className="grid grid-cols-2 gap-2">
              <code>hover:</code><span className="text-muted-foreground">on mouse hover</span>
              <code>focus:</code><span className="text-muted-foreground">on keyboard focus</span>
              <code>active:</code><span className="text-muted-foreground">while clicking</span>
              <code>disabled:</code><span className="text-muted-foreground">when disabled</span>
            </div>
          </div>
          {/* Live interactive examples */}
          <div className="space-y-2">
            <button className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-700 active:bg-blue-800 text-white rounded">
              Try hover and click
            </button>
            <button disabled className="w-full px-4 py-2 bg-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded">
              Disabled button
            </button>
          </div>
        </div>
      </div>

      {/* Common patterns - ready-to-use recipes */}
      <div className="p-6 border border-border rounded-lg">
        <h3 className="mb-4">Common Patterns</h3>
        <div className="space-y-4">
          {/* Centered container pattern */}
          <div>
            <h4 className="mb-2">Centered Container</h4>
            <div className="p-3 bg-muted rounded-lg">
              <code className="text-sm">{'<div className="max-w-4xl mx-auto px-4">'}</code>
            </div>
          </div>
          {/* Navigation bar pattern */}
          <div>
            <h4 className="mb-2">Navbar</h4>
            <div className="p-3 bg-muted rounded-lg">
              <code className="text-sm">{'<nav className="flex items-center justify-between px-6 py-4 bg-gray-900">'}</code>
            </div>
          </div>
          {/* Card component pattern */}
          <div>
            <h4 className="mb-2">Card</h4>
            <div className="p-3 bg-muted rounded-lg">
              <code className="text-sm">{'<div className="bg-white rounded-lg shadow-md p-6">'}</code>
            </div>
          </div>
          {/* Button pattern */}
          <div>
            <h4 className="mb-2">Button</h4>
            <div className="p-3 bg-muted rounded-lg">
              <code className="text-sm">{'<button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg">'}</code>
            </div>
          </div>
          {/* Hero section pattern */}
          <div>
            <h4 className="mb-2">Hero Section</h4>
            <div className="p-3 bg-muted rounded-lg">
              <code className="text-sm">{'<section className="min-h-screen flex flex-col items-center justify-center text-center px-4">'}</code>
            </div>
          </div>
        </div>
      </div>

      {/* Best practices and tips */}
      <div className="p-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg">
        <h3 className="mb-3">Pro Tips</h3>
        <ul className="space-y-2 text-sm">
          <li>✓ You can stack as many classes as you need</li>
          <li>✓ Order of classes doesn't matter</li>
          <li>✓ Use responsive prefixes (sm:, md:, lg:) constantly - think mobile first</li>
          <li>✓ If you repeat the same class combos, extract them into a component</li>
          <li>✓ Combine state variants: hover:scale-105 hover:shadow-lg transition-all</li>
        </ul>
      </div>
    </div>
  );
}
