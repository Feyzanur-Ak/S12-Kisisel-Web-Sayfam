import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Footer = () => {
  const { theme, language } = useContext(GlobalContext);
  const isDark = theme === "dark";

  return (
    <section
      className={`w-screen px-8 py-10  ${
        isDark ? "bg-black text-indigo-100" : "bg-gray-100 text-gray-900"
      }`}
    >
<div className="max-w-7xl mx-auto">
      <div className="  mb-16 w-1/2">
        <span className="text-3xl font-bold ">
          {language === "tr"
            ? "Birlikte çalışarak bir sonraki büyük fikrinizi hayata geçirelim."
            : "Let’s join forces to bring your next big idea to life."}
        </span>
      </div>

  
      <div className="flex flex-col md:flex-row justify-between items-center">
       
        <a
          href="mailto:senturkfeyzanur96@gmail.com"
          className="text-lg  flex items-center mb-4 md:mb-0 "
        >
          <span role="img" aria-label="mail" className="mr-2">
            📧
          </span>
          <p className={`underline ${isDark ? "text-violet-300" : "text-black"}`}>senturkfeyzanur96@gmail.com</p>
        </a>

      
        <div className="flex space-x-6 text-lg">
          <a
            href="https://personalblog.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Personal Blog
          </a>
          <a
            href="https://github.com/Feyzanur-Ak"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-green-500"
          >
            Github
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-blue-500"
          >
            Linkedin
          </a>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Footer;
