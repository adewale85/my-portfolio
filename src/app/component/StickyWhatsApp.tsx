"use client";

import React from "react";

const WHATSAPP_NUMBER = "2348103297335";

function WhatsAppIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12.031 2C6.5 2 2 6.5 2 12.031c0 1.969.562 3.812 1.562 5.375L2 22l4.75-1.531c1.5 1 3.281 1.562 5.281 1.562 5.531 0 10.031-4.5 10.031-10.031S17.562 2 12.031 2zm5.844 14.281c-.25.688-1.438 1.312-2 1.344-.5.062-1.125.094-3.625-.938-3.188-1.312-5.25-4.531-5.406-4.75-.156-.219-1.281-1.719-1.281-3.281s.812-2.312 1.094-2.625c.281-.312.625-.375.844-.375.219 0 .438.031.625.031.219 0 .469-.062.719.531.281.656.938 2.281 1.031 2.469.094.188.156.406.031.656-.125.25-.188.406-.375.625-.188.219-.406.5-.562.656-.188.188-.375.406-.156.781.219.375.969 1.625 2.125 2.656 1.469 1.312 2.719 1.719 3.125 1.906.406.188.656.156.906-.125.25-.281 1.062-1.25 1.344-1.688.281-.438.562-.375.938-.219.375.156 2.375 1.125 2.781 1.312.406.188.688.281.781.438.094.156.094.906-.156 1.594z" />
    </svg>
  );
}

export function StickyWhatsApp() {
  return (
    <aside
      aria-label="Direct messaging contact"
      className="fixed bottom-6 right-6 z-50 pointer-events-auto"
    >
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
        className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-[0_4px_25px_rgba(37,211,102,0.55)] hover:shadow-[0_6px_35px_rgba(37,211,102,0.8)] transition-all duration-300 hover:scale-110 active:scale-95 group cursor-pointer"
      >
        {/* Pulsing Live Online Indicator */}
        <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-[#070913]"></span>
        </span>

        {/* WhatsApp Icon Only (No Text) */}
        <WhatsAppIcon className="w-7 h-7 text-white drop-shadow-sm group-hover:scale-105 transition-transform" />
      </a>
    </aside>
  );
}

export default StickyWhatsApp;

