import React, { useState } from "react";

function Resume() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleDownload = async () => {
    try {
      const response = await fetch("https://backend-resume-u0x1.onrender.com/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      if (response.status === 401) {
        setError("Incorrect password");
        return;
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "Nataki-Skinner-Resume.pdf");
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
      setError("");
      setPassword("");
    } catch {
      setError("Server error. Please try again later.");
    }
  };

  return (
    <section id="resume">
      <h2>Resume</h2>
      <p>Enter the password to securely download my resume.</p>
      <input
        type="password"
        placeholder="nannypass123"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleDownload}>Download Resume</button>
      {error && <p style={{ color: "crimson" }}>{error}</p>}
    </section>
  );
}

export default Resume;
