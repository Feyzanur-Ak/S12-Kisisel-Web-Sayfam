import useGlobalContext from "../hooks/useGlobalContext";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import meImage from "../../public/images/ben.jpg";

export default function MainPage() {
  const { title, name, description, theme , language} = useGlobalContext();
  const isDark = theme === "dark";
  const history = useHistory();



  return (
    <section
      className={`w-screen px-0 py-14 ${
        isDark ? "bg-gray-800" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4">
      
          <div className="md:w-1/2 space-y-10">
            <div className="flex items-center space-x-2">
              <div className={`w-20 h-[1px] py ${isDark ? "bg-violet-300" : "bg-indigo-800"} `} />
              <p className={`font-bold ${isDark ? "text-violet-300" : "text-indigo-700"}  `}>{name}</p>
            </div>
            <h1
              className={`text-5xl font-bold ${
                isDark ? "text-indigo-200" : "text-black"
              }`}
            >
              {title}
            </h1>
            <p
              className={`text-xl font-normal ${
                isDark ? "text-neutral-200" : "text-gray-500"
              }`}
            >
              {description}
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <button
              onClick={()=>history.push('/contact')}
                className={`transition-colors px-5 py-2 rounded-md font-medium ${
                  isDark
                    ? "bg-indigo-100 text-zinc-950"
                    : "text-purple-600 border border-purple-600 hover:bg-purple-600 hover:text-white"
                }`}
              >
                {language === "tr" ? "İletişime Geç" : "Contact Me"}
              </button>
              <button 
                  onClick={()=>window.open("https://github.com/Feyzanur-Ak")}
                 className={`px-5 py-2 flex items-center space-x-2 gap-3 border rounded-md ${
                  isDark
                    ? "bg-neutral-700 text-violet-300  hover:bg-purple-600 hover:text-white"
                    : "text-purple-600 border border-purple-600  hover:bg-purple-600 hover:text-white"
                } `}>
                <FaGithub size={18} />
                Git Hub
              </button>
              <button 
              onClick={()=>window.open("https://www.linkedin.com/in/feyzanur-ak/")}
              className={`px-5 py-2 flex items-center space-x-2 gap-3 border rounded-md ${
                  isDark
                    ? "bg-neutral-700 text-violet-300  hover:bg-purple-600 hover:text-white"
                    : "text-purple-600 border border-purple-600  hover:bg-purple-600 hover:text-white "
                } `}>
                <FaLinkedin size={18} />
                Linkedln
              </button>
            </div>
          </div>

   
          <div className="md:w-1/2 flex justify-center">
            <img
              className="rounded-xl shadow-lg w-full h-auto"
              src={meImage}
              alt="Example"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
