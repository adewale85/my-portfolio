"use client";

import React, { useState } from "react";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";


export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err: unknown) {
      const msg =
        err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setStatus("error");
      setErrorMessage(msg);
    }
  };


  return (
    <section
      id="contactForm"
      className="relative py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-[#070913] overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] max-w-full h-[400px] bg-gradient-to-r from-indigo-900/10 via-purple-900/15 to-blue-900/10 rounded-full blur-[140px] pointer-events-none -z-0" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-[#9eb9fc] via-[#b096f9] to-[#c78bfa] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,154,249,0.3)]">
              Get In Touch
            </span>
          </h2>

          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-slate-300 font-normal">
            Have a project in mind? Let's work together to build something amazing
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="">
          {/* Left: Contact Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 sm:gap-6">
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block text-white text-sm font-medium mb-2"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-[#0c1228]/80 border border-slate-800 text-white placeholder-slate-500 text-sm outline-none transition-all duration-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-white text-sm font-medium mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 rounded-lg bg-[#0c1228]/80 border border-slate-800 text-white placeholder-slate-500 text-sm outline-none transition-all duration-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
            </div>

            {/* Message Input */}
            <div>
              <label
                htmlFor="message"
                className="block text-white text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded-lg bg-[#0c1228]/80 border border-slate-800 text-white placeholder-slate-500 text-sm outline-none transition-all duration-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 resize-none"
              />
            </div>

            {/* Error Notification */}
            {status === "error" && (
              <div className="flex items-center gap-2.5 p-3.5 rounded-lg bg-red-900/30 border border-red-500/50 text-red-200 text-xs sm:text-sm">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                <span>{errorMessage}</span>
              </div>
            )}   

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="w-full py-3.5 px-6 rounded-lg font-semibold text-sm sm:text-base text-white bg-[#5d3bf6] hover:bg-[#502eed] transition-all duration-200 shadow-[0_0_20px_rgba(93,59,246,0.45)] hover:shadow-[0_0_28px_rgba(93,59,246,0.65)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Sending message...</span>
                </>
              ) : status === "success" ? (
                <>
                  <CheckCircle2 className="w-5 h-5 text-emerald-300" />
                  <span>Message Sent Successfully!</span>
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>

          {/* Right: Let's Connect Card */}
         
        </div>
      </div>
    </section>
  );
}