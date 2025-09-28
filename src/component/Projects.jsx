import ProjectCard from "./ProjectCard"

const projects = [
    {
      src : "../projects/AI-Journal.png",
      name : "AI Journal App",
      link : "https://github.com/Lovepreet013/AI-Journal-App",
      description : "Developed a full-stack AI-powered journal application enabling users to track mood trends and receive AI-generated insights."
    },
    {
        src : "../projects/conference.png",
        name : "Conference Expense Planner",
        link : "https://github.com/Lovepreet013/AI-Journal-App",
        description : "App that allows the user to price out the expenses related to hosting a conference at a convention center"
    },
    {
        src : "../projects/cli.png",
        name : "CLI Note App",
        link : "https://github.com/Lovepreet013/AI-Journal-App",
        description : "A note-taking app enabling users to perform CRUD operations in the terminal providing a quick and efficient way to manage notes."
    },
    {
        src : "../projects/Sorting.png",
        name : "Sorting Algo Visualizer",
        link : "https://github.com/Lovepreet013/AI-Journal-App",
        description : "Built an interactive visualization tool for various sorting algorithms, enhancing understanding of algorithms."
    },

]

const Projects = () => {
    return(
        <>
            {projects.map((project) => (
                <ProjectCard src={project.src} name={project.name} link={project.link} key={project.name} description={project.description}/>
            ))}
            
        </>
    )
}

export default Projects