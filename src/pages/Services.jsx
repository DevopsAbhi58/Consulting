import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Services() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const services = [
    {
      icon: "👨‍💼",
      title: "Permanent Staffing",
      description:
        "Hire top-tier professionals for long-term organizational growth.",
    },
    {
      icon: "📋",
      title: "Contract Staffing",
      description:
        "Flexible workforce solutions for project-based requirements.",
    },
    {
      icon: "🏥",
      title: "Healthcare Recruitment",
      description: "Doctors, nurses, technicians, and healthcare specialists.",
    },
    {
      icon: "💻",
      title: "IT Recruitment",
      description: "Engineers, developers, analysts, and tech leaders.",
    },
    {
      icon: "💰",
      title: "Payroll Management",
      description: "End-to-end payroll, compliance, and HR operations support.",
    },
    {
      icon: "📊",
      title: "HR Consulting",
      description:
        "Strategic HR planning, policy design, and workforce optimization.",
    },
  ];

  const steps = [
    "Requirement Analysis",
    "Talent Sourcing",
    "Screening & Assessment",
    "Successful Placement",
  ];

  return (
    <main className="services-page">
      {/* HERO */}
      <section className="services-hero">
        <div className="hero-glow"></div>

        <div className="hero-content">
          <span className="chip chip-active">
            <span className="chip-dot"></span>
            Probenza Consulting
          </span>

          <h1>
            Smart Recruitment
            <span> Services</span>
          </h1>

          <p className="flow-text-ai">
            We deliver intelligent hiring solutions that connect companies with
            exceptional talent.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="section intro-section">
        <div className="intro-glow"></div>

        <div className="section-heading futuristic-heading">
          <span className="tag">WHAT WE OFFER</span>

          <h1 className="futuristic-heading">
            End-to-End
            <span> Recruitment Solutions</span>
          </h1>
        </div>

        <div className="service-grid">
          {services.map((service, index) => (
            <div className="glass service-card" key={index}>
              <div className="service-icon">{service.icon}</div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <button
                className="ghost-btn"
                onClick={() => navigate("/contact")}
              >
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="section process-section">
        <h1 className="center process-title">Our Hiring Process</h1>

        <div className="process-flow">
          {steps.map((step, index) => (
            <div className="process-node" key={index}>
              {index !== steps.length - 1 && <div className="process-line" />}

              <div className="glass process-card">
                <div className="process-number">0{index + 1}</div>

                <h3>{step}</h3>

                <p>
                  Structured recruitment ensuring accuracy, speed, and cultural
                  fit.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="cta futuristic">
          <div className="cta-glow"></div>

          <h1>Ready to Build Your Dream Team?</h1>

          <p>
            Partner with Probenza Consultancy and scale your workforce with
            confidence.
          </p>

          <button onClick={() => navigate("/contact")}>Get Started →</button>
        </div>
      </section>
    </main>
  );
}

export default Services;
