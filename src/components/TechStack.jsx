import React from 'react';

function TechStack() {
  const techList = [
    "JavaScript",
    "React",
    "Python",
    "Flask",
    "PostgreSQL",
    "HTML",
    "CSS",
    "Git & GitHub",
    "Docker",
    "Vite",
    "REST APIs"
  ];

  return (
    <section id="tech">
      <h2>Tech Stack</h2>
      <p>Here are some of the tools and technologies I’ve been using to build my projects:</p>
      <ul className="tech-list">
        {techList.map((tech, index) => (
          <li key={index}>{tech}</li>
      ))}
      </ul>

    </section>
  );
}

export default TechStack;
