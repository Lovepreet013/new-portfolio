import Pulser from "../ui/Pulser"
import { Download, Github, Linkedin, Mail, Twitter } from "lucide-react"
import Button from "../ui/Button"

const HeroSection = () => {

    const aboutButtons = [
        {
          name : "Available for new opportunities",
          logo : <Pulser/>,
          link : "https://www.linkedin.com/in/lovepreetsingh013/"
        },
        {
          name : "Download CV",
          logo : <Download size={16}/>,
          link : "https://drive.google.com/file/d/1ADpbafyDsjUz3lUerfgCBE6YMVKkGN6B/view?usp=sharing"
        }
    ]
      
    const findButtons = [
        {
          name : "Email me",
          logo : <Mail size={16}/>,
          link : "mailto:singhlovepreet1209@gmail.com"
        },
        {
          name : "Github",
          logo : <Github size={16}/>,
          link : "https://github.com/Lovepreet013"
        },
        {
          name : "Linkedin",
          logo : <Linkedin size={16}/>,
          link : "https://www.linkedin.com/in/lovepreetsingh013/"
        },
        {
          name : "Twitter",
          logo : <Twitter size={16}/>,
          link : "https://x.com/Dev_013_"
        }
    ]
      
    return(
        <>
        <div className="flex mt-8">
          <div className="w-26 h-26 overflow-hidden rounded-full">
            <img 
              src="../img2.png"
              alt="portfolio image"
              className="w-full h-full object-cover transition-transform duration-200 hover:scale-115 cursor-pointer" 
            />
          </div>

          <div className="space-y-1">
            <h1 className="text-3xl font-light mx-4 tracking-tight">Lovepreet Singh</h1>
            <a 
              href="https://github.com/Lovepreet013" 
              target="_blank" 
              className="mx-4 font-normal text-gray-500 tracking-tight">@lovepreet013
            </a>
          </div>
        </div>

        <div className=" mt-4 text-gray-400">
          <div className="space-y-3 text-[15px]">
            <p>Hi, I'm <span className="text-gray-200">Lovepreet</span>, a developer who loves building tools that are user-friendly, simple and delightful.</p>

            <p>I love <span className="text-gray-200">Frontend Development</span> so yes, I can make things look good. I'm also <span className="text-gray-200">learning about Backend and DSA.</span></p>

            <p>Other than that, I do like sketching specially potraits. Somehow I started reading books in my free time (I'm kinda shocked by this but, Yes). So, that's me in Nutshell!</p>
          </div>
        </div>

        <div className="mt-4 border-b-1 pb-6 border-gray-800">
          <ul className="flex flex-wrap items-center space-x-4">
            {aboutButtons.map((button) => (
              <Button icon={button.logo} name={button.name} link={button.link} key={button.name}/>
            ))}
          </ul>
        </div>

        <div className="mt-4 text-gray-400 border-b-1 pb-6 border-gray-800">
            <p>Where to find me if you wish to</p>
            <ul className="flex flex-wrap items-center space-x-4 mt-4">
              {findButtons.map((button) => (
                <Button icon={button.logo} name={button.name} link={button.link} key={button.name}/>
              ))}
          </ul>
        </div>
        </>
    )
}

export default HeroSection