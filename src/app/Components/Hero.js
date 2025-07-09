"use client";
import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const roles = [
  "Full Stack Developer",
  "AI Enthusiast",
  "Problem Solver",
  "Tech Innovator",
];
const HeroSection = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000); // changes every 3 seconds

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className="bg-[#0F0F1E] min-h-screen flex items-center overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 items-center">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 text-center lg:text-left order-2 lg:order-1 px-2 sm:px-4 md:px-6 lg:px-0">
            <h1 className="space-y-2 sm:space-y-3 md:space-y-4">
              <span className="block text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight">
                Hi, I am
              </span>
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text leading-tight">
                Saraswati Adkine
              </div>
            </h1>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-2 text-lg sm:text-xl md:text-2xl text-gray-300 px-4 sm:px-0">
              <span>I am a</span>
              <span className="text-purple-400 font-semibold transition-all duration-500 min-h-[1.5em] flex items-center">
                {roles[currentRoleIndex]}
              </span>
            </div>

            <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed px-4 sm:px-2 lg:px-0">
              I am a motivated and versatile individual, always eager to take on
              new challenges. With a passion for learning I am dedicated to
              delivering high-quality results. With a positive attitude and a
              growth mindset, I am ready to make a meaningful contribution and
              achieve great things.
            </p>

            <div className="flex justify-center lg:justify-start pt-2 sm:pt-4 px-4 sm:px-0">
              <a
                href="https://drive.google.com/file/d/1T8jshZLPsKp_yEmyJ_SJEyzBvAlrhkj9/view?usp=sharing" // replace with your actual resume file path or external link
                target="_blank" // opens in new tab
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full
               flex items-center space-x-2 hover:scale-105 transition-all duration-300 shadow-lg
               hover:shadow-purple-500/25 text-sm sm:text-base font-semibold
               active:scale-95 focus:outline-none focus:ring-4 focus:ring-purple-500/50"
              >
                <span>Check Resume</span>
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative flex justify-center items-center order-1 lg:order-2 px-4 sm:px-8 md:px-12 lg:px-4 xl:px-8">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem]">
              {/* Background decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full animate-pulse"></div>

              {/* Animated ring */}
              <div className="absolute inset-0 rounded-full border-2 border-gradient-to-r from-purple-600/30 to-pink-600/30 animate-spin-slow"></div>

              {/* Profile image container */}
              <div className="absolute inset-3 sm:inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full p-1 shadow-2xl">
                <div className="h-full w-full rounded-full overflow-hidden bg-[#1a1a2e] p-3 sm:p-4">
                  <Image
                  width={300}
                  height={300}
                    src="/14.jpg"
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover transition-transform duration-300 hover:scale-110"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  {/* Fallback placeholder */}
                  <div
                    className="w-full h-full rounded-full bg-gradient-to-br from-purple-600/30 to-pink-600/30 flex items-center justify-center text-6xl sm:text-7xl md:text-8xl"
                    style={{ display: "none" }}
                  >
                    👨‍💻
                  </div>
                </div>
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-full blur-xl animate-pulse delay-75"></div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-full blur-xl animate-pulse delay-150"></div>

              {/* Additional floating particles */}
              <div className="absolute top-8 right-8 sm:top-12 sm:right-12 w-2 h-2 sm:w-3 sm:h-3 bg-purple-400 rounded-full animate-bounce"></div>
              <div className="absolute bottom-8 left-8 sm:bottom-12 sm:left-12 w-2 h-2 sm:w-3 sm:h-3 bg-pink-400 rounded-full animate-bounce delay-200"></div>
              <div className="absolute top-1/2 right-4 sm:right-6 w-1 h-1 sm:w-2 sm:h-2 bg-purple-300 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 sm:w-48 sm:h-48 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-100"></div>
      </div>
    </div>
  );
};

export default HeroSection;
