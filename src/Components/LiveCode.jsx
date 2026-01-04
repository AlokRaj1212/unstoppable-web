import React, { useState, useEffect } from "react";

export default function LiveCode() {
  const codeLines = [
    "const project = {",
    "  name: 'Unstopable Web',",
    "  services: ['Web Dev', 'Social Media', 'Branding'],",
    "  poweredBy: ['React', 'Node', 'AI'],",
    "};",
    "",
    "function buildExperience() {",
    "  return 'High-quality digital solutions';",
    "}",
    "",
    "console.log(buildExperience());",
  ];

  const [displayedCode, setDisplayedCode] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex < codeLines.length) {
      if (charIndex < codeLines[lineIndex].length) {
        const timeout = setTimeout(() => {
          setDisplayedCode((prev) => prev + codeLines[lineIndex][charIndex]);
          setCharIndex(charIndex + 1);
        }, 25);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setDisplayedCode((prev) => prev + "\n");
          setLineIndex(lineIndex + 1);
          setCharIndex(0);
        }, 200);
        return () => clearTimeout(timeout);
      }
    }
  }, [charIndex, lineIndex]);

  return (
    <div className="w-full max-w-2xl mx-auto mt-10 rounded-xl overflow-hidden shadow-2xl border border-cyan-400/20">

      {/* VS Code Top Bar */}
      <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 border-b border-slate-700">
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        <p className="text-slate-300 text-xs ml-3">LiveCode.jsx</p>
      </div>

      {/* CODE AREA */}
      <div className="bg-black/90 text-green-400 font-mono p-4 text-sm leading-relaxed">
        <pre className="whitespace-pre-wrap">
          {displayedCode}
          <span className="animate-pulse">|</span>
        </pre>
      </div>
    </div>
  );
}
