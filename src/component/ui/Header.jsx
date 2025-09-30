import { LocateFixed } from "lucide-react";
import { useEffect, useState } from "react"

const Header = () => {
    const [currentTime, setCurrentTime] = useState(new Date())

    useEffect(() => {
      const timerId = setInterval(() => {
        setCurrentTime(new Date())
      }, 1000); // Update every second
  
      return () => clearInterval(timerId) // Cleanup on unmount
    }, [])
  
    return (
      <div className="flex items-center justify-between mx-8 py-4 font-light tracking-wide text-sm">
        <p>IN {currentTime.toTimeString().split(' ')[0]}</p>

        <div className="flex items-center">
          <LocateFixed size={16} color="grey"/> <span className="ml-1">Punjab, India</span> 
        </div>
      </div>
    )
}

export default Header