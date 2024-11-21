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
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        placeholder="Add a new task"
        value={title}
        onChange={(e) => setTitle(e.target.value)} // Update local state
        className="p-2 border rounded w-full"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add
      </button>
    </form>
  );
};

export default AddTask;
