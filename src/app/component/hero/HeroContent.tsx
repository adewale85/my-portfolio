"use client";

import React from "react";
import { Mail } from "lucide-react";
import { TestimonialSlider } from "./TestimonialSlider";

export function HeroContent() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="lg:col-span-7 flex flex-col items-start text-left w-full">
      {/* Greeting Tag */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-slate-300 font-medium text-base sm:text-lg">
          Hey, I am
        </span>
        <span className="text-[#ff6b2b] font-bold text-base sm:text-lg">
          Developer
        </span>
      </div>

      {/* Main Title (Preserved Text & Gradient) */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] select-none">
        <span className="bg-gradient-to-r from-[#9eb9fc] via-[#b096f9] to-[#c78bfa] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(168,154,249,0.35)]">
        Frontend Engineer
        </span>
      </h1>

      {/* Subtitle (Preserved Text) */}
      <h2 className="text-lg sm:text-xl font-medium text-white/95 mt-4 sm:mt-5 tracking-normal max-w-162.5">
        I'm Adewale Odusola, a frontend developer focused on building modern, responsive web applications with React, Next.js, and TypeScript. I enjoy turning ideas into functional products and developing the engineering skills needed to build reliable, maintainable software.
      </h2>


      {/* Action Buttons: Hire Me + Circular Mail Button */}
      <div className="flex items-center gap-4 mt-8 sm:mt-9 w-full max-w-xl">
        <button
          onClick={() => scrollTo("#contact")}
          className="flex-1 sm:flex-initial sm:px-56 py-3.5 sm:py-4 rounded-full font-semibold text-sm sm:text-base text-white bg-gradient-to-r from-[#ff5e14] to-[#f24e05] hover:from-[#ff6d2b] hover:to-[#ff5507] transition-all duration-200 shadow-[0_0_25px_rgba(255,94,20,0.45)] hover:shadow-[0_0_35px_rgba(255,94,20,0.65)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer text-center"
        >
          Hire me
        </button>

        <button
          onClick={() => scrollTo("#contact")}
          aria-label="Send direct message"
          className="w-12 h-12 shrink-0 rounded-full border border-slate-700/80 bg-[#0c1228]/80 hover:bg-[#151c3d] hover:border-slate-500 flex items-center justify-center text-slate-200 hover:text-white transition-all duration-200 shadow-md hover:scale-105 active:scale-95 cursor-pointer"
        >
          <Mail className="w-5 h-5 stroke-[2]" />
        </button>
      </div>

      {/* Divider Line matching max-w-xl */}
      <div className="w-full max-w-xl h-px bg-gradient-to-r from-slate-800 via-slate-700/60 to-transparent my-8 sm:my-9" />

      {/* Testimonial 3-Card Slider matching max-w-xl */}
      <TestimonialSlider />
    </div>
  );
}

export default HeroContent;
