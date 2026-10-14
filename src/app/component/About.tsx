"use client";

import React from "react";
import { Code2, Zap, Users, Rocket } from "lucide-react";

export default function About() {
  const cards = [
    {
      icon: Code2,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable, and well-documented code that stands the test of time",
    },
    {
      icon: Zap,
      title: "Performance",
      description:
        "Optimizing applications for speed and efficiency across all devices and platforms",
    },
    {
      icon: Users,
      title: "User-Centric",
      description:
        "Building intuitive experiences that delight users and solve real problems",
    },
    {
      icon: Rocket,
      title: "Innovation",
      description:
        "Staying ahead with cutting-edge technologies and modern development practices",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-12 sm:py-32 px-6 sm:px-8 lg:px-12 bg-[#070913] overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] max-w-full h-[400px] bg-gradient-to-r from-indigo-900/10 via-purple-900/15 to-blue-900/10 rounded-full blur-[140px] pointer-events-none -z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-[#9eb9fc] via-[#b096f9] to-[#c78bfa] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,154,249,0.3)]">
              About Me
            </span>
          </h2>

          <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed font-normal">
         I'm a Nigerian developer passionate about software engineering and building products that solve real-world problems.

I'm growing my skills in React, Next.js, TypeScript, and databases through hands-on projects, including an inventory management application.

My goal is to grow into a strong software engineer who builds reliable, maintainable, and impactful products while learning from experienced engineers and contributing to a team.

          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="group relative p-6 sm:p-7 rounded-2xl bg-[#0c1228]/60 backdrop-blur-sm border border-slate-800/80 hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_35px_-8px_rgba(99,102,241,0.2)] flex flex-col items-start"
              >
                {/* Subtle card glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Icon Container */}
                <div className="w-11 h-11 rounded-xl bg-[#1b1c3b]/90 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:text-indigo-300 group-hover:border-indigo-400/50 group-hover:scale-105 transition-all duration-300 mb-6 shadow-sm shadow-indigo-900/20">
                  <Icon className="w-5 h-5 stroke-[2.2]" />
                </div>

                {/* Card Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5 tracking-tight group-hover:text-indigo-100 transition-colors">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}