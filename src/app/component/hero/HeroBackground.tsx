"use client";

import React, { useEffect, useRef } from "react";

export function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Background floating particles & stars animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    interface Particle {
      x: number;
      y: number;
      size: number;
      baseAlpha: number;
      alpha: number;
      speedY: number;
      speedX: number;
      pulseSpeed: number;
      color: string;
    }

    const colors = [
      "rgba(147, 197, 253,", // light blue
      "rgba(167, 139, 250,", // violet
      "rgba(129, 140, 248,", // indigo
      "rgba(255, 255, 255,", // white
      "rgba(56, 189, 248,",  // sky
    ];

    const particleCount = 65;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      const baseAlpha = Math.random() * 0.6 + 0.2;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2.2 + 0.8,
        baseAlpha: baseAlpha,
        alpha: baseAlpha,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.2,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        color: color,
      });
    }

    let tick = 0;
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      tick++;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        p.alpha = p.baseAlpha + Math.sin(tick * p.pulseSpeed) * 0.25;
        const currentAlpha = Math.max(0.1, Math.min(1, p.alpha));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color} ${currentAlpha})`;
        ctx.shadowBlur = p.size > 1.8 ? 8 : 0;
        ctx.shadowColor = `${p.color} 0.8)`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Background Interactive Starfield Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0 opacity-80"
      />

      {/* Atmospheric Background Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[380px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[380px] bg-orange-600/10 rounded-full blur-[140px] pointer-events-none z-0" />
    </>
  );
}

export default HeroBackground;

