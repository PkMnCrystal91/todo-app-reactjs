import { create } from "zustand";
import { persist } from 'zustand/middleware'


export const useStore = create(
    persist((set) => ({
        todos: [],
        addTodo: (todo) => set((state) => ({ todos: [todo, ...state.todos] })),
        updateTodo: (id, title, description, person, date,done) =>
        set((state) => ({
          todos: state.todos.map((todo) => (todo.id === id ? {...todo, title, person, description, date, done} : todo)),
        })),
        toggleTodo: (id) =>
        set((state) => ({
        todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, done: !todo.done } : todo
        ),
        })),
        removeTodo: (id) => {
            set((state) => ({
                todos: state.todos.filter((todo) => todo.id !== id),
            }))
        },
        
    }),
        {name: 'todo-storage'}
    )
)