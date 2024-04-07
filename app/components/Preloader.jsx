'use client'
import { useLayoutEffect } from "react"
import "../styles/Preloader.css"
import SwanLogo from "../../public/swan-logo-transparent.png"
import Image from "next/image"
import gsap from "gsap";

const tl = gsap.timeline();
// Preloader Animation
const preLoaderAnim = () => {
  tl.to("body", {
    duration: 0,
    css: { overflowY: "hidden" },
    ease: "power3.inOut",
  })
    .to(".texts-container", {
      duration: 0,
      opacity: 1,
      ease: "Power3.easeOut",
    })
    .from(".texts-container span", {
      duration: 2,
      delay: 0.5,
      y: 180,
      ease: "Power3.easeOut",
    })
    .to(".texts-container span", {
      duration: 1,
      y: 180,
      ease: "Power3.easeOut",
    })
    .to("body", {
      duration: 1.1,
      ease: "power3.inOut",
    })
    .to(
      ".preloader",
      {
        duration: 2,
        height: "0vh",
        ease: "Power3.easeOut",
      },
      "-=2"
    )
    .to(".preloader", {
      duration: 1,
      css: { display: "none" },
    });
};

export const Preloader = () => {

  useLayoutEffect(() => {
    preLoaderAnim()
  }, [])


  return (
    <div className="preloader">
      <div className="texts-container">
        <span className="preload-img-ctn">
          <Image src={SwanLogo} alt="Aquatic Swan Design" fill />
        </span>
        <span>Duckaroo</span>
        <span><sup className="preload-trademark">™</sup></span>
      </div>
    </div>
  )
}
