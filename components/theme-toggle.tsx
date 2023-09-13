"use client";
import { BsMoonFill, BsMoon } from "react-icons/bs";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="flex gap-2.5 items-center"
      onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
    >
      {theme === "dark" ? <BsMoonFill /> : <BsMoon />}
      <p>Dark Mode</p>
    </button>
  );
}
