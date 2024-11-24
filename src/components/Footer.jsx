import React from "react";

const Footer = ({ theme }) => {
  return (
    <div
      className="footer mx-auto my-4 px-4 py-2 max-w-lg rounded-md shadow-md"
      style={{
        backgroundColor: theme === "dark" ? "#4D72AF" : "#F5F9FF",
        borderRadius: "8px",
      }}
    >
      <footer className="flex justify-center items-center h-full">
        <p
          className="text-xs sm:text-sm text-center"
          style={{
            color: theme === "dark" ? "#F5F9FF" : "#4D72AF",
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
