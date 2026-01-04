import React from "react";

export default function Contact() {
  return (
    <section
  id="contact"
  className="py-20 text-center"
  data-aos="fade-up"
>
  <h2
    className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 animate-gradient"
    data-aos="fade-down"
  >
    Get in Touch
  </h2>
  <form
    data-aos="zoom-in"
    className="max-w-md mx-auto bg-white/10 p-6 rounded-2xl backdrop-blur-md"
  >
    <input type="text" placeholder="Your Name" className="w-full p-3 mb-4 bg-transparent border border-gray-500 rounded-lg" />
    <input type="email" placeholder="Your Email" className="w-full p-3 mb-4 bg-transparent border border-gray-500 rounded-lg" />
    <textarea placeholder="Message" rows="4" className="w-full p-3 mb-4 bg-transparent border border-gray-500 rounded-lg"></textarea>
    <button className="px-6 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 text-slate-900 font-semibold hover:scale-105 transition">
      Send Message
    </button>
  </form>
</section>

  );
}
