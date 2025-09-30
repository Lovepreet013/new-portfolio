import { ArrowLeft } from "lucide-react"
import { NavLink } from "react-router"
import { projects } from "../data/projects"
import ProjectCard from "./ProjectCard"
import { useEffect, useState } from "react"

const Projects = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setLoaded(true), 100); // small delay for smoothness
        return () => clearTimeout(timer);
    }, [])
    return(
        <div className={`transition-all duration-700 ease-in-out ${loaded ? "blur-0 opacity-100" : "blur-lg opacity-0"}
        `}>
            <div className="mt-4 max-w-[650px] mx-auto">
                <NavLink to="/"><ArrowLeft /></NavLink>
            </div>
            <div className="max-w-[650px] px-4 mt-10 mx-auto py-4">
                <h1 className="text-2xl text-gray-200 font-light">Projects</h1>
                <p className="text-gray-400 text-[15px] mt-2">
                    Here is the list of everything that I try 
                </p>

                {projects.slice(0,4).map((project) => (
                    <ProjectCard src={project.src} name={project.name} link={project.link} key={project.name} description={project.description}/>
                ))}

            </div>
        </div>
    )
}

export default Projects