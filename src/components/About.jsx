/* eslint-disable no-unused-vars */

import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="about-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h2 className="about-title">About Me</h2>

      <p className="about-text">
        I’m a career-changer and problem-solver who transitioned into tech after
        20 years as a professional nanny. My path into software engineering was
        driven by a desire to build intuitive and meaningful tools that improve
        people’s lives.
      </p>

      <p className="about-text">
        After completing a full-stack coding bootcamp, I began building projects
        that reflect real-world needs: a nanny-family matchmaking app, a blog
        platform for caregivers, and more. These experiences strengthened my
        skills in React, Python, Flask, databases, and modern UI design.
      </p>

      <p className="about-text">
        I’m passionate about creating applications that are clear, thoughtful,
        and inclusive — especially in spaces where empathy and usability matter
        most.
      </p>
    </motion.section>
  );
}
2