import React, { useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles.css";

function App() {
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", storedTheme);
  }, []);

  const toggleTheme = () => {
    const current = document.documentElement.getAttribute("data-theme");
    const newTheme = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="app">
      <Hero onToggleTheme={toggleTheme} />
      <About />
      <Projects />
      <TechStack />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
