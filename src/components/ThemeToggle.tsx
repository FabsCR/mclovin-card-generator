"use client";

import { useEffect, useState } from "react";

const ThemeToggle: React.FC = () => {
  // Set dark mode as the default
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Check localStorage for a saved theme preference
    const storedTheme = localStorage.getItem("theme");

    // If there's no theme in localStorage, default to dark mode
    const isDark = storedTheme === "dark" || storedTheme === null;
    document.documentElement.classList.toggle("dark", isDark);
    setIsDarkMode(isDark);
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    // Toggle the 'dark' class on the <html> element and update localStorage
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
    setIsDarkMode(newMode);
  };

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm text-gray-500">{isDarkMode ? "Dark" : "Light"}</span>
      <label className="relative inline-block w-12 h-6 align-middle select-none transition duration-200 ease-in">
        <input
          type="checkbox"
          className="absolute opacity-0 w-0 h-0"
          checked={isDarkMode}
          onChange={toggleTheme}
        />
        <span className="block w-12 h-6 bg-gray-300 rounded-full dark:bg-blue-600"></span>
        <span
          className={`dot absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition ${
            isDarkMode ? "transform translate-x-6" : ""
          }`}
        ></span>
      </label>
    </div>
  );
};

export default ThemeToggle;