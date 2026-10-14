"use client";

import React from "react";
import { Code } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/60 bg-[#070913]/95 py-12 px-6 sm:px-8 lg:px-12 text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
        {/* Branding & Attribution */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#623bf7] to-[#7f4efc] flex items-center justify-center text-white shadow-md shadow-indigo-600/30">
            <Code className="w-4 h-4 stroke-[2.5]" />
          </div>
          <p className="text-white font-semibold text-base sm:text-lg tracking-tight">
            Designed and built by{" "}
            <span className="bg-gradient-to-r from-[#9eb9fc] via-[#b096f9] to-[#c78bfa] bg-clip-text text-transparent font-bold">
              Adewale Odusola
            </span>
            .
          </p>
        </div>

        {/* Tech Stack Info */}
        <p className="text-slate-400 text-sm font-normal">
          Built with{" "}
          <span className="text-white font-medium">Next.js</span>,{" "}
          <span className="text-blue-400 font-medium">TypeScript</span>, and{" "}
          <span className="text-cyan-400 font-medium">Tailwind CSS</span>.
        </p>

        {/* Motto / Philosophy */}
        <p className="text-xs sm:text-sm text-slate-400 font-medium tracking-wide flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
          Always learning. Always building.
        </p>

        {/* Divider */}
        <div className="w-full max-w-xs h-px bg-slate-800/80 my-2" />

        {/* Copyright */}
        <p className="text-xs text-slate-500 font-normal">
          © {currentYear} Adewale Odusola. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
