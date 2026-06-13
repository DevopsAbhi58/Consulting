import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const resetForm = () => {
    setForm({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return; // prevent double click spam

    setLoading(true);
    setSuccess(false);
    setError(false);

    try {
      await emailjs.send(
        "service_occcgtn",
        "template_ddtv4id",
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        },
        "vgPAv5r8zzXACHe6S",
      );

      setSuccess(true);
      resetForm();

      setTimeout(() => setSuccess(false), 4000);
    } catch (err) {
      console.log(err);
      setError(true);

      setTimeout(() => setError(false), 4000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-ai-pro">
      {/* BACKGROUND SYSTEM */}
      <div className="ai-layer glow-a"></div>
      <div className="ai-layer glow-b"></div>

      <div className="contact-wrapper">
        {/* LEFT PANEL */}
        <div className="contact-left">
          <div className="system-badge">
            <span className="dot"></span>
            RESPONSE SYSTEM ACTIVE
          </div>

          <h1>
            Connect With Our <span> Hiring Team</span>
          </h1>

          <p className="subtitle">
            Messages are routed through intelligent recruitment engine for
            instant processing.
          </p>

          <div className="info-stack">
            <div className="info-item">
              <span>📧</span>
              <div>
                <h4>Email Routing</h4>
                <p>consultingfirm54@gmail.com</p>
              </div>
            </div>

            <div className="info-item">
              <span>📞</span>
              <div>
                <h4>Instant Support</h4>
                <p>+91 9131973508</p>
              </div>
            </div>

            <div className="info-item">
              <span>📍</span>
              <div>
                <h4>Location</h4>
                <p>Mahamaya Chowk,</p>
                <p>Ambikapur, Chhattisgarh, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="contact-right">
          <form className="ai-form" onSubmit={handleSubmit}>
            <div className="form-title"> Connect With Us</div>

            <input
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
            />

            <input
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Describe your requirement..."
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
            />

            <button
              type="submit"
              disabled={loading}
              className={`ai-submit ${loading ? "loading" : ""}`}
            >
              {loading ? "Processing AI Request..." : "Send Message →"}
            </button>

            {/* SUCCESS */}
            {success && (
              <div className="success-banner">
                ✓ Message successfully delivered via AI routing system
              </div>
            )}

            {/* ERROR */}
            {error && (
              <div className="error-banner">
                ✗ Failed to send. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
