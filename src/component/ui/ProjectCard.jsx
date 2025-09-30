import { Github } from "lucide-react";

const ProjectCard = ({ src, name, link, description }) => {
  return (
    <a href={link} target="_blank">
    <div className="flex my-4 group border rounded-md border-gray-800 hover:border-gray-700 overflow-hidden w-full cursor-pointer hover:bg-[#131212] h-30">
        
      <div className="flex-1 overflow-hidden">
        <img
          src={src}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105 cursor-pointer"
        />
      </div>

      <div className="flex flex-col justify-center px-4 py-3 flex-2 text-gray-500">
        <div className="flex items-center justify-between">
          <h2 className="text-[16px] text-gray-200 font-medium">{name}</h2>
          <a
            href={link}
            className="hover:text-gray-100 transition-colors"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={20} />
          </a>
        </div>

        <p className="text-[15px] mt-2 description">{description}</p>
      </div>
    </div>
    </a>
  );
};

export default ProjectCard;
