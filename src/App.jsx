import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";
import Tabs from "./components/Tabs";
import ThemeToggle from "./components/ThemeToggle";
import useTaskStore from "./store/taskStore";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const App = () => {
  const [theme, setTheme] = useState("light");
  const { width, height } = useWindowSize();

  const tasks = useTaskStore((state) => state.tasks);
  const addTask = useTaskStore((state) => state.addTask);
  const toggleTask = useTaskStore((state) => state.toggleTask);
  const deleteTask = useTaskStore((state) => state.deleteTask);

  const toggleTheme = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  const allTasksDone = tasks.length > 0 && tasks.every((task) => task.completed);

  return (
    <div
      className={`app-container ${theme} flex flex-col min-h-screen`}
      style={{
        backgroundColor: theme === "dark" ? "#333" : "#f9f9f9",
        color: theme === "dark" ? "#F5F9FF" : "#000",
      }}
    >
      {/* Confetti Effect */}
      {allTasksDone && <Confetti width={width} height={height} />}

      {/* Navbar */}
      <div
        className="navbar mx-auto my-4 px-4 py-2 max-w-lg rounded-md shadow-md"
        style={{
          backgroundColor: theme === "dark" ? "#4D72AF" : "#F5F9FF",
          borderRadius: "8px",
        }}
      >
        <Header theme={theme} />
      </div>

      {/* Main Content */}
      <div className="main-content flex-grow max-w-4xl mx-auto px-6 sm:px-8">
        <p
          className="text-center font-medium text-lg my-3"
          style={{
            color: theme === "dark" ? "#F5F9FF" : "#4D72AF",
          }}
        >
          Keep pushing forward, one task at a time!
        </p>

        {/* Tabs */}
        <Tabs theme={theme} />

        {/* Add Task Form */}
        <AddTaskForm addTask={addTask} theme={theme} />

        {/* Task List or Congratulatory Message */}
        {allTasksDone ? (
          <div className="text-center mt-6">
            <h2
              className="font-bold text-xl"
              style={{
                color: theme === "dark" ? "#F5F9FF" : "#4D72AF",
              }}
            >
              Awesome, nothing else to do, just chill! 😊
            </h2>
          </div>
        ) : (
          <TaskList
            tasks={tasks}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
            theme={theme}
          />
        )}
      </div>

      {/* Theme Toggle */}
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

      {/* Footer */}
      <Footer theme={theme} />
    </div>
  );
};

export default App;
