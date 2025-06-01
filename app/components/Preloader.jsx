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
        className="texts-container flex items-center justify-between
                   h-[3rem] text-[2.5rem]
                   sm:h-[4rem] sm:text-[3.2rem]
                   md:h-[3.25rem] md:text-[3.64rem]
                   lg:h-[4.5rem] lg:text-[4.5rem]
                   xl:h-[5rem] xl:text-[5.5rem]
                   2xl:h-[7.3rem] 2xl:text-[7.15rem]
                   font-extrabold text-[#f6f6f9] overflow-hidden
                   tracking-[1px] sm:tracking-[1.2px] md:tracking-[1.3px] lg:tracking-[2px] xl:tracking-[2.5px] 2xl:tracking-[3.9px]
                   outline-none"
        style={{
          fontFamily: "'Work Sans', sans-serif",
          WebkitBoxReflect: "below 1px linear-gradient(transparent, #0008)",
        }}
      >
        <span
          className="w-[3rem] h-[3rem] mr-[0.4rem]
                        sm:w-[3.5rem] sm:h-[3.5rem] sm:mr-[0.5rem]
                        md:w-[4.16rem] md:h-[4.55rem] md:mr-[0.52rem]
                        lg:w-[5rem] lg:h-[5.5rem] lg:mr-[0.7rem]
                        xl:w-[6rem] xl:h-[6.5rem] xl:mr-[0.8rem]
                        2xl:w-[10.14rem] 2xl:h-[10.66rem] 2xl:mr-[1.3rem]
                        flex relative items-center justify-center"
        >
          <Image
            src="https://res.cloudinary.com/dhvj8x2nq/image/upload/f_auto,q_auto/v1739712659/swan-logo-transparent_rphcfl"
            alt="Aquatic Swan Design"
            fill
            className="object-contain"
          />
        </span>
        <span>Duckaroo</span>
      </div>
    </div>
  );
};
