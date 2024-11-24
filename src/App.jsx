import React, { useState } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";
import useTaskStore from "./store/taskStore";

const App = () => {
  const [theme, setTheme] = useState("light"); // Light theme by default

  // Zustand Store Data
  const tasks = useTaskStore((state) => state.tasks);
  const addTask = useTaskStore((state) => state.addTask);
  const toggleTask = useTaskStore((state) => state.toggleTask);

  // Function to Toggle Between Light and Dark Modes
  const toggleTheme = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  return (
    <div
      className={`app-container ${theme} flex flex-col min-h-screen`}
      style={{
        backgroundColor: theme === "dark" ? "#333" : "#f9f9f9", // App background color
        color: theme === "dark" ? "#F5F9FF" : "#000", // Text color
      }}
    >
      {/* Navbar */}
      <div
        className="navbar mx-auto my-4 px-4 py-2 max-w-lg rounded-md shadow-md"
        style={{
          borderRadius: "8px", // Rounded corners
        }}
      >
        <Header theme={theme} />
      </div>

      {/* Main Content */}
      <div className="main-content flex-grow max-w-4xl mx-auto px-6 sm:px-8">
        {/* Motivational Text */}
        <p
          className="text-center font-medium text-lg my-3"
          style={{
            color: theme === "dark" ? "#F5F9FF" : "#4D72AF", // Dynamic text color
          }}
        >
          Keep pushing forward, one task at a time!
        </p>

        {/* Tabs Section */}
        <div
          className="tabs my-6 flex justify-center"
          style={{
            gap: "24px", // Increased space between buttons
          }}
        >
          {/* Today Button */}
          <button
            className="font-medium transition-all"
            style={{
              backgroundColor: theme === "light" ? "#4D72AF" : "#F5F9FF", // Active button background
              color: theme === "light" ? "#F5F9FF" : "#4D72AF", // Active button text color
              borderRadius: "9999px", // Fully rounded
              padding: "12px 24px", // Consistent padding
              border: "none", // Removed border
            }}
          >
            Today
          </button>

          {/* Week Button */}
          <button
            className="font-medium transition-all"
            style={{
              backgroundColor: "#FFFBEB", // Default inactive button background
              color: "#4D72AF", // Text color for inactive buttons
              borderRadius: "9999px", // Fully rounded
              padding: "12px 24px", // Consistent padding
              border: "none", // Removed border
            }}
          >
            Week
          </button>

          {/* Month Button */}
          <button
            className="font-medium transition-all"
            style={{
              backgroundColor: "#FFFBEB", // Default inactive button background
              color: "#4D72AF", // Text color for inactive buttons
              borderRadius: "9999px", // Fully rounded
              padding: "12px 24px", // Consistent padding
              border: "none", // Removed border
            }}
          >
            Month
          </button>
        </div>

        {/* Add Task Form */}
        <AddTaskForm addTask={addTask} theme={theme} />

        {/* Task List */}
        <TaskList tasks={tasks} toggleTask={toggleTask} theme={theme} />
      </div>

      {/* Toggle Section */}
      <div
        className="flex justify-center items-center my-6 w-full"
        style={{
          display: "flex", // Explicit flexbox
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Align vertically
          marginBottom: "3rem", // Adjust margin between toggle and footer
        }}
      >
        <button
          onClick={() => toggleTheme("dark")}
          style={{
            backgroundColor: theme === "dark" ? "#4D72AF" : "#F5F9FF", // Dynamic background
            color: theme === "dark" ? "#F5F9FF" : "#4D72AF", // Dynamic text color
            border: "2px solid #4D72AF", // Toggle border
            borderRight: "none", // Remove right border for seamless appearance
            borderTopLeftRadius: "9999px", // Only round top-left corner
            borderBottomLeftRadius: "9999px", // Only round bottom-left corner
            padding: "12px 24px", // Consistent padding
            transition: "all 0.3s ease", // Smooth transitions
          }}
        >
          Dark
        </button>
        <button
          onClick={() => toggleTheme("light")}
          style={{
            backgroundColor: theme === "light" ? "#4D72AF" : "#F5F9FF", // Dynamic background
            color: theme === "light" ? "#F5F9FF" : "#4D72AF", // Dynamic text color
            border: "2px solid #4D72AF", // Toggle border
            borderLeft: "none", // Remove left border for seamless appearance
            borderTopRightRadius: "9999px", // Only round top-right corner
            borderBottomRightRadius: "9999px", // Only round bottom-right corner
            padding: "12px 24px", // Consistent padding
            transition: "all 0.3s ease", // Smooth transitions
          }}
        >
          Light
        </button>
      </div>

      {/* Footer */}
      <div
        className="footer mx-auto my-4 px-4 py-2 max-w-lg rounded-md"
        style={{
        borderRadius: "8px",  
        padding: "2rem", // Footer padding
        }}
      >
        <footer className="flex justify-center items-center h-full">
          <p
            className="text-xs sm:text-sm text-center"
            style={{
              color: theme === "dark" ? "#F5F9FF" : "#4D72AF", // Footer text color
              margin: "0", // Remove unnecessary margin
            }}
          >
            © 2024 Your Company
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;