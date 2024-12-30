import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function MainPage() {
  const { title, name, description, theme } = useContext(GlobalContext);
  const isDark = theme === "dark";

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
              <div className="w-20 h-[1px] bg-purple-600 py" />
              <p className="font-bold text-purple-600">{name}</p>
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
                className={`transition-colors px-5 py-2 rounded-md font-medium ${
                  isDark
                    ? "bg-indigo-100 text-zinc-950"
                    : "text-purple-600 border border-purple-600 hover:bg-purple-600 hover:text-white"
                }`}
              >
                Hire Me
              </button>
              <button className={`px-5 py-2 flex items-center space-x-2 gap-3 border rounded-md ${
                  isDark
                    ? "bg-neutral-700 text-violet-300 hover:bg-gray-200"
                    : "text-purple-600 border border-purple-600 "
                } `}>
                <FaGithub size={18} />
                Git Hub
              </button>
              <button className={`px-5 py-2 flex items-center space-x-2 gap-3 border rounded-md ${
                  isDark
                    ? "bg-neutral-700 text-violet-300 hover:bg-gray-200"
                    : "text-purple-600 border border-purple-600 "
                } `}>
                <FaLinkedin size={18} />
                Linkedln
              </button>
            </div>
          </div>

   
          <div className="md:w-1/2 flex justify-center">
            <img
              className="rounded-xl shadow-lg w-full h-auto"
              src="https://picsum.photos/400/300"
              alt="Example"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
