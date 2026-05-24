import { usePreferencesStore } from "../store/preferences-store";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
  const { theme, setTheme } = usePreferencesStore();

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`
        relative flex items-center
        w-20 h-10 rounded-full
        px-1 pl-2 transition-all duration-500
        cursor-pointer overflow-hidden
        ${isDark ? "bg-zinc-800" : "bg-[#ace1f6]"}
      `}
    >
      <div
        className={`
          absolute z-0 inset-0 transition-all duration-500
          ${
            isDark
              ? "bg-[radial-gradient(circle_at_top,#0b1026,#131934)]"
              : "bg-[radial-gradient(circle_at_top,#ace1f6,#c6e7f9)]"
          }
        `}
      />

      <div
        className={`
          relative z-10 flex items-center justify-center rounded-full
          transition-all duration-500 text-2xl
          ${isDark ? "translate-x-10  rotate-360" : "translate-x-0  rotate-0 text-[#fff183]"}
        `}
      >
        {isDark ? <FaMoon /> : <FaSun />}
      </div>
    </button>
  );
}
