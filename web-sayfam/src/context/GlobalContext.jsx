import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { contentData, projectsData } from "../mocks/data";

export const GlobalContext = createContext();

// eslint-disable-next-line react/prop-types
export const GlobalProvider = ({ children }) => {
  const [language, setLanguage] = useLocalStorage("language", "tr");
  const [theme, setTheme] = useLocalStorage("theme", "light");

  // Dil kontrolü yap
  const content = contentData[language] || contentData["tr"];
  const projects = projectsData[language] || projectsData["tr"];



  // `content` içinden değerleri destructure et
  const { title, description, skills, profile, name, nav } = content;

  const toggleLanguage = () => {
    setLanguage((language === "tr" ? "en" : "tr"));
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const getModeText = () => 
    language === "tr" 
      ? theme === "dark" 
        ? "KARANLIK MOD" 
        : "AYDINLIK MOD" 
      : theme === "dark" 
        ? "DARK MODE" 
        : "LIGHT MODE";

  const values = {
    name,
    language,
    setLanguage,
    theme,
    setTheme,
    title,
    description,
    profile,
    skills,
    projects,
    nav,
    toggleLanguage,
    toggleTheme,
    getModeText,
   
    
  };

  return <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>;
  
};
