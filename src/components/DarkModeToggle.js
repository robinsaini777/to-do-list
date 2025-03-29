import React from "react";
import useDarkMode from "../hooks/useDarkMode";
import { FaSun, FaMoon } from "react-icons/fa";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useDarkMode();

  return (
    <button className="dark-mode-toggle" onClick={() => setIsDarkMode(!isDarkMode)}>
      {isDarkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default DarkModeToggle;
