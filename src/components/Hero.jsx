// Hero.jsx
/* eslint-disable no-unused-vars */

import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";

// default filenames you requested
import mainPhoto from "../assets/hero-main.jpeg";
import badge1 from "../assets/hero-badge1.jpeg";
import badge2 from "../assets/hero-badge2.jpg";

export default function Hero({ onToggleTheme }) {
  return (
    <section className="hero-wrapper">

      {/* Theme Toggle */}
      <button className="theme-toggle-btn" onClick={onToggleTheme}>
        Toggle Theme
      </button>

      <div className="hero-grid">

        {/* LEFT — Text Content */}
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="hero-name">
            Nataki Skinner
          </h1>

          <div className="gold-underline"></div>

          <p className="hero-title">
            Software Engineer · Frontend + Python
          </p>

          <p className="hero-tagline">
            I build clean, modern, user-friendly engineering experiences.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="hero-btn primary-btn">
              View Projects
            </a>
            <a
              href="https://github.com/taki4616"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn secondary-btn"
            >
              GitHub
            </a>
          </div>
        </motion.div>

        {/* RIGHT — Main Photo */}
        <motion.div
          className="hero-photo-wrapper"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <img src={mainPhoto} alt="Nataki working" className="hero-main-photo" />
        </motion.div>

        {/* FLOATING BADGES */}
        <motion.img
          src={badge1}
          alt="Nataki portrait 1"
          className="badge badge-one"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
        />

        <motion.img
          src={badge2}
          alt="Nataki portrait 2"
          className="badge badge-two"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
        />

      </div>
    </section>
  );
}
