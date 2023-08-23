import { useEffect } from "react"
import "./Preloader.css";
import { preLoaderAnim } from "../../animations/preloaderAnimation";
import SwanLogo from "../../assets/SwanDesignLogo.png"

export const Preloader = () => {
  
  useEffect(() => {
    preLoaderAnim()
  },[])
  
  
  return (
  <div className="preloader">
      <div className="texts-container">
          <span className="preload-img-ctn"><img src={SwanLogo} alt="Aquatic Swan Design"/></span>
          <span>Duckaroo</span>
          <span><sup className="preload-trademark">™</sup></span>
      </div>
  </div>
  )
}
