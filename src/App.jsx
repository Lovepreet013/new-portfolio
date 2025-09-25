import { Download } from "lucide-react"
import Button from "./component/Button"
import Header from "./component/Header"
import Pulser from "./component/ui/Pulser"

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

function App() {
  return(
    <div>
      <Header/>

      <div>
        <div className="flex max-w-[650px] px-4 mx-auto mt-8">
          <div className="w-26 h-26 overflow-hidden rounded-full">
            <img 
              src="../public/img2.png"
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

        <div className="max-w-[650px] px-4 mt-4 mx-auto text-gray-400">
          <div className=" space-y-3 max-w-[58ch]">
            <p>Hi, I'm <span className="text-gray-200">Lovepreet</span>, a developer who loves building tools that are user-friendly, simple and delightful.</p>

            <p>I love <span className="text-gray-200">Frontend Development</span> so yes, I can make things look good. I'm also <span className="text-gray-200">learning about Backend and DSA.</span></p>

            <p>Other than that, I do like sketching specially potraits. Somehow I started reading books in my free time(I'm kinda shocked by this but, Yes). So, that's me in Nutshell!</p>
          </div>
        </div>

      </div>

      <div className="max-w-[650px] px-4 mt-4 mx-auto">
        <ul className="flex items-center space-x-4">
          {aboutButtons.map((button) => (
            <Button icon={button.logo} name={button.name} link={button.link}/>
          ))}
        </ul>
      </div>

    </div>
  )
}

export default App