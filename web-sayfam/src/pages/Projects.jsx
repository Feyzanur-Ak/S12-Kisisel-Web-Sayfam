import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Projects = () => {
  const { theme, projects } = useContext(GlobalContext);
  const isDark = theme === "dark";

  return (
    <div className={`max-w-7xl mx-auto px-8 py-10 ${
        isDark ? "bg-gray-800" : "bg-white"}`}>
      <h1
        className={`text-5xl font-bold mb-10 ${
          isDark ? "text-gray-300" : "text-gray-900"
        }`}
      >
        Projects
      </h1>
      <div className="flex flex-wrap -mx-4 ">
        {projects.map((project) => (
          <div
            key={project.id}
            className="sm:w-1/2 lg:w-1/3 px-4 "
          >
            <div className={`p-6  h-full rounded-md  h-full${
        isDark ? "bg-gray-800" : "bg-white"}`}>
              <img
                src={project.imageUrl} 
                alt={project.title}
                className="mb-4 "
              />
              <h3 className="text-3xl font-semibold text-purple-600 mb-2 h-10">
                {project.title}
              </h3>
              <p className={`mb-5 ${ isDark ? "text-gray-300" : "text-gray-500"}`}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 border rounded-md text-m cursor-pointer ${ isDark ? "text-purple-300 border-purple-300 bg-gray-700" : " text-purple-600 border-purple-600 "}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-between ">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={` ${isDark ?  "text-gray-300 underline" : "text-purple-600 underline"
                  }`}
                >
                  Github
                </a>
                <a
                  href={project.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={` ${isDark ?  "text-gray-300 underline" : "text-purple-600 underline"
                  }`}
                >
                  View Site
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
