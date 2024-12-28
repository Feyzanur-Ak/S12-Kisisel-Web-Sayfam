import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
const Projects = () => {
      const { theme } = useContext(GlobalContext);
      const isDark = theme === "dark";
  return (
    <div className="max-w-7xl mx-auto px-8 py-10 flex flex-row justify-between">
      <h1    className={`text-5xl font-bold mb-10 ${
            isDark ? "text-gray-300" : "text-gray-900"
          }`}>Projects</h1>
    </div>
  )
}

export default Projects
