import React, { useState } from "react";
import ResumeModal from "./ResumeModal";

function Resume() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleUnlock = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleSuccess = () => {
    setIsUnlocked(true);
  };

  return (
    <section id="resume">
      <h2>Resume</h2>
      <p>You can view or download my resume below.</p>

      {!isUnlocked ? (
        <button className="button" onClick={handleUnlock}>
          🔐 Unlock Resume
        </button>
      ) : (
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
      )}

      <ResumeModal
        show={showModal}
        onClose={handleModalClose}
        onSuccess={handleSuccess}
      />
    </section>
  );
}

export default Resume;
