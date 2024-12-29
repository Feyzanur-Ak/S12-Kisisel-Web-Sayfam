import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import ThemeSwitcher from "../components/ThemeSwitcher";
import LanguageSwitcher from "../components/LanguageSwitcher";

export default function Header() {
  const { theme, nav } = useContext(GlobalContext);
  const isDark = theme === "dark";

  return (
    <header
      className={`${
        isDark ? "bg-gray-800 text-white" : "bg-white text-black"
      } transition-colors overflow-hidden`}
    >
     
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <div className="w-10 h-10 flex items-center justify-center rotate-6 rounded-full bg-purple-600 text-white text-lg font-bold">
            F
          </div>
          <div className="flex items-center space-x-8">
            <div className="flex space-x-4">
              <ThemeSwitcher />
              <LanguageSwitcher />
            </div>
            <nav>
              <ul className="flex gap-8 items-center">
                <li
                  className={`cursor-pointer hover:text-purple-400 ${
                    isDark ? "text-gray-400" : "text-gray-700"
                  }`}
                >
                  {nav.skills}
                </li>
                <li
                  className={`cursor-pointer hover:text-purple-400 ${
                    isDark ? "text-gray-400" : "text-gray-700"
                  }`}
                >
                  {nav.projects}
                </li>
                <li>
                  <button
                    className={`transition-colors px-4 py-2 rounded-md font-medium ${
                      isDark
                        ? "bg-white text-purple-600 hover:bg-gray-200"
                        : "text-purple-600 border border-purple-600 hover:bg-purple-600 hover:text-white"
                    }`}
                  >
                    {nav.hireMe}
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
    
    </header>
  );
}
