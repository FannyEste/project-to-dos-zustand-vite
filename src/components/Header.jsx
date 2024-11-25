import React from "react";
import avatar from "../assets/avatar.svg";

// Displays the app's header with a menu button, a welcome message, and a profile avatar.
const Header = ({ theme }) => {
  const isDarkMode = theme === "dark"; // Check the theme for styling.

  return (
    <header
      className={`flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 ${
        isDarkMode ? "bg-blue-700 text-white" : "bg-gray-100 text-blue-700"
      }`}
    >
      {/* Menu Button */}
      <button
        className="text-2xl sm:text-3xl font-bold"
        aria-label="Menu"
      >
        &#9776;
      </button>

      {/* Welcome Message */}
      <h1 className="text-lg sm:text-xl font-bold text-center flex-1 truncate">
        Welcome, Estefanny ✨
      </h1>

      {/* Profile Avatar */}
      <div className="flex items-center w-12 h-12 sm:w-16 sm:h-16">
        <img
          src={avatar}
          alt="Profile"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
    </header>
  );
};

export default Header;
