import React from "react";

// Provides buttons to toggle between light and dark themes. 
// Two buttons for “Dark” and “Light” modes.
// Each button calls the toggleTheme function passed via props to switch the theme.
const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <div
      className="flex justify-center items-center my-6 w-full"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "3rem",
      }}
    >
      <button
        onClick={() => toggleTheme("dark")}
        style={{
          backgroundColor: theme === "dark" ? "#4D72AF" : "#F5F9FF",
          color: theme === "dark" ? "#F5F9FF" : "#4D72AF",
          border: "2px solid #4D72AF",
          borderRight: "none",
          borderTopLeftRadius: "9999px",
          borderBottomLeftRadius: "9999px",
          padding: "12px 24px",
          transition: "all 0.3s ease",
        }}
      >
        Dark
      </button>
      <button
        onClick={() => toggleTheme("light")}
        style={{
          backgroundColor: theme === "light" ? "#4D72AF" : "#F5F9FF",
          color: theme === "light" ? "#F5F9FF" : "#4D72AF",
          border: "2px solid #4D72AF",
          borderLeft: "none",
          borderTopRightRadius: "9999px",
          borderBottomRightRadius: "9999px",
          padding: "12px 24px",
          transition: "all 0.3s ease",
        }}
      >
        Light
      </button>
    </div>
  );
};

export default ThemeToggle;
