import { Github } from "lucide-react"

const ProjectCard = ({src, name, link}) => {
    return(
        <div 
            className=" flex my-4 group border-1 rounded-md border-gray-800 hover:border-gray-700 overflow-hidden w-full cursor-pointer hover:bg-[#131212]">
            <div className="flex-1 overflow-hidden">
                <img 
                    src={src} 
                    alt={name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105 cursor-pointer"
                 />
            </div>

            <div className="px-4 my-4 text-gray-500 flex-2">
                <div className="flex items-center justify-between space-x-5">
                    <h2 className="text-[19px] text-gray-200">{name}</h2>
                    <a href={link} className="hover:text-gray-100" target="_blank"><Github size={20}/></a>
                </div>

                <p className="text-[14px] description mt-2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, atque?
                </p>
            </div>
        </div>
    )
}

export default ProjectCard