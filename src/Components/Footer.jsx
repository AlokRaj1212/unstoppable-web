import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 py-6 text-center text-gray-400">
      <div className="flex justify-center space-x-6 mb-4">
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram className="text-2xl hover:text-pink-500 transition" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FaFacebookF className="text-2xl hover:text-blue-500 transition" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <FaLinkedinIn className="text-2xl hover:text-sky-500 transition" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer">
          <FaYoutube className="text-2xl hover:text-red-500 transition" />
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer">
          <FaGithub className="text-2xl hover:text-gray-300 transition" />
        </a>
      </div>
      <p>© {new Date().getFullYear()} Unstopable. All rights reserved. created by shan</p>
    </footer>
  );
}
