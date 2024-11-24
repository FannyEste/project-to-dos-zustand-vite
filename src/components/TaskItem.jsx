import React from "react";

const TaskItem = ({ task, toggleTask, deleteTask, theme }) => {
  return (
    <li
      className="flex items-center p-4 rounded-md"
      style={{
        borderColor: theme === "dark" ? "#F5F9FF" : "#4D72AF",
        color: theme === "dark" ? "#F5F9FF" : "#4D72AF",
        border: "1px solid",
        gap: "1rem",
        justifyContent: "flex-start",
        backgroundColor: theme === "dark" ? "#333" : "#fff",
        marginBottom: "1rem",
      }}
    >
      {/* Circle Button */}
      <button
        onClick={() => toggleTask(task.id)}
        className={`task-button ${theme === "dark" ? "dark" : "light"}`}
      >
        {task.completed && (
          <span
            style={{
              fontSize: "1.2rem", // Adjust size of the check mark
              color: theme === "dark" ? "#F5F9FF" : "#4D72AF", // Checkmark color
              fontWeight: "bold", // Make it bold
            }}
          >
            ✓
          </span>
        )}
      </button>

      {/* Task Text */}
      <span
        style={{
          textAlign: "left",
          flexGrow: 1,
          fontSize: "1rem",
          textDecoration: task.completed ? "line-through" : "none",
          opacity: task.completed ? 0.6 : 1,
        }}
      >
        {task.text}
      </span>

      {/* Trash Icon */}
      <button
        onClick={() => deleteTask(task.id)}
        style={{
          background: "transparent",
          border: "none",
          cursor: "pointer",
          color: theme === "dark" ? "#F5F9FF" : "#4D72AF",
        }}
        aria-label="Delete Task"
      >
        🗑️
      </button>
    </li>
  );
};

export default TaskItem;
