import React, { useEffect, useState } from "react";

export default function LightToggle() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme-color");
    if (savedTheme === "dark") return true;
    if (savedTheme === "light") return false;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Update the HTML class and localStorage when isDark changes
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme-color", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme-color", "light");
    }
  }, [isDark]);

  // Toggle theme on button click
  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <button
      className={`light__dark--btn style__fixed ${
        isDark ? "dark--version" : ""
      }`}
      id="light__to--dark"
      onClick={toggleTheme}
      aria-label="Toggle light and dark mode"
    >
      <svg
        className="dark--mode__icon"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 512 512"
      >
        <title>Moon</title>
        <path d="M264 480A232 232 0 0132 248c0-94 54-178.28 137.61-214.67a16 16 0 0121.06 21.06C181.07 76.43 176 104.66 176 136c0 110.28 89.72 200 200 200 31.34 0 59.57-5.07 81.61-14.67a16 16 0 0121.06 21.06C442.28 426 358 480 264 480z"></path>
      </svg>
      <svg
        className="light--mode__icon"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 512 512"
      >
        <title>Sunny</title>
        <path d="M256 118a22 22 0 01-22-22V48a22 22 0 0144 0v48a22 22 0 01-22 22zM256 486a22 22 0 01-22-22v-48a22 22 0 0144 0v48a22 22 0 01-22 22zM369.14 164.86a22 22 0 01-15.56-37.55l33.94-33.94a22 22 0 0131.11 31.11l-33.94 33.94a21.93 21.93 0 01-15.55 6.44zM108.92 425.08a22 22 0 01-15.55-37.56l33.94-33.94a22 22 0 1131.11 31.11l-33.94 33.94a21.94 21.94 0 01-15.56 6.45zM464 278h-48a22 22 0 010-44h48a22 22 0 010 44zM96 278H48a22 22 0 010-44h48a22 22 0 010 44zM403.08 425.08a21.94 21.94 0 01-15.56-6.45l-33.94-33.94a22 22 0 0131.11-31.11l33.94 33.94a22 22 0 01-15.55 37.56zM142.86 164.86a21.89 21.89 0 01-15.55-6.44l-33.94-33.94a22 22 0 0131.11-31.11l33.94 33.94a22 22 0 01-15.56 37.55zM256 358a102 102 0 11102-102 102.12 102.12 0 01-102 102z"></path>
      </svg>
    </button>
  );
}
