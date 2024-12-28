import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Header = () => {
  const { language, setLanguage, theme, setTheme } = useContext(GlobalContext);

  const handleLanguageChange = () => {
    setLanguage(language === "tr" ? "en" : "tr");
  };

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const getModeText = (lang, thm) => {
    if (lang === "tr") {
      return thm === "dark" ? "Karanlık Mod" : "Aydınlık Mod";
    } else {
      return thm === "dark" ? "Dark Mode" : "Light Mode";
    }
  };

  return (
    <header
      className={`
        ${theme === "dark" ? "bg-gray-800 text-gray-50" : "bg-white text-black"}
        shadow
      `}
    >
    
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
 
        <div className="flex items-center">
      
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-600 text-white text-lg font-bold">
            F
          </div>
        </div>

   
        <div className="flex items-center space-x-8 flex-col">  
     
          <div className="flex items-center cursor-pointer" onClick={handleThemeChange}>
            <div
              className={`
                relative w-12 h-5 rounded-full transition-colors
                ${theme === "dark" ? "bg-yellow-400" : "bg-purple-500"}
              `}
            >
              <div
                className={`
                  absolute top-0.5 left-0.5 w-4 h-4 rounded-full
                  transition-transform duration-300
                  ${theme === "dark" ? "bg-purple-600 translate-x-7" : "bg-yellow-200 translate-x-0"}
                `}
              ></div>
            </div>
            <span className="ml-2">{getModeText(language, theme)}</span>
          </div>

      
          <span
            className="cursor-pointer flex items-center space-x-2"
            onClick={handleLanguageChange}
          >
            <span>|</span>
            <span>
              {language === "tr" ? "SWITCH TO ENGLISH" : "TÜRKÇE'YE GEÇ"}
            </span>
          </span>

        
          <nav>
            <ul className="flex gap-6 items-center">
              <li className="cursor-pointer hover:text-purple-600 transition-colors">
                Skills
              </li>
              <li className="cursor-pointer hover:text-purple-600 transition-colors">
                Projects
              </li>
              <li
                className="
                  cursor-pointer text-purple-600 border border-purple-600
                  px-3 py-1 rounded hover:bg-purple-600 hover:text-white
                  transition-colors
                "
              >
                Hire me
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
