import React from "react";

function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Thanks for your message! (Form not yet wired up)");
        }}
        className="contact-form"
      >
        <div className="form-row">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
        </div>
        <textarea placeholder="Your Message" rows="5" required />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
