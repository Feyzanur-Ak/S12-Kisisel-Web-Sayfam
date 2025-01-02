import useGlobalContext from "../hooks/useGlobalContext";

export default function ThemeSwitcher() {
  const { theme, toggleTheme, language, getModeText } = useGlobalContext();
  const isDark = theme === "dark";

  return (
    <div className="flex items-center cursor-pointer" onClick={toggleTheme}>
      <div
        className={`
          relative w-12 h-5 rounded-full transition-colors
          ${isDark ? "bg-yellow-400" : "bg-purple-500"}
        `}
      >
        <div
          className={`
            absolute top-0.5 left-0.5 w-4 h-4 rounded-full
            transition-transform duration-300
            ${isDark ? "bg-purple-600 translate-x-7" : "bg-yellow-200 translate-x-0"}
          `}
        ></div>
      </div>
      <span className="ml-2">{getModeText(language, theme)}</span>
    </div>
  );
}
