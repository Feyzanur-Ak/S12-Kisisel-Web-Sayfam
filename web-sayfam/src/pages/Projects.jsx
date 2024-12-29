import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
const Projects = () => {
      const { theme, projects } = useContext(GlobalContext);
      const isDark = theme === "dark";
  return (
    <div className="max-w-7xl mx-auto px-8 py-10 flex flex-row justify-between">

      <h1 className={`text-5xl font-bold mb-10 ${isDark ? "text-gray-300" : "text-gray-900"}`}>Projects</h1>

         <div className="flex flex-wrap gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="w-1/3 p-4 border rounded-lg shadow-lg flex flex-col justify-between"
                >
                  <img src={project.imageUrl} alt={project.title}></img>
            <h3 className="text-xl font-semibold text-purple-600">
              {project.title}
            </h3>
            <p className="text-gray-700 mt-4">{project.description}</p>
            <div>
              <button className=" text-purple-600 px-5 py-2 border-solid rounded font-bold border-purple-600"> React</button>
            </div>
            <div className="mt-6 flex justify-between text-inline">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
               
              >
                Github
              </a>
              <a
                href={project.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
               
              >
                View Site
              </a>
            </div>
          </div>
        ))} 
    </div>
    </div>
  )
}

export default Projects
