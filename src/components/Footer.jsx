import React from "react";

// Displays a footer with a copyright message, styled based on the theme.
const Footer = ({ theme }) => {
  return (
    <div
      className="footer mx-auto my-4 px-4 py-2 max-w-lg rounded-md shadow-md"
      style={{
        backgroundColor: theme === "dark" ? "#4D72AF" : "#F5F9FF", // Dynamic background color
        borderRadius: "8px",
      }}
    >
      <footer className="flex justify-center items-center h-full">
        <p
          className="text-xs sm:text-sm text-center"
          style={{
            color: theme === "dark" ? "#F5F9FF" : "#4D72AF", // Text color changes with theme
            margin: "0",
          }}
        >
          © 2024 All rights reserved :P
        </p>
      </footer>
    </div>
  );
};

export default Footer;
