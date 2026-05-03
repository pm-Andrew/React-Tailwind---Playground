import { useState } from 'react';

// Define the shape of a todo item
type Todo = {
    id: number;
    text: string;
    completed: boolean;
};

export function TodoApp() {
    // Step 3 from WALKTHROUGH.md: state for todos and the input field.
    // The README shows this as a controlled-input pattern.
    const [todos, setTodos] = useState<Todo[]>([
        { id: 1, text: 'Learn React', completed: false },
    ]);
    const [inputValue, setInputValue] = useState('');

    // Step 5: add the "create todo" handler here.
    // Pattern: validate input, create a new todo object, append it to state.
    // const handleAddTodo = () => { ... }

    // Step 7: add delete logic here.
    // Pattern: use filter() to create a new array without the removed todo.
    // const handleDeleteTodo = (id: number) => { ... }

    // Step 8: add toggle-complete logic here.
    // Pattern: use map() to update the matching todo and flip completed.
    // const handleToggleTodo = (id: number) => { ... }

    // Step 9: add derived statistics here.
    // Pattern: calculate total/completed/remaining from todos instead of extra state.
    // const totalTodos = todos.length;
    // const completedTodos = todos.filter((todo) => todo.completed).length;
    // const remainingTodos = totalTodos - completedTodos;

    return (
        <div className="max-w-2xl mx-auto p-6">
            <div className="rounded-lg border border-border bg-card p-6 shadow-lg">
                <h1 className="mb-2">My Todo App</h1>
                <p className="text-muted-foreground mb-6">
                    This is the starter template for the walkthrough.
                </p>

                {/* Step 4: styling and layout live in this container. */}
                {/* The README examples map these utilities to the card pattern. */}

                {/* Step 5: input form goes here. */}
                {/* Controlled input + add button from the React basics section. */}
                <div className="rounded-md border border-dashed border-border p-4 text-sm text-muted-foreground">
                    Input form placeholder
                </div>

                {/* Step 6: render the todo list here. */}
                {/* Use todos.map(...) and add a key prop for each item. */}
                <div className="mt-4 rounded-md border border-dashed border-border p-4 text-sm text-muted-foreground">
                    Todo list placeholder
                </div>

                {/* Step 9: statistics and empty state go here. */}
                <div className="mt-4 text-sm text-muted-foreground">
                    Walkthrough placeholders are ready for the next steps.
                </div>

                {/* The starter state above keeps the file runnable while you follow the guide. */}
                {todos.length > 0 && inputValue === '' ? null : null}
            </div>
        </div>
    );
}
