import ProjectCard from "../ui/ProjectCard"
import { projects } from "../../data/projects"
import { NavLink } from "react-router"

const Project = () => {
    return(
        <div className="mt-4 pb-3 border-b-1 border-gray-800">
            <h1 className="text-2xl text-gray-200 font-normal">Projects</h1>
            <div className="flex items-center justify-between">
                <p className="text-gray-400 text-[15px] mt-2">Here are some of my Projects</p>
                <p 
                className="text-gray-400 text-[15px] mt-2 cursor-pointer hover:text-gray-300"
                >
                <NavLink to="/projects">View all</NavLink>
                </p>
            </div>
            {projects.slice(0,4).map((project) => (
                <ProjectCard src={project.src} name={project.name} link={project.link} key={project.name} description={project.description}/>
            ))}
            
        </div>
    )
}

export default Project