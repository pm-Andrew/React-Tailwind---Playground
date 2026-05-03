# Building a Todo App - Step by Step Walkthrough

This guide will walk you through building a simple todo application using both the starter template that already exists in the project and the patterns from this tutorial. By the end, you'll have a fully functional todo app with add, complete, and delete functionality.

## 🎯 What You'll Build

A single-page todo app with:
- Add new todos
- Mark todos as complete/incomplete
- Delete todos
- Persistent styling with Tailwind
- Clean, maintainable React code

## 📋 Prerequisites

Make sure you've explored:
- The **React Basics** tab (especially useState and list rendering)
- The **Tailwind Basics** tab (layout and styling)
- The **React Reference** for hook patterns

---

## Part 1: Start from the Scaffold

Each step below tells you exactly where to paste the code in `src/app/components/TodoApp.tsx`.

### Step 1: Keep the starter card

**Put this in:** `TodoApp.tsx` return block

```tsx
return (
  <div className="max-w-2xl mx-auto p-6">
    <div className="rounded-lg border border-border bg-card p-6 shadow-lg">
      <h1 className="mb-2">My Todo App</h1>
      <p className="text-muted-foreground">
        This is the starter template for the walkthrough.
      </p>
    </div>
  </div>
);
```

### Step 2: Add the Todo type

**Put this in:** top of `TodoApp.tsx`, above the component

```tsx
type Todo = {
  id: number;
  text: string;
  completed: boolean;
};
```

### Step 3: Add state

**Put this in:** inside `TodoApp()`, above `return`

**Also add this import at the top of `TodoApp.tsx`:**

```tsx
import { useState } from 'react';
```

```tsx
const [todos, setTodos] = useState<Todo[]>([
  { id: 1, text: 'Learn React', completed: false },
]);
const [inputValue, setInputValue] = useState('');
```

### Step 4: Add the input form layout

**Put this in:** inside the card, under the heading and note

```tsx
<div className="flex gap-2 mb-6">
  <input
    type="text"
    value={inputValue}
    onChange={(e) => setInputValue(e.target.value)}
    onKeyDown={(e) => e.key === 'Enter' && handleAddTodo()}
    placeholder="What needs to be done?"
    className="flex-1 px-4 py-2 border border-border rounded-lg bg-input-background focus:ring-2 focus:ring-primary focus:border-primary"
  />
  <button
    onClick={handleAddTodo}
    className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
  >
    Add
  </button>
</div>
```

### Step 5: Add the create handler

**Put this in:** inside `TodoApp()`, above `return`

```tsx
const handleAddTodo = () => {
  if (inputValue.trim() === '') return;

  const newTodo: Todo = {
    id: Date.now(),
    text: inputValue,
    completed: false,
  };

  setTodos([...todos, newTodo]);
  setInputValue('');
};
```

### Step 6: Render the todo list

**Put this in:** below the input form

```tsx
<div className="space-y-2">
  {todos.map((todo) => (
    <div
      key={todo.id}
      className="flex items-center justify-between p-4 bg-muted rounded-lg"
    >
      <span>{todo.text}</span>
    </div>
  ))}
</div>
```

### Step 7: Add delete logic

**Put this in:** inside `TodoApp()`, above `return`

```tsx
const handleDeleteTodo = (id: number) => {
  setTodos(todos.filter((todo) => todo.id !== id));
};
```

### Step 8: Add toggle-complete logic

**Put this in:** inside `TodoApp()`, above `return`

```tsx
const handleToggleTodo = (id: number) => {
  setTodos(
    todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  );
};
```

### Step 9: Add stats and empty state

**Put this in:** inside `TodoApp()`, above `return`

```tsx
const totalTodos = todos.length;
const completedTodos = todos.filter((todo) => todo.completed).length;
const remainingTodos = totalTodos - completedTodos;
```

**Put this in:** below the list

```tsx
<div className="grid grid-cols-3 gap-4 mb-6">
  <div className="p-4 bg-blue-500 text-white rounded-lg text-center">
    <div className="text-2xl font-bold">{totalTodos}</div>
    <div className="text-sm opacity-90">Total</div>
  </div>
  <div className="p-4 bg-green-500 text-white rounded-lg text-center">
    <div className="text-2xl font-bold">{completedTodos}</div>
    <div className="text-sm opacity-90">Completed</div>
  </div>
  <div className="p-4 bg-orange-500 text-white rounded-lg text-center">
    <div className="text-2xl font-bold">{remainingTodos}</div>
    <div className="text-sm opacity-90">Remaining</div>
  </div>
</div>

{todos.length === 0 && (
  <div className="text-center py-8 text-muted-foreground">
    No todos yet. Add one above to get started! 🚀
  </div>
)}
```

## Part 2: Add the Todo tab

**Put this in:** `src/app/App.tsx`

```tsx
import { TodoApp } from './components/TodoApp';

const [activeTab, setActiveTab] = useState<'react' | 'tailwind' | 'darkmode' | 'examples' | 'react-ref' | 'tailwind-ref' | 'todo'>('react');

<button
  onClick={() => setActiveTab('todo')}
  className={`px-4 py-2 rounded-lg transition-colors ${
    activeTab === 'todo'
      ? 'bg-primary text-primary-foreground'
      : 'bg-secondary text-secondary-foreground hover:bg-accent'
  }`}
>
  Todo App
</button>

{activeTab === 'todo' && <TodoApp />}
```

---

## 🎉 Congratulations!

You've built a complete todo app! Let's review what you learned:

### React Patterns Used
✅ **useState** - Managing todos, input value  
✅ **Array manipulation** - `.map()`, `.filter()`, spread operator  
✅ **Controlled inputs** - Two-way data binding  
✅ **Event handlers** - onClick, onChange, onKeyPress  
✅ **Conditional rendering** - Empty state, completed styling  
✅ **List rendering** - .map() with keys  
✅ **Derived state** - Calculating stats without extra state  

### Tailwind Patterns Used
✅ **Layout** - Flexbox, Grid, spacing  
✅ **Container** - max-w, mx-auto centering  
✅ **Cards** - bg-card, border, rounded, shadow  
✅ **Buttons** - Hover states, transitions  
✅ **Input styling** - Focus rings, borders  
✅ **Conditional classes** - Template literals with ternary  
✅ **Color system** - Primary, destructive, muted colors  

### From Scratch vs. Using Patterns

**Built from scratch:**
- `handleToggleTodo` function logic
- Todo type definition
- Statistics calculation

**Used existing patterns:**
- Input form (from React Basics - Controlled Input)
- Delete function (from React Basics - Lists & Keys)
- Card styling (from Tailwind Reference - Common Patterns)
- Grid layout (from Tailwind Basics)
- Conditional rendering (from React Basics)

---

## 🚀 Next Challenges

Want to level up? Try adding:

1. **Filter buttons** - Show all/active/completed todos
2. **Edit functionality** - Double-click to edit todo text
3. **Local storage** - Persist todos using `useEffect` and `localStorage`
4. **Animations** - Add transitions when adding/removing todos
5. **Clear completed** - Button to delete all completed todos
6. **Drag and drop** - Reorder todos

## 📚 Where to Learn More

- Re-visit the **React Reference** tab for advanced hooks
- Check the **Tailwind Reference** for more styling options
- Explore the **Code Examples** tab for more patterns
- Read the comments in the source code for deeper understanding

---

**Great job!** You now understand how to combine React state management with Tailwind styling to build real applications. Keep experimenting and building! 🎨⚛️
