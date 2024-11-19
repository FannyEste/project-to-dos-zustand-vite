import { create } from "zustand";

//This provides:tasks: Array of tasks.
//addTask: Adds a new task.
//toggleTask: Toggles a task’s completed state.
//removeTask: Deletes a task.

const useTaskStore = create((set) => ({
  tasks: [], // Initial tasks list
  addTask: (title) =>
    set((state) => ({
      tasks: [
        ...state.tasks,
        {
          id: Date.now(), // Unique ID
          title,
          completed: false,
          createdAt: new Date().toISOString()
        }
      ]
    })),
  toggleTask: (id) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    })),
  removeTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id)
    }))
}));

export default useTaskStore;
