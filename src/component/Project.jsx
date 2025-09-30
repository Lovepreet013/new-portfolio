import ProjectCard from "./ProjectCard"

import { projects } from "../data/projects"

const Project = () => {
    return(
        <>
            {projects.slice(0,4).map((project) => (
                <ProjectCard src={project.src} name={project.name} link={project.link} key={project.name} description={project.description}/>
            ))}
            
        </>
    )
}

export default Project