import React from "react";

export default function Reels() {
  const reels = [
    { id: 1, src: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "YouTube Reel" },
    { id: 2, src: "https://www.youtube.com/embed/jfKfPfyJRdk", title: "YouTube Reel 2" },
    { id: 3, src: "https://www.instagram.com/reel/Cxyz12345/embed", title: "Instagram Reel" },
    { id: 4, src: "https://www.youtube.com/embed/ysz5S6PUM-U", title: "YouTube Reel 3" },
    { id: 5, src: "https://www.youtube.com/embed/9bZkp7q19f0", title: "YouTube Reel 4" },
  ];

  return (
    <section id="reels" className="py-20 bg-slate-950/60 text-center">
      <h2
        className="text-4xl font-bold mb-10 text-cyan-400"
        data-aos="fade-up"
      >
        Social Media Highlights
      </h2>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex space-x-6 px-10 w-max">
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="flex-shrink-0 w-[320px] h-[400px] bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
              data-aos="zoom-in"
            >
              <iframe
                src={reel.src}
                title={reel.title}
                className="w-full h-full"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
