"use client";

import React from "react";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      color: "bg-indigo-500 shadow-[0_0_12px_rgba(99,102,241,0.6)]",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
      ],
    },
    {
      title: "Backend",
      color: "bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.6)]",
      skills: [
        "Supabase", 
        "PostgreSQL", 
        "REST APIs", 
        "authentication",
        "Server-side Logic",
        "API Integration"
      ],
    },
    {
      title: "Database",
      color: "bg-amber-500 shadow-[0_0_12px_rgba(245,158,11,0.6)]",
      skills: [
        "PostgreSQL",
        "SQL Queries",
        "Database Design",
        "Relationships & Foreign Keys",
        "Database Migrations",
      ],
    },
    {
      title: "Development Tools",
      color: "bg-pink-500 shadow-[0_0_12px_rgba(236,72,153,0.6)]",
      skills: [
        "VS Code", 
        "pnpm",
        "GitHub",
        "Postman",
        "Testing",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-[#070913] overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-900/10 rounded-full blur-[140px] pointer-events-none -z-0" />
      <div className="absolute top-2/3 right-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none -z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-[#9eb9fc] via-[#b096f9] to-[#c78bfa] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,154,249,0.3)]">
              Technical Skills
            </span>
          </h2>

          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-slate-300 font-normal">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </div>

        {/* Categories 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group relative p-7 sm:p-8 rounded-2xl bg-[#0c1228]/60 backdrop-blur-sm border border-slate-800/80 hover:border-slate-700/80 transition-all duration-300 hover:shadow-[0_12px_35px_-8px_rgba(0,0,0,0.5)] flex flex-col justify-start"
            >
              {/* Category Header with Colored Pill Indicator */}
              <div className="flex items-center gap-3.5 mb-6">
                <span
                  className={`w-7 sm:w-8 h-1 rounded-full ${category.color} transition-all duration-300 group-hover:w-10`}
                />
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {category.title}
                </h3>
              </div>

              {/* Skills Tags Flow */}
              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-[#141b36]/80 border border-slate-700/50 text-slate-300 text-xs sm:text-sm font-medium transition-all duration-200 hover:bg-[#1a2347] hover:text-white hover:border-slate-600 hover:-translate-y-0.5 cursor-default select-none shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

