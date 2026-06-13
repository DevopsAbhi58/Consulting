import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

function Candidates() {
  const navigate = useNavigate();
  const formRef = useRef();

  const [isOpen, setIsOpen] = useState(false);
  const [resume, setResume] = useState(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    message: "",
  });

  const services = [
    {
      title: "Resume Submission",
      description: "Submit your resume and get matched with opportunities.",
    },
    {
      title: "Career Guidance",
      description: "Professional advice for your career growth.",
    },
    {
      title: "Interview Preparation",
      description: "Get expert interview preparation support.",
    },
    {
      title: "Job Alerts",
      description: "Stay updated with latest job openings.",
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

  const handleResumeChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(file.type)) {
      alert("Only PDF, DOC and DOCX files are allowed.");
      e.target.value = "";
      return;
    }

    setResume(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!resume) {
      alert("Please upload your resume.");
      return;
    }

    try {
      await emailjs.sendForm(
        "service_occcgtn",
        "template_ddtv4id",
        formRef.current,
        "vgPAv5r8zzXACHe6S",
      );

      alert("Resume submitted successfully 🚀");

      setForm({
        name: "",
        email: "",
        phone: "",
        experience: "",
        message: "",
      });

      setResume(null);
      setIsOpen(false);

      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      console.error(error);
      alert("Submission failed ❌");
    }
  };

  return (
    <>
      {/* HERO */}
      <section className="candidate-hero-ai">
        <div className="ai-glow"></div>
        <div className="ai-grid-overlay"></div>

        <div className="container">
          <div className="ai-badge">⚡ CAREER ENGINE ACTIVE</div>

          <h1 className="ai-title">
            Build Your <span>Career Intelligence</span>
          </h1>

          <p className="ai-subtext">
            Our Team continuously analyzes opportunities and matches you with
            the right career path in real time.
          </p>

          <div className="hero-buttons-ai">
            <button
              className="btn-primary ai-glow-btn"
              onClick={() => setIsOpen(true)}
            >
              <span className="btn-icon">📄</span>
              Upload Resume
            </button>

            <button
              className="btn-ghost ai-outline-btn"
              onClick={() => navigate("/jobs")}
            >
              <span className="btn-icon">🔍</span>
              Browse Opportunities
            </button>
          </div>

          <div className="ai-live-status">
            <div className="dot"></div>

            <span>
              Scanning opportunities • Matching skills • Updating jobs
            </span>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container">
        <h1>Career Support Services</h1>

        <div className="grid">
          {services.map((service, index) => (
            <div className="card candidate-card" key={index}>
              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <button onClick={() => openServiceModal(service.title)}>
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container">
        <div className="card candidate-cta">
          <h1>Ready For Your Next Opportunity?</h1>

          <p>Upload your resume and get hired faster.</p>

          <button onClick={() => setIsOpen(true)}>Upload Resume</button>
        </div>
      </section>

      {/* MODAL */}
      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Submit Your Resume</h2>

            <form ref={formRef} onSubmit={handleSubmit} className="resume-form">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
              />

              <input
                type="text"
                name="experience"
                placeholder="Experience (Years)"
                value={form.experience}
                onChange={handleChange}
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Your Skills / Message"
                value={form.message}
                onChange={handleChange}
                required
              />

              {/* 🔥 FILE UPLOAD UI */}
              <div className="file-upload-box">
                <label className="file-label">
                  📎 Upload Resume (PDF / DOC / DOCX)
                </label>

                <input
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleResumeChange}
                  className="file-input"
                  required
                />

                {/* Preview */}
                {form.resume && (
                  <div className="file-preview">
                    Selected: <span>{form.resume.name}</span>
                  </div>
                )}
              </div>

              <button type="submit" className="submit-btn">
                Submit Resume →
              </button>
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

export default Candidates;
