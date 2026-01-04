import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LiveCode from "./LiveCode";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative text-white px-6 overflow-hidden"
    >
      {/* 🔥 ANIMATED GRADIENT BACKGROUND OVERLAY */}
      <div className="absolute inset-0 bg-slate-900">
        <div className="absolute w-[500px] h-[500px] bg-blue-600/40 rounded-full blur-[150px] top-10 left-10 animate-pulse"></div>
        <div className="absolute w-[500px] h-[500px] bg-purple-600/40 rounded-full blur-[160px] bottom-10 right-10 animate-ping"></div>
      </div>

      {/* ✨ FLOATING SOFT LIGHTS */}
      <div className="absolute top-32 right-1/3 w-40 h-40 rounded-full bg-white/10 blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-20 left-1/3 w-32 h-32 rounded-full bg-white/5 blur-2xl animate-float"></div>

      <div className="relative max-w-6xl mx-auto text-center">

        {/* ⭐ TECH DECORATIONS LEFT */}
        <div className="absolute left-10 top-28 hidden md:block">
          <div className="w-2 h-10 bg-blue-400/70 rounded-full animate-pulse"></div>
          <div className="w-2 h-6 bg-purple-400/70 rounded-full mt-2 animate-bounce"></div>

          {/* Floating Orb */}
          <div className="w-6 h-6 bg-cyan-400/50 rounded-full blur-sm mt-4 animate-float"></div>
        </div>

        {/* ⭐ TECH DECORATIONS RIGHT */}
        <div className="absolute right-10 top-28 hidden md:block">
          {/* pulsing dot */}
          <div className="w-4 h-4 bg-pink-400/80 rounded-full animate-glow"></div>

          {/* small circuit line */}
          <div className="w-16 h-[2px] bg-green-400/60 mt-3 animate-gradient"></div>

          {/* Floating tech orb */}
          <div className="w-7 h-7 bg-blue-500/40 rounded-full blur-md mt-4 animate-float-slow"></div>
        </div>

        {/* HEADING */}
        <h1
          data-aos="fade-down"
          className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-xl"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
            We Build Digital Experiences
          </span>
        </h1>

        {/* SUB TEXT */}
        <p
          data-aos="fade-up"
          className="mt-4 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto"
        >
          Websites • Social Media • Brand Identity • Marketing • Automation
        </p>

        {/* LINE */}
        <div className="flex justify-center mt-6" data-aos="zoom-in">
          <div className="w-24 h-[2px] bg-white/40 rounded-full"></div>
        </div>

        {/* ⚡ FLOATING FEATURE TAGS */}
        <div className="mt-10 flex justify-center">
          <div className="bg-white/5 border border-white/10 backdrop-blur-md p-4 rounded-2xl shadow-xl w-full max-w-3xl">
            <div className="flex flex-wrap gap-3 justify-center text-sm">
              {[
                "React.js",
                "Meta Ads",
                "Instagram Growth",
                "Web Development",
                "SEO",
                "Google Ads",
                "JavaScript",
                "UI/UX",
                "Brand Identity",
                "Social Media",
                "Automation",
                "Content Creation",
                "Facebook Ads",
                "Analytics",
                "Landing Pages",
              ].map((word, i) => (
                <span
                  key={word}
                  data-aos="zoom-in"
                  data-aos-delay={i * 35}
                  className="px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:scale-110 transition"
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 🟩 LIVE CODE ANIMATION */}
        <div data-aos="fade-up" className="mt-14 flex justify-center">
          <div className="w-full max-w-3xl">
            <LiveCode />
          </div>
        </div>

        {/* SOCIAL ICONS */}
        <div data-aos="fade-up" className="mt-12 flex justify-center gap-8">
          <FaFacebook className="text-white/60 hover:text-blue-400 hover:scale-125 transition duration-300 text-3xl cursor-pointer" />
          <FaInstagram className="text-white/60 hover:text-pink-400 hover:scale-125 transition duration-300 text-3xl cursor-pointer" />
          <FaLinkedin className="text-white/60 hover:text-blue-500 hover:scale-125 transition duration-300 text-3xl cursor-pointer" />
          <FaGithub className="text-white/60 hover:text-gray-300 hover:scale-125 transition duration-300 text-3xl cursor-pointer" />
        </div>

        {/* BUTTON */}
        <div className="mt-10" data-aos="fade-up">
          <a
            href="#services"
            className="px-8 py-3 bg-gradient-to-r from-blue-500/60 to-purple-500/60 border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 hover:scale-110 transition shadow-xl backdrop-blur-md"
          >
            Explore Services
          </a>
        </div>

      </div>
    </section>
  );
}
