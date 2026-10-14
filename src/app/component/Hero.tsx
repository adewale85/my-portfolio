"use client";

import React from "react";
import { HeroBackground } from "./hero/HeroBackground";
import { HeroContent } from "./hero/HeroContent";
import { HeroAvatar } from "./hero/HeroAvatar";

export function Hero() {
  const scrollToAbout = () => {
    const el = document.querySelector("#about");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12 pt-28 pb-20 overflow-hidden bg-[#070913]">
      {/* Reusable Starfield & Lighting Background */}
      <HeroBackground />

      {/* 2-Column Responsive Grid */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Component 1: Left Side Content & 3-Card Testimonial Slider */}
        <HeroContent />

        {/* Component 2: Right Side 3D Avatar & Floating Badges */}
        <HeroAvatar />
      </div>

      {/* Subtle Scroll Down Mouse Indicator */}
      <div
        onClick={scrollToAbout}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer opacity-60 hover:opacity-100 transition-opacity duration-200 z-10"
        aria-label="Scroll to about"
      >
        <div className="w-5 h-9 rounded-full border-2 border-slate-600/70 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-slate-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
