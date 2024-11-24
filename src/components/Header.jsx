import React from "react";
import avatar from "../assets/avatar.svg";

const Header = ({ theme }) => {
  const isDarkMode = theme === "dark"; // Check the theme

  return (
    <header
      className="flex items-center justify-between px-6 py-4"
      style={{
        backgroundColor: isDarkMode ? "#4D72AF" : "#F5F9FF", // Navbar color
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Consistent shadow for header
      }}
    >
      {/* Hamburger Menu */}
      <button
        style={{
          color: isDarkMode ? "#F5F9FF" : "#4D72AF", // Hamburger color
        }}
        className="text-4xl font-bold"
        aria-label="Menu"
      >
        &#9776;
      </button>

      {/* Header Title */}
      <h1
        style={{
          color: isDarkMode ? "#F5F9FF" : "#4D72AF", // Header text color
        }}
        className="text-xl sm:text-2xl font-bold"
      >
        Welcome, Estefanny ✨
      </h1>

      {/* Profile Image */}
      <div
        className="flex items-center"
        style={{
          width: "90px", // Adjusted width
          height: "90px", // Adjusted height
        }}
      >
        <img
          src={avatar}
          alt="Profile"
          className="w-full h-full object-cover" // Removed rounded-full for square shape
        />
      </div>
    </header>
  );
};

export default Header;
