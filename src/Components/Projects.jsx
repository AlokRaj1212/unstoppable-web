import React from "react";

export default function Projects() {
  return (
    <section id="projects" className="py-20 text-white text-center relative z-10">
      <h2
        className="text-4xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
        data-aos="fade-up"
      >
        Our Featured Projects
      </h2>

      {/* 🌐 Web Development */}
      <div className="px-6 md:px-16 mb-20" data-aos="fade-up">
        <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Web Development</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "E-Commerce Website",
              desc: "Complete shopping platform with cart, payment, and admin dashboard built using React & Node.js.",
              img: "https://source.unsplash.com/600x400/?ecommerce,website",
            },
            {
              title: "Portfolio Website",
              desc: "Elegant and animated portfolio for a fashion model built with HTML, CSS & JS.",
              img: "https://source.unsplash.com/600x400/?portfolio,webdesign",
            },
            {
              title: "Company Profile Website",
              desc: "Corporate profile with smooth animations and responsive design.",
              img: "https://source.unsplash.com/600x400/?corporate,website",
            },
          ].map((p, i) => (
            <div
              key={i}
              className="relative group bg-white/10 backdrop-blur-xl border border-transparent rounded-2xl overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:-rotate-1 hover:shadow-cyan-500/40 before:absolute before:inset-0 before:rounded-2xl before:p-[2px] before:bg-gradient-to-r before:from-cyan-400 before:to-purple-600 before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-300"
            >
              <div className="relative z-10 bg-slate-900/70 rounded-2xl p-4">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-52 object-cover rounded-xl mb-4"
                />
                <h4 className="text-xl font-semibold mb-2">{p.title}</h4>
                <p className="text-slate-300 text-sm">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🎥 Reels Section */}
      <div className="px-6 md:px-16 mb-20" data-aos="fade-up">
        <h3 className="text-2xl font-semibold mb-6 text-pink-400">
          Instagram & Facebook Reels
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            "https://www.instagram.com/reel/CxjBvH0O9mU/embed",
            "https://www.instagram.com/reel/Cu9v9jvMhUE/embed",
            "https://www.instagram.com/reel/CqVt7cmt7GU/embed",
          ].map((url, i) => (
            <div
              key={i}
              className="relative bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg border border-pink-400/20 hover:shadow-pink-500/40 transition transform hover:scale-105"
            >
              <iframe
                src={url}
                width="100%"
                height="480"
                frameBorder="0"
                scrolling="no"
                allowTransparency="true"
                allow="encrypted-media"
                title={`reel-${i}`}
              ></iframe>
            </div>
          ))}
        </div>
      </div>

      {/* 📺 Ads & Campaigns */}
      <div className="px-6 md:px-16" data-aos="fade-up">
        <h3 className="text-2xl font-semibold mb-6 text-yellow-400">
          YouTube & Meta Ads Campaigns
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-yellow-400/20 hover:shadow-yellow-400/40 transition transform hover:scale-105">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-left shadow-lg">
            <h4 className="text-2xl font-semibold mb-3 text-yellow-300">
              Meta Ads Campaign
            </h4>
            <p className="text-slate-300 mb-3">
              We design and optimize ad campaigns across Meta platforms including
              Facebook, Instagram, and Audience Network.
            </p>
            <p className="text-slate-400 text-sm">
              Boost engagement, drive traffic, and convert leads with data-driven ad
              strategies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
