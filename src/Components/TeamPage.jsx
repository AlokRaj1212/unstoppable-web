import React, { useState } from "react";
import teamData from "../data/teamData";

export default function TeamPage() {

  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-300 to-purple-500 text-transparent bg-clip-text">
            Meet Our Team
          </h2>
          <p className="text-slate-400 mt-2">
            5 Experts Building Unstoppable Digital Experiences
          </p>
        </div>

        {/* TEAM GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

          {teamData.map((member, index) => (
            <div
              key={index}
              className="bg-slate-800/40 p-6 rounded-2xl shadow-lg border border-white/10
              hover:scale-105 transition cursor-pointer"
            >

              {/* Minimal White Avatar */}
              <div className="w-20 h-20 mx-auto rounded-full bg-white/10 border border-white/20 
              flex items-center justify-center text-3xl font-bold text-cyan-300">
                {member.name.charAt(0)}
              </div>

              <h3 className="mt-4 text-xl font-semibold text-cyan-200 text-center">
                {member.name}
              </h3>

              <p className="text-slate-400 text-sm text-center">{member.role}</p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
