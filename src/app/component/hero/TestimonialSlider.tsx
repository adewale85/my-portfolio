"use client";

import React, { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  avatar: string;
}


const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "A dedicated and innovative developer with a strong eye for detail. He approaches challenges thoughtfully, writes maintainable code, and consistently delivers solutions that align with project goals.",
    name: "Felix Olatubora",
    role: "MyVamsnet CTO",
    avatar: "/Master_Felix.jpg",
  },
   {
    id: 2,
    quote:
      "He understands that great technology should solve real business problems. His commitment to delivering user-friendly digital experiences and practical solutions makes him someone you can trust with your business goals.",
    name: "Sam Victor",
    role: "Entrepreneur & Engineer",
    avatar: "/Master_Sam.jpg",
  },
  {
    id: 3,
    quote:
      "A talented frontend engineer with a solid understanding of modern web technologies. His ability to translate designs into responsive, functional interfaces and collaborate effectively makes him a valuable team member.",
    name: "Damilola Maxwell",
    role: "Senior Frontend Engineer",
    avatar: "/Master_Dami.jpg",
  },
 
];


export function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto slide every 5 seconds unless hovered
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const activeItem = testimonials[current];

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative p-6 sm:p-7 rounded-2xl bg-[#0c1228]/75 backdrop-blur-md border border-slate-800/90 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.6)] w-full max-w-xl overflow-hidden transition-all duration-300"
    >
      {/* Top row: Quote icon and Slider Navigation Arrows */}
      <div className="flex items-center justify-between mb-3">
        <div className="text-orange-400">
          <Quote className="w-7 h-7 fill-orange-400/20 stroke-[2.2]" />
        </div>

        {/* Mini Navigation Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            aria-label="Previous review"
            className="w-8 h-8 rounded-lg bg-slate-800/60 hover:bg-slate-700/80 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:text-white transition-all cursor-pointer active:scale-95"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next review"
            className="w-8 h-8 rounded-lg bg-slate-800/60 hover:bg-slate-700/80 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:text-white transition-all cursor-pointer active:scale-95"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Testimonial Quote text with smooth key transition */}
      <div className="min-h-17.5 sm:min-h-16 flex items-center mb-5">
        <p
          key={activeItem.id}
          className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal animate-in fade-in duration-300"
        >
          &ldquo;{activeItem.quote}&rdquo;
        </p>
      </div>

      {/* Bottom row: Client Info + Pagination Dots */}
      <div className="flex items-center justify-between pt-3 border-t border-slate-800/60">
        <div className="flex items-center gap-3.5">
          <Image
            src={activeItem.avatar}
            alt={activeItem.name}
            width={44}
            height={44}
            className="w-11 h-11 rounded-full object-cover border border-slate-700 shadow-sm"
          />
          <div className="flex flex-col">
            <span className="text-sm sm:text-base font-semibold text-white tracking-tight">
              {activeItem.name}
            </span>
            <span className="text-xs text-slate-400 font-normal">
              {activeItem.role}
            </span>
          </div>
        </div>

        {/* Slide Pagination Dots */}
        <div className="flex items-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === current
                  ? "w-6 bg-orange-400"
                  : "w-2 bg-slate-700 hover:bg-slate-600"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TestimonialSlider;
