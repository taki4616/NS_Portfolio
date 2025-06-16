import React from "react";

function Footer() {
  return (
    <footer>
      <p>© {new Date().getFullYear()} Nataki Skinner. Built with React.</p>
      <p>
        Connect with me on{" "}
        <a
          href="https://www.linkedin.com/in/your-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>{" "}
        or check out my{" "}
        <a
          href="https://github.com/taki4616"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        .
      </p>
    </footer>
  );
}

export default Footer;
