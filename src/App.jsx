import { Download, Github, Linkedin, Mail, Twitter } from "lucide-react"
import Button from "./component/Button"
import Header from "./component/Header"
import Pulser from "./component/ui/Pulser"
import ImgButton from "./component/ImgButton"
import Work from "./component/Work"
import Footer from "./component/Footer"
import Project from "./component/Project"
import { NavLink } from "react-router"
import { useEffect, useState } from "react"

const aboutButtons = [
  {
    name : "Available for new opportunities",
    logo : <Pulser/>,
    link : "https://www.linkedin.com/in/lovepreetsingh013/"
  },
  {
    name : "Download CV",
    logo : <Download size={16}/>,
    link : "https://drive.google.com/file/d/1MaSzCRGrrYQ6k9bJkU1eaB2pmUdPGG18/view"
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

const langButtons = [
  {
    name : "JavaScript",
    icon : "./skills/javascript.svg",
  },
  {
    name : "HTML",
    icon : "./skills/html.svg",
  },
  {
    name : "CSS",
    icon : "./skills/css.svg",
  },
  {
    name : "Python",
    icon : "./skills/python.svg",
  }
]

const framworks = [
  {
    name : "React.js",
    icon : "./skills/reactjs.svg",
  },
  {
    name : "Node.js",
    icon : "./skills/nodejs.svg",
  },
  {
    name : "Express.js",
    icon : "./skills/expressjs.svg",
  },
  {
    name : "Tailwind CSS",
    icon : "./skills/tailwind.svg",
  },
  {
    name : "Material UI",
    icon : "./skills/materialui.svg",
  }
  ,
  {
    name : "Redux Toolkit",
    icon : "./skills/redux.svg",
  }
]

const devTools = [
  {
    name : "Git",
    icon : "./skills/git.svg",
  },
  {
    name : "Github",
    icon : "./skills/github.svg",
  },
  {
    name : "VS Code",
    icon : "./skills/vscode.svg",
  },
  {
    name : "Supabase",
    icon : "./skills/supabase.png",
  },
  {
    name : "Gemini",
    icon : "./skills/gemini-color.png",
  }
]

function App() {
  const [loaded, setLoaded] = useState(false);

  // Trigger blur removal after mount
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100); // small delay for smoothness
    return () => clearTimeout(timer);
  }, [])


  return(
    <div className={`transition-all duration-600 ease-in-out ${loaded ? "blur-0 opacity-100" : "blur-lg opacity-0"}
    `}>
      <Header/>

      <div className="max-w-[650px] px-4 mx-auto">
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
              className="mx-4 font-normal text-gray-500 tracking-tight">@lovepreet013</a>
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

        <div className="mt-4 text-gray-400 pb-6 border-b-1 border-gray-800">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl text-gray-200 font-light">Skills</h1>
            <span className="translate-y-0.5 text-md text-gray-700">Which I use/know</span>
          </div>

          <p className="text-[15px] mt-2">These are the technologies I've learned and worked with. This list is constantly evolving as I continue to learn and grow as a developer.</p>

          <h3 className="text-[14px] my-3">&lt; LANGUAGES / &gt;</h3>
          <ul className="flex flex-wrap items-center space-x-4 mt-4">
            {langButtons.map((button) => (
              <ImgButton icon={button.icon} name={button.name} key={button.name}/>
            ))}
          </ul>

          <div>
            <h3 className="text-[14px] my-3">&lt; FRAMEWORKS / LIBRARIES / &gt;</h3>
            <ul className="flex flex-wrap items-center space-x-4 mt-4">
              {framworks.map((button) => (
                <ImgButton icon={button.icon} name={button.name} key={button.name}/>
              ))}
          </ul>
          </div>

          <div>
            <h3 className="text-[14px] my-3">&lt; DEVELOPER TOOLS / &gt;</h3>
            <ul className="flex flex-wrap items-center space-x-4 mt-4">
              {devTools.map((button) => (
                <ImgButton icon={button.icon} name={button.name} key={button.name}/>
              ))}
          </ul>
          </div>
        </div>

        <div className="mt-4 text-gray-400 pb-6 border-b-1 border-gray-800">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl text-gray-200 font-light">Work</h1>
            <span className="translate-y-0.5 text-md text-gray-700">Here is my work experience!</span>
          </div>

          <Work/>
        </div>

        <div className="mt-4 pb-3 border-b-1 border-gray-800">
          <h1 className="text-2xl text-gray-200 font-light">Projects</h1>
          <div className="flex items-center justify-between">
            <p className="text-gray-400 text-[15px] mt-2">Here are some of my Projects</p>
            <p 
              className="text-gray-400 text-[15px] mt-2 cursor-pointer hover:text-gray-300"
            >
              <NavLink to="/projects">View all</NavLink>
            </p>
          </div>

          <Project/>
          
        </div>

        <div className="mt-4">
          <Footer/>
        </div>

      </div>

    </div>
  )
}

export default App