const Button = ({icon, name, link}) => {
    return(
        <button 
            className="px-3 py-1 my-0.5 border rounded-md border-gray-800 bg-[#18181B]
             text-gray-200 hover:border-[#f43030c8] cursor-pointer transition-border duration-300">
            <a 
                href={link} 
                className="flex items-center"
                target="_blank"
            >
                <span className="mr-2">{icon}</span> <p className="text-[13px] tracking-tight">{name}</p>
            </a>
        </button>
    )
}

export default Button