import { Github } from "lucide-react"

const Footer = () => {
    return(
        <div className="mb-5 description mt-1">
            <div className="flex items-center justify-between">
                <h1 className="description mt-4 mb-3 text-[#f33c3c]">Lovepreet.dev</h1>
                <a href="https://github.com/Lovepreet013/new-portfolio" className="text-gray-500 hover:text-gray-100" target="_blank"><Github size={20}/></a>
            </div>
            <p className="description text-[13px] text-gray-700 ">That's it, hope you like</p>
            <p className="mb-4 description text-[13px] text-gray-700">Built with Love by Lovepreet []~(￣▽￣)~*</p>
        </div>
    )
}

export default Footer