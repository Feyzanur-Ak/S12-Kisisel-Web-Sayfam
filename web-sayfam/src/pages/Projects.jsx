import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Projects = () => {
  const { theme, projects , language} = useContext(GlobalContext);
  const isDark = theme === "dark";

  return (
    <div className={`w-screen px-8 ${isDark ? "bg-gray-800" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto">
        <h1
          className={`text-5xl font-bold mx-8 mb-10 ${
            isDark ? "text-indigo-200" : "text-gray-900"
          }`}
        >
           {language === "tr" ? "Projeler" : "Projects"}
        </h1>
        <div className="flex flex-wrap -mx-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="sm:w-1/2 lg:w-1/3 px-4 mb-8 flex"
            >
              <div
                className={`flex flex-col p-6 h-full w-full rounded-md ${
                  isDark ? "bg-gray-800" : "bg-white "
                }`}
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="mb-4 w-full h-40 object-cover "
                />
                <h3 className="text-3xl font-semibold text-purple-600 mb-4">
                  {project.title}
                </h3>
                <p
                  className={`mb-5 flex-grow ${
                    isDark ? "text-neutral-200" : "text-gray-500"
                  }`}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 border rounded-md text-sm ${
                        isDark
                          ? "text-indigo-500 border-indigo-500 bg-neutral-700"
                          : "text-purple-600 border-purple-600"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`underline ${
                      isDark ? "text-gray-300" : "text-purple-600"
                    }`}
                  >
                    Github
                  </a>
                  <a
                    href={project.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`underline ${
                      isDark ? "text-gray-300" : "text-purple-600"
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
    </div>
  );
};

export default Projects;