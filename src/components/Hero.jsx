import React from "react";

function Hero({ onToggleTheme }) {
  return (
    <section className="hero">
      <h1>Hi, I’m Nataki 👩🏽‍💻</h1>
      <p>Backend-leaning Software Engineer with a passion for Python and building tools that matter.</p>
      <p>Former professional nanny turned developer — bringing 20 years of people-first experience into tech.</p>
      <button className="theme-toggle" onClick={onToggleTheme}>
        Toggle 🌙 Dark Mode
      </button>
    </section>
  );
}

export default Hero;
