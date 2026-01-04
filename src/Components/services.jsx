import React from "react";

const services = [
  {
    title: "Web Development",
    description: "Modern, responsive and high-performance websites built with React, HTML, CSS & JavaScript.",
    icon: "💻",
    aos: "fade-up",
  },
  {
    title: "E-Commerce Solutions",
    description: "Product pages, cart, payment gateway, admin dashboard — complete e-commerce development.",
    icon: "🛒",
    aos: "fade-up",
  },
  {
    title: "Portfolio Designing",
    description: "Premium portfolio websites for creators, influencers, models & agencies.",
    icon: "📸",
    aos: "fade-up",
  },
  {
    title: "Social Media Management",
    description: "Instagram, Facebook page handling — daily posts, content planning, captions & engagement.",
    icon: "📱",
    aos: "fade-up",
  },
  {
    title: "Reels / Video Editing",
    description: "High-quality Instagram reels, promo videos & social media ads for brand growth.",
    icon: "🎬",
    aos: "fade-up",
  },
  {
    title: "Digital Marketing",
    description: "Meta Ads, Google Ads, brand promotions & full social media marketing strategy.",
    icon: "🚀",
    aos: "fade-up",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      {/* Section Heading */}
      <h2 className="text-4xl font-extrabold text-center mb-14 bg-gradient-to-r from-cyan-400 to-blue-500 
      bg-clip-text text-transparent animate-pulse tracking-wide">
        Our Services
      </h2>

      {/* Services Container */}
      <div className="flex flex-wrap justify-center gap-10 px-6">
        {services.map((service, index) => (
          <div
            key={index}
            data-aos={service.aos}
            data-aos-delay={index * 150}
            className="w-80 bg-white/10 border border-white/20 backdrop-blur-xl rounded-2xl p-6 
            text-center shadow-xl transition-all duration-500 transform hover:scale-105 hover:-rotate-2 
            hover:shadow-cyan-500/40 group"
          >
            {/* Icon */}
            <div className="text-6xl mb-4 drop-shadow-xl group-hover:scale-110 transition">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
