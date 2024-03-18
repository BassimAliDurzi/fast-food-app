import React from "react";

function ThemeToggle({ toggleTheme }) {
  return (
    <div className="theme-toggle" onClick={toggleTheme}>
      <i className="fas fa-sun"></i>
      <i className="fas fa-moon"></i>
    </div>
  );
}

export default ThemeToggle;
