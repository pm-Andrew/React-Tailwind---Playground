# Learn React & Tailwind CSS

An interactive, hands-on tutorial website for learning React and Tailwind CSS through live examples and experimentation.

## 🎯 Overview

This is a **learn-by-doing** educational platform where you can:
- Interact with live React components
- Modify Tailwind classes in real-time
- See immediate visual feedback
- Read code with educational comments
- Build your own projects using these patterns

No passive reading—everything is interactive and explorable!

## 📚 What's Inside

### React Concepts Covered

#### Core Hooks
- **useState** - Managing component state (counters, forms, toggles)
- **useEffect** - Side effects and lifecycle (timers, data fetching)
- **useRef** - DOM references and persistent values
- **useContext** - Global state management without prop drilling
- **useCallback** - Memoizing functions for performance
- **useMemo** - Caching expensive calculations

#### Patterns & Best Practices
- Controlled components (form inputs)
- Conditional rendering (`&&`, ternary operators)
- List rendering with `.map()` and keys
- Event handling (onClick, onChange, onMouseEnter, etc.)
- Component composition (building complex UIs from simple pieces)
- Props and TypeScript typing
- Custom hooks (reusable stateful logic)

### Tailwind CSS Utilities Covered

#### Layout
- **Flexbox** - `flex`, `items-center`, `justify-between`, `gap-4`, `flex-col`
- **Grid** - `grid`, `grid-cols-2`, `grid-cols-3`, `gap-6`, `col-span-2`
- **Spacing** - `m-4`, `p-4`, `px-4`, `py-4`, `mx-auto`, `my-4`, `space-y-6`
- **Sizing** - `w-full`, `h-screen`, `max-w-lg`, `min-h-screen`

#### Typography
- **Size** - `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`
- **Weight** - `font-normal`, `font-medium`, `font-semibold`, `font-bold`
- **Style** - `italic`, `uppercase`, `underline`, `line-through`
- **Alignment** - `text-left`, `text-center`, `text-right`, `tracking-wide`

#### Colors
- **Background** - `bg-blue-500`, `bg-gradient-to-r`, `from-purple-500`, `to-pink-500`
- **Text** - `text-white`, `text-gray-900`, `text-muted-foreground`
- **Borders** - `border`, `border-2`, `border-gray-300`, `border-border`

#### Visual Effects
- **Shadows** - `shadow-sm`, `shadow`, `shadow-md`, `shadow-lg`, `shadow-xl`
- **Rounded Corners** - `rounded`, `rounded-md`, `rounded-lg`, `rounded-full`
- **Opacity** - `opacity-0`, `opacity-50`, `opacity-100`

#### Interactive States
- **Hover** - `hover:bg-blue-700`, `hover:scale-105`, `hover:shadow-lg`
- **Focus** - `focus:ring-2`, `focus:border-purple-500`, `focus:outline-none`
- **Active** - `active:bg-blue-800`
- **Disabled** - `disabled:bg-gray-400`, `disabled:cursor-not-allowed`

#### Animations & Transitions
- **Transitions** - `transition-all`, `transition-colors`, `duration-500`
- **Transforms** - `scale-105`, `rotate-2`, `-translate-y-1`
- **Built-in Animations** - `animate-pulse`, `animate-spin`, `animate-bounce`

#### Responsive Design
- **Breakpoints** - `sm:`, `md:`, `lg:`, `xl:`, `2xl:`
- Mobile-first approach with progressive enhancement

#### Positioning
- `relative`, `absolute`, `fixed`, `sticky`
- `top-0`, `left-0`, `bottom-0`, `right-0`
- `z-10`, `z-50`

#### Dark Mode
- `dark:bg-gray-900`, `dark:text-white`
- Complete theming system with CSS variables

## 🧩 Interactive Components Showcased

### React Basics Tab
1. **Counter Component** - useState with increment/reset
2. **Controlled Input** - Two-way data binding
3. **Conditional Rendering** - Show/hide message toggle
4. **Timer Component** - useEffect with cleanup
5. **Todo List** - Array state, add/remove items
6. **useRef Demo** - DOM manipulation (focus input)
7. **Event Handling** - onClick, onDoubleClick, onMouseEnter, onMouseLeave
8. **Component Composition** - Card system with Header/Content/Footer
9. **Props Demo** - Greeting components with dynamic colors

### Tailwind Basics Tab
1. **Interactive Utility Demo** - Live spacing, color, and border-radius selector
2. **Responsive Design Demo** - Gradient that changes direction at breakpoints
3. **Flexbox Layout** - Equal-width flex items
4. **Grid Layout** - Two-column grid
5. **Hover & Focus States** - Interactive buttons and inputs
6. **Transitions & Animations** - Gradient transitions, transforms, pulse animation
7. **Dark Mode Preview** - Local dark mode toggle
8. **Spacing Scale** - Visual padding examples (p-1 through p-8)
9. **Shadow Depths** - shadow-sm through shadow-xl examples
10. **Complex Grid Layouts** - Column spanning
11. **Typography Examples** - All text sizes, weights, and decorations

### Dark Mode Tab
- Global dark/light theme toggle
- Step-by-step implementation guide
- Live examples of adaptive components
- Complete code example

### React Reference Tab
- Comprehensive hook documentation
- useState, useEffect, useContext patterns
- Custom hooks examples (useToggle, useLocalStorage)
- Live Context API demo
- Best practices checklist

### Tailwind Reference Tab
- Complete utility class reference
- Organized by category (spacing, colors, typography, etc.)
- Visual examples and live demonstrations
- Common patterns (navbar, card, button, hero section)
- Responsive breakpoint guide

### Code Examples Tab
- Copy-paste ready code snippets
- Component patterns
- Tailwind recipes
- Advanced techniques

## 🎨 Design System

This tutorial uses a complete design system with:
- CSS custom properties for theming
- Consistent color palette
- Responsive typography scale
- Reusable spacing system
- Dark mode support throughout

All colors use semantic tokens:
- `--background`, `--foreground`
- `--primary`, `--secondary`, `--accent`
- `--muted`, `--destructive`
- `--border`, `--card`

## 💡 Learning Approach

### 1. **Interactive Demos**
Every concept has a live, working example you can interact with immediately.

### 2. **Code with Comments**
All source code includes educational comments explaining:
- What the code does
- Why it's written that way
- How it works under the hood

### 3. **Visual Feedback**
See changes instantly—modify state, toggle classes, and watch the UI respond.

### 4. **Progressive Complexity**
Start with basics (useState, padding) and progress to advanced topics (Context API, responsive design).

### 5. **Reference Sections**
Quick-reference guides for both React and Tailwind when you need to look something up.

## ⚙️ Setup & Installation

### Prerequisites
- **Node.js 18+** - Download from [nodejs.org](https://nodejs.org)
- **pnpm** - Install globally with `npm install -g pnpm`

### Installation Steps

1. **Install Dependencies**
   ```bash
   pnpm install
   ```

2. **Start Development Server**
   ```bash
   pnpm run dev
   ```
   The site will be available at `http://localhost:5173`

3. **Build for Production**
   ```bash
   pnpm run build
   ```
   Output files will be in the `dist/` directory

## 🚀 Getting Started

1. **Explore the Tabs** - Start with "React Basics" or "Tailwind Basics"
2. **Interact with Demos** - Click buttons, type in inputs, hover over elements
3. **Read the Code** - Check the comments in the source files to understand how things work
4. **Try Dark Mode** - Toggle between light and dark themes
5. **Check References** - Use the reference tabs as quick lookups
6. **Build Something** - Follow the WALKTHROUGH.md to build your own todo app!

## 📁 Project Structure

```
src/
├── app/
│   ├── App.tsx                      # Main app with tabs and dark mode
│   └── components/
│       ├── ReactDemo.tsx            # Interactive React examples
│       ├── TailwindDemo.tsx         # Interactive Tailwind examples
│       ├── DarkModeExplanation.tsx  # Dark mode implementation guide
│       ├── ReactReference.tsx       # Complete React reference
│       ├── TailwindReference.tsx    # Complete Tailwind reference
│       └── CodeExample.tsx          # Code snippet display component
├── styles/
│   ├── theme.css                    # Design system tokens
│   ├── globals.css                  # Custom animations
│   └── fonts.css                    # Font imports
└── imports/
    └── tailwind-crash-course.md     # Original Tailwind reference
```

## 🎓 Next Steps

Once you're comfortable with the concepts here:

1. **Follow the Walkthrough** - See `WALKTHROUGH.md` for a step-by-step guide to building a todo app
2. **Build Your Own Projects** - Portfolio site, landing page, dashboard
3. **Experiment** - Modify the examples, break things, fix them
4. **Combine Patterns** - Mix React hooks with Tailwind utilities
5. **Go Deeper** - Explore React Router, state management libraries, form libraries

## 🛠️ Technologies Used

- **React 18+** - Modern React with hooks
- **TypeScript** - Type safety and better DX
- **Tailwind CSS v4** - Utility-first styling
- **Vite** - Fast build tool and dev server

## 📖 Learn More

- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## ✨ Features

- ✅ Fully interactive tutorials
- ✅ Live code examples
- ✅ Dark mode support
- ✅ Responsive design
- ✅ Educational comments throughout
- ✅ Copy-paste ready code snippets
- ✅ Complete reference sections
- ✅ Real-world patterns and best practices

---

**Happy Learning!** 🚀 Start building, start experimenting, and most importantly—have fun!
