import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import ThemeSwitcher from "../components/ThemeSwitcher";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { useHistory } from "react-router-dom";

export default function Header() {
  const { theme, nav } = useContext(GlobalContext);
  const isDark = theme === "dark";
  const history = useHistory();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`${
        isDark ? "bg-gray-800 text-white" : "bg-white text-black"
      } transition-colors overflow-hidden`}
    >
      <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
      <button
      onClick={() => history.push("/")}
      className={`w-[62px] h-[62px] flex items-center justify-center rotate-6 rounded-full text-2xl font-bold transition-transform duration-300 hover:scale-110 ${
        isDark
          ? "bg-indigo-700 text-indigo-500"
          : "bg-violet-100 text-violet-500"
      }`}
    >
      F
    </button>
        <div className="flex flex-col gap-6 space-x-8">
          <div className="flex space-x-4">
            <ThemeSwitcher />
            <LanguageSwitcher />
          </div>
          <nav>
            <ul className="flex gap-20 items-center -mx-20">
              <li
                className={`cursor-pointer hover:text-purple-400 ${
                  isDark ? "text-gray-400" : "text-gray-700"
                }`}
                onClick={() => scrollToSection("skills")}
              >
                {nav.skills}
              </li>
              <li
                className={`cursor-pointer hover:text-purple-400 ${
                  isDark ? "text-gray-400" : "text-gray-700"
                }`}
                onClick={() => scrollToSection("projects")}
              >
                {nav.projects}
              </li>
              <li>
              
                <button onClick={() => history.push("/contact")}
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
