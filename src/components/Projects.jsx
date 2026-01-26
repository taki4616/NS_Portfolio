// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import React from "react";

const projects = [
  {
    title: "NannyMatch Lite",
    description:
      "A matchmaking platform for families and nannies to connect. Built with React and localStorage to simulate real-world interactions, including profile creation, filters, and applications.",
    tech: ["React", "CSS", "localStorage"],
    link: "https://nannymatch-lite.netlify.app",
    repo: "https://github.com/taki4616/nannymatch-lite",
  },
  {
    title: "NannyVent",
    description:
      "A blog-style platform for nannies and parents to share workplace stories and parenting insights. Built with Flask and PostgreSQL.",
    tech: ["Flask", "PostgreSQL", "HTML/CSS"],
    link: "https://nannyvent-demo.netlify.app",
    repo: "https://github.com/taki4616/nannyvent",
  },
  {
    title: "Portfolio Site",
    description:
      "The very site you're viewing! A sleek single-page application built with React, featuring smooth scrolling, responsive design, and a theme toggle.",
    tech: ["React", "CSS", "Vite"],
    link: "#",
    repo: "https://github.com/taki4616/portfolio-site",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <ul className="project-tech">
              {project.tech.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <div className="project-links">
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  Live Demo →
                </a>
              )}
              {project.repo && (
                <a href={project.repo} target="_blank" rel="noopener noreferrer">
                  GitHub →
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
