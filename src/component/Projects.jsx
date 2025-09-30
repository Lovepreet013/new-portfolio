import { ArrowLeft, Github } from "lucide-react";
import { NavLink } from "react-router";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import { useEffect, useState } from "react";

const allTags = ["All", "Vanilla JS", "React", "Node", "Fullstack", "CLI", "UI"]; // Updated tags

const Projects = () => {
  const [loaded, setLoaded] = useState(false);
  const [selectedTag, setSelectedTag] = useState("All");

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const filteredProjects =
    selectedTag === "All"
      ? projects
      : projects.filter((project) => project.tags?.includes(selectedTag));

  return (
    <div
      className={`transition-all duration-600 ease-in-out ${
        loaded ? "blur-0 opacity-100" : "blur-lg opacity-0"
      }`}
    >
      <div className="mt-4 max-w-[650px] mx-auto">
        <NavLink to="/">
          <ArrowLeft />
        </NavLink>
      </div>
      <div className="max-w-[650px] px-4 mt-10 mx-auto py-4">
        <div className="flex items-center justify-between">
            <h1 className="text-2xl text-gray-200 font-light">Projects</h1>
            <a href="https://github.com/Lovepreet013" className="text-gray-500 hover:text-gray-100" target="_blank"><Github size={20}/></a>
        </div>
        <p className="text-gray-400 text-[15px] mt-2">
          Here is the list of everything that I try
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1 rounded-md text-[13px] font-medium transition-colors duration-200 cursor-pointer ${
                selectedTag === tag
                  ? "bg-[#f43030c8] text-white border-[#f43030c8]"
                  : "border-gray-900 border bg-[#18181B] text-gray-300 hover:border-[#f43030c8]"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projects */}
        <div className="mt-6 space-y-4">
          {filteredProjects.map((project) => (
            <ProjectCard
              src={project.src}
              name={project.name}
              link={project.link}
              key={project.name}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
