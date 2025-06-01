"use client";
import { useLayoutEffect } from "react";
import Image from "next/image";
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
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader h-screen w-full bg-[#030303] fixed bottom-0 left-0 right-0 z-[99] flex items-center justify-center overflow-hidden">
      <div
        className="texts-container flex items-center justify-between h-[7.3rem] text-[7.15rem] font-extrabold text-[#f6f6f9] overflow-hidden tracking-[3.9px] outline-none xl:text-[3.9rem] xl:h-[3.64rem] md:text-[3.64rem] md:h-[3.25rem] md:tracking-[1.3px]"
        style={{
          fontFamily: "'Work Sans', sans-serif",
          WebkitBoxReflect: "below 1px linear-gradient(transparent, #0008)",
        }}
      >
        <span className="w-[10.14rem] h-[10.66rem] mr-[1.3rem] flex relative items-center justify-center xl:mr-[0.65rem] xl:h-[5.2rem] xl:w-[4.68rem] md:h-[4.55rem] md:w-[4.16rem] md:mr-[0.52rem]">
          <Image
            src="https://res.cloudinary.com/dhvj8x2nq/image/upload/f_auto,q_auto/v1739712659/swan-logo-transparent_rphcfl"
            alt="Aquatic Swan Design"
            fill
          />
        </span>
        <span>Duckaroo</span>
        <span>
          <sup className="text-[2.34rem] ml-[0.26rem] relative -top-[0.65rem] xl:text-[1.3rem] xl:ml-[0.26rem] xl:-top-[0.65rem] md:text-[1.3rem] md:ml-[0.13rem] md:top-0">
            ™
          </sup>
        </span>
      </div>
    </div>
  );
};
