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
        w-20.5 h-10 rounded-full
        px-1 transition-all duration-500
        cursor-pointer overflow-hidden border
      `}
    >
      <div
        className={`
          relative z-10 flex items-center justify-center rounded-full
          transition-all duration-500 text-2xl bg-[#7ed8ff] p-1
          ${isDark ? "translate-x-10  rotate-360 bg-gray-400" : "translate-x-0  rotate-0 text-[#fff183]"}
        `}
      >
        {isDark ? <FaMoon /> : <FaSun />}
      </div>
    </button>
  );
}
