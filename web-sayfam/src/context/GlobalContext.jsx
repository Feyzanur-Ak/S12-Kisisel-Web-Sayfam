import { createContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { contentData, projectsData } from '../mocks/data';


export const GlobalContext = createContext();


// eslint-disable-next-line react/prop-types
export const GlobalProvider = ({children})=>{
   
    const [language, setLanguage] = useLocalStorage('language', 'tr');

    const [theme, setTheme] = useLocalStorage('theme', 'light');

    const { title, description, skills, profile } = contentData[language];

    const projects = projectsData[language];

    const values={
        language,
        setLanguage,
        theme,
        setTheme,
        title,
        description,
        profile,
        skills,
        projects
    }

return (
    <GlobalContext.Provider value={values}>
            {children}
        </GlobalContext.Provider>
)
}