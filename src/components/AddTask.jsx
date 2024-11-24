import React, { useState } from "react";
import useTaskStore from "../store/taskStore";

const AddTask = () => {
  const [title, setTitle] = useState(""); // Local state for the input
  const addTask = useTaskStore((state) => state.addTask); // Zustand store function

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh

    if (!title.trim()) {
      alert("Task title cannot be empty."); // Handle empty input
      return;
    }

    try {
      addTask(title); // Add task to the store
      setTitle(""); // Clear input after adding the task
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
    <input
      type="text"
      placeholder="Add a new task"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      className="p-3 border rounded-full w-full max-w-md text-center"
    />
    <button
      type="submit"
      className="flex items-center gap-2 px-6 py-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600"
    >
      <span className="text-2xl">+</span> Add new task
    </button>
  </form>  
  );
};

export default AddTask;
