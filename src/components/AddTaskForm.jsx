import React, { useState } from "react";

// Allows users to add new tasks to the task list.
//Maintains a title state to track the input field value.
const AddTaskForm = ({ addTask, theme }) => {
  const [title, setTitle] = useState(""); // Local state for task input

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    if (!title.trim()) {
      alert("Task title cannot be empty.");
      return;
    }

    try {
      addTask(title); // Add task via the prop function
      setTitle(""); // Clear the input field after adding
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-4"
    >
      <input
        type="text"
        placeholder="Add a new task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={`p-3 border rounded-full w-full max-w-md text-center ${
          theme === "dark" ? "border-gray-400 bg-gray-700 text-white" : "border-gray-300 bg-white text-black"
        }`}
      />
      <button
        type="submit"
        className={`flex items-center gap-2 px-6 py-2 rounded-full shadow-md hover:shadow-lg transition ${
          theme === "dark" ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
      >
        <span className="text-2xl">+</span> Add new task
      </button>
    </form>
  );
};

export default AddTaskForm;
