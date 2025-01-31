import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import scholavarHeroImage from "../public/scholavar-hero-img.png";

import Image from "next/image";

const Hero = () => {
  return (
    <div className="pb-20 pt-36" id="home">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col lg:flex-row justify-center items-center">
          <div className="flex items-center lg:order-3 lg:w-4/12">
            <Image
              src={scholavarHeroImage}
              className="size-[100px] md:size-fit"
              alt="Scholavar Hero Image"
            />
          </div>
          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <div className="lg:order-1 lg:w-8/12">
            <TextGenerateEffect
              words="Learn Without Limits"
              className="text-3xl md:text-5xl font-bold text-center lg:text-start mt-8 tracking-wide"
            />

            <p className="text-left md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
              Start, switch, or advance your career with hands-on courses,
              Professional Certificates, and degrees from world-class companies.
            </p>

            {/* <a href="#about">
              <MagicButton
                title="Contact Us"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a> */}

            <div className="flex flex-col md:flex-row justify-left mt-8 gap-4 items-center">
              <a href="#about">
                <MagicButton
                  title="Contact Us"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col lg:flex-row justify-center items-center">
        <div className="lg:w-2/12 lg:order-2"></div>

        <div className="lg:order-1 lg:w-6/12">
          <h1 className="">Learn Without Limits</h1>
          <p className="text-white/50 text-center mt-4 md:text-lg lg:text-left">
            Start, switch, or advance your career with hands-on courses,
            Professional Certificates, and degrees from world-class companies.
          </p>
          <div className="flex flex-col md:flex-row justify-center mt-8 gap-4 items-center">
            <button className="inline-flex items-center gap-2 border border-white/15 px-12 h-12 rounded-xl">
              <span className="font-semibold">Join Us</span>
            </button>
            <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 lg:px-10 h-12 rounded-xl">
              <span className="font-semibold">Learn More</span>
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
