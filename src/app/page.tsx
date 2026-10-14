"use client";

import { Navbar } from "./component/Navbar";
import { Hero } from "./component/Hero";
import About from "./component/About";
import { Skills } from "./component/Skills";
import { Projects } from "./component/Projects";
import { Footer } from "./component/Footer";
import Contact from "./component/contact/Contact";
import { StickyWhatsApp } from "./component/StickyWhatsApp";

export default function App() {
  return (
    <main className="min-h-screen bg-[#070913] text-white selection:bg-indigo-500/30 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <StickyWhatsApp />
      {/* <Toaster theme="dark" /> */}
    </main>
  );
}
