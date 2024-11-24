import React from "react";

const Tabs = ({ theme }) => {
  return (
    <div className="tabs my-6 flex justify-center" style={{ gap: "24px" }}>
      <button
        className="font-medium transition-all"
        style={{
          backgroundColor: theme === "light" ? "#4D72AF" : "#F5F9FF",
          color: theme === "light" ? "#F5F9FF" : "#4D72AF",
          borderRadius: "9999px",
          padding: "12px 36px",
          border: `2px solid ${theme === "light" ? "#4D72AF" : "#F5F9FF"}`,
          cursor: "pointer",
          transition: "all 0.3s ease",
        }}
      >
        Today
      </button>
      <button
        className="font-medium transition-all"
        style={{
          backgroundColor: "#FFFBEB",
          color: "#4D72AF",
          borderRadius: "9999px",
          padding: "12px 36px",
          border: "2px solid #4D72AF",
          cursor: "pointer",
          transition: "all 0.3s ease",
        }}
      >
        Week
      </button>
      <button
        className="font-medium transition-all"
        style={{
          backgroundColor: "#FFFBEB",
          color: "#4D72AF",
          borderRadius: "9999px",
          padding: "12px 36px",
          border: "2px solid #4D72AF",
          cursor: "pointer",
          transition: "all 0.3s ease",
        }}
      >
        Month
      </button>
    </div>
  );
};

export default Tabs;
