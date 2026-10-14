"use client";

import React from "react";
import { Code2, Zap, Palette, Wind, Braces, Layers, Atom } from "lucide-react";
import Image from "next/image";

function SupabaseIcon({ className = "w-4 h-4 sm:w-5 sm:h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L.22 14.28a.396.396 0 0 0 .315.632H9.84v9.124c0 .324.37.5.586.257l11.233-14.306a.396.396 0 0 0-.297-.633z" />
    </svg>
  );
}

export function HeroAvatar() {
  const badges = [
    {
      name: "HTML",
      icon: Code2,
      position: "top-4 sm:top-6 -left-3 sm:left-0",
      animation: "animate-float-slow",
      border: "border-orange-500/30",
      shadow: "shadow-[0_8px_25px_rgba(249,115,22,0.25)]",
      bg: "bg-orange-500/20",
      color: "text-[#f97316]",
    },
    {
      name: "Next.js",
      icon: Zap,
      position: "-top-5 sm:-top-4 left-1/3 -translate-x-1/2 sm:translate-x-8",
      animation: "animate-float-reverse",
      border: "border-slate-400/30",
      shadow: "shadow-[0_8px_25px_rgba(255,255,255,0.15)]",
      bg: "bg-white/15",
      color: "text-white",
    },
    {
      name: "CSS",
      icon: Palette,
      position: "top-4 sm:top-6 -right-3 sm:right-0",
      animation: "animate-float-slow",
      border: "border-blue-500/30",
      shadow: "shadow-[0_8px_25px_rgba(59,130,246,0.25)]",
      bg: "bg-blue-500/20",
      color: "text-[#3b82f6]",
    },
    {
      name: "Tailwind",
      icon: Wind,
      position: "top-[44%] -left-6 sm:-left-3",
      animation: "animate-float-reverse",
      border: "border-cyan-500/30",
      shadow: "shadow-[0_8px_25px_rgba(6,182,212,0.25)]",
      bg: "bg-cyan-500/20",
      color: "text-[#06b6d4]",
    },
    {
      name: "React",
      icon: Atom,
      position: "top-[42%] -right-6 sm:-right-3",
      animation: "animate-float-slow",
      border: "border-sky-400/30",
      shadow: "shadow-[0_8px_25px_rgba(56,189,248,0.25)]",
      bg: "bg-sky-400/20",
      color: "text-[#38bdf8]",
    },
    {
      name: "JavaScript",
      icon: Braces,
      position: "bottom-16 sm:bottom-20 -left-4 sm:left-0",
      animation: "animate-float-slow",
      border: "border-yellow-500/30",
      shadow: "shadow-[0_8px_25px_rgba(234,179,8,0.25)]",
      bg: "bg-yellow-500/20",
      color: "text-[#eab308]",
    },
    {
      name: "TypeScript",
      icon: Layers,
      position: "bottom-16 sm:bottom-20 -right-4 sm:right-0",
      animation: "animate-float-reverse",
      border: "border-indigo-500/30",
      shadow: "shadow-[0_8px_25px_rgba(99,102,241,0.25)]",
      bg: "bg-indigo-500/20",
      color: "text-[#818cf8]",
    },
    {
      name: "Supabase",
      icon: SupabaseIcon,
      position: "-bottom-3 sm:-bottom-2 left-1/2 -translate-x-1/2",
      animation: "animate-float-slow",
      border: "border-emerald-500/30",
      shadow: "shadow-[0_8px_25px_rgba(16,185,129,0.25)]",
      bg: "bg-emerald-500/20",
      color: "text-[#3ecf8e]",
    },
  ];

  return (
    <div className="lg:col-span-5 relative flex items-center justify-center w-full min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] my-6">
      {/* Concentric Radar / Orbit Rings scaled to fit large avatar */}
      <div className="absolute w-[440px] sm:w-[520px] lg:w-[600px] h-[440px] sm:h-[520px] lg:h-[600px] rounded-full border border-orange-500/15 animate-pulse-ring pointer-events-none" />
      <div className="absolute w-[340px] sm:w-[410px] lg:w-[480px] h-[340px] sm:h-[410px] lg:h-[480px] rounded-full border border-orange-500/20 pointer-events-none" />
      <div className="absolute w-[240px] sm:w-[300px] lg:w-[360px] h-[240px] sm:h-[300px] lg:h-[360px] rounded-full border border-orange-500/25 pointer-events-none" />

      {/* Warm Ambient Backlight */}
      <div className="absolute w-[360px] sm:w-[440px] h-[360px] sm:h-[440px] bg-gradient-to-tr from-orange-600/20 via-purple-600/15 to-transparent rounded-full blur-[100px] pointer-events-none" />

      {/* Floating 3D Tech Badges */}
      {badges.map((badge) => {
        const Icon = badge.icon;
        return (
          <div
            key={badge.name}
            className={`absolute ${badge.position} z-20 ${badge.animation}`}
          >
            <div
              className={`flex items-center gap-2 p-2 sm:p-2.5 rounded-2xl bg-[#0c1228]/85 backdrop-blur-md border ${badge.border} ${badge.shadow} transition-transform duration-300 hover:scale-110 cursor-default select-none`}
            >
              <div
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl ${badge.bg} flex items-center justify-center ${badge.color}`}
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.4]" />
              </div>
              <span className="text-xs font-bold text-white pr-1">
                {badge.name}
              </span>
            </div>
          </div>
        );
      })}

      {/* Hero Image Container: Large, Bold, and Bottom-Faded into Background */}
      <div className="relative z-10 w-full max-w-[380px] sm:max-w-[480px] lg:max-w-[560px] h-[480px] sm:h-[540px] lg:h-[600px] flex items-end justify-center overflow-hidden">
        <Image
          src="/hero_image3.png"
          alt="Adewale Odusola - Frontend Developer"
          width={640}
          height={640}
          priority
          className="w-full h-full object-contain object-bottom drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)] select-none pointer-events-none [mask-image:linear-gradient(to_bottom,black_65%,transparent_98%)] [-webkit-mask-image:linear-gradient(to_bottom,black_65%,transparent_98%)]"
        />

        {/* Seamless bottom fade overlay into cosmic background #070913 */}
        <div className="absolute inset-x-0 bottom-0 h-24 sm:h-32 bg-gradient-to-t from-[#070913] via-[#070913]/70 to-transparent pointer-events-none" />
      </div>
    </div>
  );
}

export default HeroAvatar;
