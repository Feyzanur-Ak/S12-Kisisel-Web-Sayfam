
import { createContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { contentData, projectsData } from '../mocks/data';


export const GlobalContext = createContext();

// eslint-disable-next-line react/prop-types
export const GlobalProvider = ({children}) => {
   
  const [language, setLanguage] = useLocalStorage('language', 'tr');
  const [theme, setTheme] = useLocalStorage('theme', 'light');


  const { title, description, skills, profile, name, nav} = contentData[language];
  const projects = projectsData[language];

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'tr' ? 'en' : 'tr'));
  };


  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

 
  const getModeText = (lang, thm) => {
    if (lang === 'tr') {
      return thm === 'dark' ? 'KARANLIK MOD' : 'AYDINLIK MOD';
    } else {
      return thm === 'dark' ? 'DARK MODE' : 'LIGHT MODE';
    }
  };

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
    getModeText
  };

  return (
    <GlobalContext.Provider value={values}>
      {children}
    </GlobalContext.Provider>
  );
};
