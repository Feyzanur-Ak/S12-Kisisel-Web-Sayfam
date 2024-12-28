import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import ThemeSwitcher from "../Switchers/ThemeSwitcher";
import LanguageSwitcher from "../Switchers/LanguageSwitcher";


export default function Header() {
  const { theme } = useContext(GlobalContext);
  const isDark = theme === "dark";

  return (
    <header
      className={`
        ${isDark ? "bg-gray-800 text-white" : "bg-white text-black"}
        transition-colors
      `}
    >
      <div className="max-w-7xl mx-auto p-4 flex justify-between">

        <div className="py-14">
          <div className="w-12 h-12 flex items-center justify-center rotate-6
                          rounded-full bg-purple-600 text-white text-lg font-bold">
            F
          </div>
         
        </div>

        <div className="flex flex-col gap-8">
            <div className="flex">
                <ThemeSwitcher />
                <LanguageSwitcher />
             </div>
          <nav >
            <ul className="flex gap-20 items-center">
              <li className={`cursor-pointer hover:text-purple-400 ${isDark ? "text-gray-400" : "text-gray-700"}`}>
                Skills
              </li>
              <li className={`cursor-pointer hover:text-purple-400 ${isDark ? "text-gray-400" : "text-gray-700"}`}>
                Projects
              </li>
              <li>
                <button
                  className={`
                    transition-colors px-4 py-2 rounded-md font-medium
                    ${isDark
                      ? "bg-white text-purple-600 hover:bg-gray-200"
                      : "text-purple-600 border border-purple-600 hover:bg-purple-600 hover:text-white"
                    }
                  `}
                >
                  Hire me
                </button>
              </li>
            </ul>
          </nav>

        </div>
      </div>
    </header>
  );
}
