import { Building2 } from "lucide-react";

const Work = () => {
    return (
        <div className="flex flex-col space-y-2 sm:space-y-2 mt-4">
            <div className="flex items-start justify-between">
                <div className="flex items-center space-x-2 sm:space-x-3">
                    <a target="_blank" rel="noopener noreferrer">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#18181b] rounded-lg flex items-center justify-center p-1.5 sm:p-2">
                            <Building2 />
                        </div>
                    </a>
                    <div>
                        <div className="flex items-center space-x-1.5 sm:space-x-2">
                            <a target="_blank" rel="noopener noreferrer" className="hover:text-[#e4e4e7] transition-colors duration-200">
                                <h3 className="text-[#fafafa] text-[15px] sm:text-md">Debut Infotech</h3>
                            </a>
                            <span className="px-1.5 py-0.5 bg-[#27272a] text-[#a1a1aa] text-[9px] sm:text-[10px] rounded-full">Internship</span>
                        </div>
                        <p className="text-[#a1a1aa] text-xs sm:text-sm mt-0.5">Front-end Developer</p>
                    </div>
                </div>
                <div className="text-right">
                    <p className="text-[#a1a1aa] text-xs sm:text-sm">Jan 2025 - May 2025</p>
                    <p className="text-[#71717a] text-[10px] sm:text-xs">India, Remote</p>
                </div>
            </div>
            <div className="ml-6 sm:ml-8">
                <div className="flex items-start space-x-1.5 sm:space-x-2">
                    <div className="relative inline-flex h-2 w-2 mt-[6px] sm:mt-[6px] flex-shrink-0">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-[#71717a] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#71717a]"></span>
                    </div>
                    <p className="text-[#71717a] text-sm sm:text-sm leading-relaxed">
                    Collaborated with design team to ensure pixel-perfect implementation of new features, resulting in consistent user experience and gained hands-on experience in consuming RESTful APIs to integrate front-end components with backend services, enhancing application functionality.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Work;