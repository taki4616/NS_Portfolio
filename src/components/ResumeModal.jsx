import React, { useState } from 'react';

function ResumeModal({ show, onClose, onSuccess }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === 'nanny2t3ch') {
      setError('');
      onSuccess(); // allow access
      onClose();   // close modal
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Enter Password</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="error-msg">{error}</p>}
          <div className="modal-buttons">
            <button type="submit">Unlock</button>
            <button type="button" onClick={onClose} className="cancel-btn">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ResumeModal;
