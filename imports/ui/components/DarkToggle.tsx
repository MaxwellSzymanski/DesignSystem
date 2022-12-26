import React, { useEffect, useState } from "react";

type theme = "light" | "dark";

function DarkToggle() {
  const [isDarkTheme, toggleIsDarkTheme] = useState(
    localStorage.theme === "dark"
  );

  function setLightTheme() {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
    toggleIsDarkTheme(false);
  }

  function setDarkTheme() {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
    toggleIsDarkTheme(true);
  }

  function toggleDarkMode() {
    const currentTheme = localStorage.theme;
    if (currentTheme === "dark") setLightTheme();
    else setDarkTheme();
  }

  useEffect(() => {
    const currentTheme = localStorage.theme;
    if (currentTheme === "dark") setDarkTheme();
    else setLightTheme();
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        const colorScheme: theme = event.matches ? "dark" : "light";
        colorScheme === "dark" ? setDarkTheme() : setLightTheme();
      });
  }, []);

  return (
    <div className="absolute flex right-5 md:right-10 top-5 md:top-10">
      <label className="relative inline-flex items-center cursor-pointer">
        <span className="absolute left-0 ml-1 text-sm font-medium text-slate-600 dark:text-slate-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
          </svg>
        </span>
        <input
          type="checkbox"
          value=""
          checked={isDarkTheme}
          className="sr-only peer"
          onChange={() => toggleDarkMode()}
        />
        <span className="absolute right-0 mr-1 text-sm font-medium text-slate-600 dark:text-slate-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-primary-600"></div>
      </label>
    </div>
  );
}

export default DarkToggle;
