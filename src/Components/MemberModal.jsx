// src/Components/MemberModal.jsx
import React from "react";

export default function MemberModal({ open, onClose, member }) {
  if (!open || !member) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-slate-900 p-6 rounded-2xl w-full max-w-md shadow-xl relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white text-xl"
        >
          ✖
        </button>

        {/* Image */}
        <img
          src={member.img}
          alt={member.name}
          className="w-28 h-28 mx-auto rounded-full border-2 border-cyan-400 object-cover"
        />

        {/* Name */}
        <h2 className="text-center text-2xl font-bold mt-4">
          {member.name}
        </h2>

        {/* Role */}
        <p className="text-center text-cyan-300">{member.role}</p>

        {/* Bio */}
        <p className="text-slate-300 text-center mt-3">{member.bio}</p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 justify-center mt-4">
          {member.skills.map((s) => (
            <span
              key={s}
              className="text-xs bg-white/10 px-2 py-1 rounded-full"
            >
              {s}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex justify-center gap-4 mt-6">
          <a href={member.links.insta} className="text-pink-400">Insta</a>
          <a href={member.links.linkedin} className="text-cyan-300">LinkedIn</a>
          <a href={member.links.github} className="text-gray-300">GitHub</a>
        </div>
      </div>
    </div>
  );
}
