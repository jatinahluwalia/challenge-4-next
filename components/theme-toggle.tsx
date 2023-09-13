"use client";

import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <main>
      <button
        onClick={() =>
          theme === "dark" ? setTheme("light") : setTheme("dark")
        }
      >
        Toggle
      </button>
    </main>
  );
}
