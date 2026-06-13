import { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

function Employers() {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const services = [
    {
      title: "Executive Search",
      description: "Identify and recruit senior leadership professionals.",
    },
    {
      title: "Permanent Staffing",
      description: "Hire qualified professionals for long-term growth.",
    },
    {
      title: "Contract Staffing",
      description: "Flexible workforce solutions for projects.",
    },
    {
      title: "Bulk Hiring",
      description: "Efficient large-scale recruitment support.",
    },
  ];

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const openServiceModal = (serviceName) => {
    setForm((prev) => ({
      ...prev,
      message: `Interested in ${serviceName}`,
    }));

    setIsOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);
    setError(false);

    try {
      await emailjs.send(
        "service_occcgtn",
        "template_ddtv4id",
        form,
        "vgPAv5r8zzXACHe6S",
      );

      alert("Consultation request sent successfully 🚀");

      setForm({
        name: "",
        email: "",
        company: "",
        message: "",
      });

      setIsOpen(false);
      setSuccess(true);
    } catch (error) {
      console.error(error);
      alert("Failed to send request ❌");
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* HERO */}
      <section className="employer-hero">
        <div className="container">
          <h1>Recruit Top Talent With Confidence</h1>

          <p>Partner with Probenza Consultancy for smarter hiring.</p>

          <div className="hero-buttons">
            <button onClick={() => setIsOpen(true)}>
              Schedule Consultation
            </button>

            <button onClick={() => navigate("/services")}>Our Services</button>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container employer-solutions-section">
        <div className="section-heading">
          <span className="section-tag">EMPLOYER SOLUTIONS</span>

          <h1 className="solutions-title">
            Workforce Solutions for
            <span> Modern Businesses</span>
          </h1>

          <p>
            Accelerate hiring with intelligent recruitment strategies, executive
            search, and scalable workforce solutions tailored to your business.
          </p>
        </div>

        <div className="employer-grid">
          {services.map((service, index) => (
            <div className="employer-card" key={index}>
              <div className="card-glow"></div>

              <div className="service-number">0{index + 1}</div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <button onClick={() => openServiceModal(service.title)}>
                Get This Service →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container employer-cta-section">
        <div className="employer-cta">
          <div className="cta-glow cta-glow-1"></div>
          <div className="cta-glow cta-glow-2"></div>

          <span className="cta-tag">🚀 HIRING SOLUTIONS</span>

          <h1>
            Looking For The
            <span> Right Talent?</span>
          </h1>

          <p>
            Partner with Probenza Consultancy and gain access to highly skilled,
            pre-screened professionals who can accelerate your business growth.
          </p>

          <div className="cta-buttons">
            <button className="cta-primary-btn" onClick={() => setIsOpen(true)}>
              Schedule Consultation →
            </button>

            <button
              className="cta-secondary-btn"
              onClick={() => navigate("/services")}
            >
              Explore Services
            </button>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Schedule Consultation</h2>

            <form className="ai-form" onSubmit={handleSubmit}>
              <div className="form-title">Connect With Us</div>

              {/* NAME */}
              <div className="input-group">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <label>Full Name</label>
                <span className="input-glow"></span>
              </div>

              {/* EMAIL */}
              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                <label>Email Address</label>
                <span className="input-glow"></span>
              </div>

              {/* COMPANY */}
              <div className="input-group">
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                />
                <label>Company Name (Optional)</label>
                <span className="input-glow"></span>
              </div>

              {/* MESSAGE */}
              <div className="input-group textarea-group">
                <textarea
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
                <label>Your Requirement</label>
                <span className="input-glow"></span>
              </div>

              {/* SUBMIT BUTTON */}
              <button type="submit" className="ai-submit" disabled={loading}>
                {loading ? (
                  <span className="spinner"></span>
                ) : (
                  "Submit Request →"
                )}
              </button>

              {/* STATUS */}
              {success && (
                <div className="success-banner">
                  ✓ Message sent successfully
                </div>
              )}

              {error && (
                <div className="error-banner">✗ Something went wrong</div>
              )}
            </form>

            <button className="close-btn" onClick={() => setIsOpen(false)}>
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Employers;
