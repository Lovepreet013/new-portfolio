import ProjectCard from "./ProjectCard"

const projects = [
    {
      src : "../public/projects/AI-Journal.png",
      name : "AI Journal App",
      link : "https://github.com/Lovepreet013/AI-Journal-App"
    },
    {
        src : "../public/projects/basicDashboard.png",
        name : "Basic Dashboard",
        link : "https://github.com/Lovepreet013/AI-Journal-App"
    },
    {
        src : "../public/projects/conference.png",
        name : "Conference Expense Planner",
        link : "https://github.com/Lovepreet013/AI-Journal-App"
    },
    {
        src : "../public/projects/cli.png",
        name : "CLI Note App",
        link : "https://github.com/Lovepreet013/AI-Journal-App"
    },
    {
        src : "../public/projects/Sorting.png",
        name : "Sorting Algo Visualizer",
        link : "https://github.com/Lovepreet013/AI-Journal-App"
    },

]

const Projects = () => {
    return(
        <>
            {projects.map((project) => (
                <ProjectCard src={project.src} name={project.name} link={project.link} key={project.name}/>
            ))}
            
        </>
    )
}

export default Projects