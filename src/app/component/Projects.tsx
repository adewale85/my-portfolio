"use client";

import React from "react";
import { GitFork, ExternalLink } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Inventory Management System",
      description:
        "A comprehensive inventory management system with real-time tracking, stock alerts, and reporting features.",
      image:
        "inventory dashboard.jpg",
      imageFallbackText: "Inventory Management System",
      tags: ["HTML5","CSS3","JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Supabase", "PostgreSQL",],
      codeUrl: "https://github.com/adewale85/my-inventory-web",
      demoUrl: "https://my-inventory-ml6pobw56-adewale85s-projects.vercel.app",
    },
    {
      title: "E-commerce Platform",
      description:
        "Ecommerce platform with product listings, shopping cart, and secure checkout functionality.",
      image:
        "E-commerce hero.jpg",
      imageFallbackText: "Ecommerce Platform.jpg",
      tags: ["HTML5","CSS3","JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Supabase", "PostgreSQL",],
      codeUrl: "https://github.com/adewale85/nextjs-exclusive-app",
      demoUrl: "https://exclusive-app2-git-main-adewale85s-projects.vercel.app/",
    },
    {
      title: "Myvamsnet website",
      description:
        "Official website for Myvamsnet, showcasing features, updates, and community engagement.",
      image:
        "myvamsnet-website-hero.jpg",
      imageFallbackText: "Myvamsnet Website",
      tags: ["HTML5","CSS3","JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Supabase", "PostgreSQL",],
      // codeUrl: "https://github.com/adewale85/Myvamsnet-website",
      demoUrl: "https://myvamsnet-website.vercel.app/",
    },
    {
      title: "Photography Portfolio",
      description:
        "A visually appealing portfolio website for photographers to showcase their work and attract potential clients.",
      image:
        "portfolio-hero.jpg",
      imageFallbackText: "Photography Portfolio",
      tags: ["HTML5","CSS3","JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Supabase", "PostgreSQL",],
      codeUrl: "https://github.com/adewale85/photography-portfolio",
      demoUrl: "https://photography-portfolio-khaki-psi.vercel.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-6 sm:py-32 px-6 sm:px-8 lg:px-12 bg-[#070913] overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] max-w-full h-[400px] bg-gradient-to-r from-purple-900/10 via-indigo-900/15 to-blue-900/10 rounded-full blur-[140px] pointer-events-none -z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-[#9eb9fc] via-[#b096f9] to-[#c78bfa] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,154,249,0.3)]">
              Featured Projects
            </span>
          </h2>

          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-slate-300 font-normal">
            A selection of projects showcasing my expertise in full-stack development
          </p>
        </div>

        {/* 2x2 Grid of Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-2xl bg-[#0c1228]/60 backdrop-blur-sm border border-slate-800/80 hover:border-slate-700/80 transition-all duration-300 hover:shadow-[0_14px_40px_-10px_rgba(0,0,0,0.6)] flex flex-col overflow-hidden"
            >
              {/* Project Card Image Banner */}
              <div className="relative w-full h-52 sm:h-56 bg-slate-900/80 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />
                {/* Subtle gradient vignette to blend into card body */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1228] via-[#0c1228]/20 to-transparent" />
              </div>

              {/* Project Content Area */}
              <div className="p-6 sm:p-7 flex flex-col flex-1">
                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-indigo-100 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed font-normal flex-1">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mt-5 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-md bg-[#141b36]/90 border border-slate-700/60 text-slate-300 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons: Code & Demo */}
                <div className="flex items-center gap-3 pt-2">
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-4 rounded-lg bg-white hover:bg-slate-100 text-[#543ef6] font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-sm hover:shadow active:scale-[0.98]"
                  >
                    <GitFork className="w-4 h-4 stroke-[2.2]" />
                    <span>Code</span>
                  </a>

                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-4 rounded-lg bg-[#5d3bf6] hover:bg-[#502eed] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-[0_0_15px_rgba(93,59,246,0.35)] hover:shadow-[0_0_22px_rgba(93,59,246,0.55)] active:scale-[0.98]"
                  >
                    <ExternalLink className="w-4 h-4 stroke-[2.2]" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

