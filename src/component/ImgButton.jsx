const ImgButton = ({ icon, name }) => {
    // The prop 'icon' is a string file path (e.g., "/javascript.svg")
    const iconContent = (
        <img
            src={icon}
            alt={`${name} icon`}
            // Set size for SVG/image, e.g., w-4 h-4 (16px)
            className="w-4 h-4"
        />
    );

    return (
        <button
            className="px-3 py-1 my-1 md:my-0.5 border rounded-md border-gray-800 bg-[#18181B]
              text-gray-200 hover:border-[#f43030c8] transition-border duration-300">
            <div className="flex items-center">
                <span className="mr-2">{iconContent}</span>
                <p className="text-[13px] tracking-tight">{name}</p>
            </div>
        </button>
    );
};

export default ImgButton;