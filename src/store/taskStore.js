const useTaskStore = create((set) => (
  tasks: [], // Initial state
  addTask: (title) => {
    console.log("Adding task:", title); 
      tasks: [
        ...state.tasks,
        {
          id: Date.now(),
          title,
          completed: false,
          createdAt: new Date().toISOString(),
        }
      ]
    }));
  toggleTask: (id) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      );
    }));
  removeTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    }));
}));

export default useTaskStore;
