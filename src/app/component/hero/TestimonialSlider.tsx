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
      "Exceptional full-stack developer who builds high-performance, robust web applications with modern architecture and great precision.",
    name: "Carolina Abbott",
    role: "Business Owner",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 2,
    quote:
      "Delivered our MERN platform on time with clean code, incredible speed, and seamless real-time WebSocket communication.",
    name: "Marcus Vance",
    role: "Tech Lead & Founder",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 3,
    quote:
      "A true master of UI responsiveness and scalable backend APIs. The user engagement on our web app doubled after launch.",
    name: "Sophia Chen",
    role: "Product Manager",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
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
      <div className="min-h-[70px] sm:min-h-[64px] flex items-center mb-5">
        <p
          key={activeItem.id}
          className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal animate-in fade-in duration-300"
        >
          "{activeItem.quote}"
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
