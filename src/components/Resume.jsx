import React from "react";

function Resume() {
  return (
    <section id="resume">
      <h2>Resume</h2>
      <p>You can view or download my resume below.</p>
      <div className="resume-buttons">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          View Resume
        </a>
        <a
          href="/resume.pdf"
          download
          className="button outline"
        >
          Download PDF
        </a>
      </div>
    </section>
  );
}

export default Resume;
