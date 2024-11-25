// src/store/taskStore.js
import { create } from "zustand";

// Manages the state of all tasks globally.
const useTaskStore = create((set) => ({
  tasks: [],

  addTask: (text) =>
    set((state) => ({
      tasks: [...state.tasks, { id: Date.now(), text, completed: false }],
    })),

  toggleTask: (id) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      ),
    })),

  deleteTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),
}));

export default useTaskStore;
