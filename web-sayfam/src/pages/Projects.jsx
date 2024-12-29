import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Projects = () => {
  const { theme, projects } = useContext(GlobalContext);
  const isDark = theme === "dark";

  return (
    <div className="max-w-7xl mx-auto px-8 py-10">
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
            className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8"
          >
            <div className="p-6  rounded-md shadow-lg bg-white">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="mb-4 rounded"
              />
              <h3 className="text-3xl font-semibold text-purple-600 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-700 mb-5">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 border rounded-md text-purple-600 border-purple-600 text-sm cursor-pointer"
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
                  className="text-purple-600 underline"
                >
                  Github
                </a>
                <a
                  href={project.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 underline"
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
