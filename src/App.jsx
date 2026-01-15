import { useEffect, useState } from "react"
import { Analytics } from "@vercel/analytics/react"
import Header from "./component/ui/Header"
import Work from "./component/section/Work"
import Footer from "./component/ui/Footer"
import Project from "./component/section/Project"
import HeroSection from "./component/section/HeroSection"
import SkillSection from "./component/section/SkillSection"
import CertificatesSection from "./component/section/CertificatesSection"
import { Analytics } from '@vercel/analytics/react';

function App() {
  const [loaded, setLoaded] = useState(false);

  // Trigger blur removal after mount
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100); // small delay for smoothness
    return () => clearTimeout(timer);
  }, [])


  return(
    <div className={`transition-all duration-500 ease-in-out ${loaded ? "blur-0 opacity-100" : "blur-lg opacity-0"}
    `}>

      <Header/>

      <div className="max-w-[650px] px-4 mx-auto">
        <HeroSection/>
        <SkillSection/>
        <Work/>
        <Project/>
        <CertificatesSection/>
        <Footer/>
        <Analytics />
      </div>

      <Analytics />

    </div>
  )
}

export default App