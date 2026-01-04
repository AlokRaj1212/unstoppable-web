import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Home from "./Components/Home";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import About from "./About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Reels from "./Components/Reels";
import TeamPage from "./Components/TeamPage";
import logo from "./assets/logo.png";




export default function App() {
  const [open, setOpen] = useState(false);

  // 🎬 Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  // 🌈 Rainbow Cursor Trail Effect
  useEffect(() => {
    const trailContainer = document.getElementById("trail-container");

    const createParticle = (x, y) => {
      const particle = document.createElement("div");
      const colors = [
        "rgba(255,0,0,0.8)",   // red
        "rgba(255,165,0,0.8)", // orange
        "rgba(255,255,0,0.8)", // yellow
        "rgba(0,255,0,0.8)",   // green
        "rgba(0,255,255,0.8)", // cyan
        "rgba(0,0,255,0.8)",   // blue
        "rgba(255,0,255,0.8)", // magenta
      ];
      const color = colors[Math.floor(Math.random() * colors.length)];

      particle.style.position = "absolute";
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      particle.style.width = "10px";
      particle.style.height = "10px";
      particle.style.borderRadius = "50%";
      particle.style.background = `radial-gradient(circle, ${color}, transparent)`;
      particle.style.pointerEvents = "none";
      particle.style.transform = `translate(-50%, -50%) scale(${Math.random() * 1.5 + 0.5
        })`;
      particle.style.opacity = "1";
      particle.style.transition =
        "opacity 0.6s ease-out, transform 0.6s ease-out";

      trailContainer.appendChild(particle);

      setTimeout(() => {
        particle.style.opacity = "0";
        particle.style.transform += " scale(0)";
      }, 10);

      setTimeout(() => {
        particle.remove();
      }, 600);
    };

    const handleMouseMove = (e) => {
      createParticle(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleNav = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-animated text-white relative overflow-hidden">
      {/* 🌫️ Cursor Trail Container */}
      <div id="trail-container" className="fixed inset-0 pointer-events-none z-[0]"

      ></div>

      {/* 🌈 Floating Gradient Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600 opacity-20 rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500 opacity-20 rounded-full mix-blend-screen filter blur-3xl animate-pulse delay-1000"></div>

      {/* ✅ Navbar */}
      <header className="fixed top-0 left-0 w-full z-40 bg-slate-900/60 backdrop-blur-md shadow-md">
        <nav
          className="max-w-7xl mx-auto px-6 md:px-8 h-18 flex items-center justify-between"
          style={{ height: "72px" }}
        >
          {/* LOGO + TEXT */}
          <div className="flex items-center gap-3 cursor-pointer">
            <img
              src={logo}
              alt="logo"
              className="w-10 h-10 rounded-xl shadow-[0_0_18px_rgba(0,225,255,0.8)] animate-pulse"
            />
            <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow">
              Unstopable Web & Media
            </span>
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-8 text-sm">
            <li onClick={() => handleNav("hero")} className="cursor-pointer hover:text-cyan-400">
              Home
            </li>
            <li onClick={() => handleNav("services")} className="cursor-pointer hover:text-cyan-400">
              Services
            </li>
            <li onClick={() => handleNav("projects")} className="cursor-pointer hover:text-cyan-400">
              Projects
            </li>
            <li onClick={() => handleNav("team")} className="cursor-pointer hover:text-cyan-400">
              Team
            </li>
            <li onClick={() => handleNav("about")} className="cursor-pointer hover:text-cyan-400">
              About
            </li>
            <li onClick={() => handleNav("contact")} className="cursor-pointer hover:text-cyan-400">
              Contact
            </li>
          </ul>

          {/* MOBILE MENU BUTTON */}
          <button className="md:hidden p-2" onClick={() => setOpen((v) => !v)}>
            <span className="text-2xl">{open ? "✖" : "☰"}</span>
          </button>
        </nav>

        {open && (
          <div className="md:hidden bg-slate-800/95 backdrop-blur-sm">
            <ul className="flex flex-col gap-3 p-4">
              <li className="py-2" onClick={() => handleNav("hero")}>Home</li>
              <li className="py-2" onClick={() => handleNav("services")}>Services</li>
              <li className="py-2" onClick={() => handleNav("projects")}>Projects</li>
              <li className="py-2" onClick={() => handleNav("team")}>Team</li>
              <li className="py-2" onClick={() => handleNav("about")}>About</li>
              <li className="py-2" onClick={() => handleNav("contact")}>Contact</li>
            </ul>
          </div>
        )}
      </header>


      {/* 🌟 HERO SECTION */}
      <main className="pt-[72px]">
        <section
          id="hero"
          className="min-h-[calc(100vh-72px)] flex flex-col items-center justify-center text-center px-6 relative z-10"
        >
          <h1
            className="text-6xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent 
            bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-gradient"
          >
            Unstopable Team
          </h1>
          <p className="mt-6 text-slate-300 text-lg max-w-2xl">
            Web Development | Data Analytics | Automation | Social media
          </p>
          <button
            onClick={() => handleNav("contact")}
            className="mt-10 px-8 py-3 rounded-full font-semibold bg-gradient-to-r from-cyan-400 to-purple-600 
            text-slate-900 hover:scale-105 transition"
          >
            Get Started
          </button>
        </section>

        {/* 💼 Sections */}
        <Home />

        <section id="services" className="py-20 bg-slate-950/50 backdrop-blur-md">
          <Services />
        </section>
        <section id="projects" className="py-20 bg-slate-950/40">
          <Projects />
        </section>

        <section id="reels" className="py-20 bg-slate-950/40">
          <Reels />
        </section>

        <section id="team" className="py-20 bg-slate-950/30">
          <TeamPage />
        </section>


        <section id="about" className="py-20 bg-slate-950/30">

          <About />
        </section>
        <section id="contact" className="py-20 bg-slate-950/20">
          <Contact />
        </section>

        {/* 🧭 Footer */}
        <Footer />
      </main>

      {/* 🟢 Floating WhatsApp Button */}
      <a
        href="https://wa.me/917828089580?text=Hi%20Unstopable%20Team!%20I%20am%20interested%20in%20your%20web%20development%20and%20data%20analytics%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transition-transform z-50 whatsapp-float"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-8 h-8"
        />
      </a>


    </div>
  );
}
