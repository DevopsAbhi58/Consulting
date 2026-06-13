import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const openContact = () => {
    const el = document.getElementById("contact");

    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/contact");
    }
  };

  const openJobs = () => {
    navigate("/jobs");
  };

  const stats = [
    ["🎯", "500+", "Professionals Placed"],
    ["🤝", "5+", "Corporate Partners"],
    ["🌎", "5+", "Industries Served"],
    ["⭐", "95%", "Client Satisfaction"],
  ];

  const services = [
    [
      "Healthcare Recruitment",
      "Doctors, Nurses, Pharmacists and healthcare experts.",
    ],
    ["IT Staffing", "Engineers, developers and technology professionals."],
    ["Executive Search", "Leadership hiring for business growth."],
    ["HR Consulting", "Workforce planning and HR solutions."],
    ["Contract Staffing", "Flexible talent solutions for projects."],
    ["Bulk Hiring", "Large scale recruitment support."],
  ];

  return (
    <main className="home-page">
      <Hero />

      {/* STATS */}
      <section className="section">
        <div className="stats">
          {stats.map((item, index) => (
            <div className="glass stat-card" key={index}>
              <div className="icon">{item[0]}</div>

              <h2>{item[1]}</h2>

              <p>{item[2]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="section-heading">
          <span>OUR EXPERTISE</span>

          <h1>Smart Workforce Solutions</h1>

          <p>
            Technology powered recruitment solutions helping businesses grow
            faster.
          </p>
        </div>

        <div className="service-grid">
          {services.map((item, index) => (
            <div className="glass service-box" key={index}>
              <ServiceCard
                title={item[0]}
                description={item[1]}
                onClick={(service) =>
                  navigate("/services", {
                    state: { service },
                  })
                }
              />
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="section">
        <h1 className="center">Why Choose Probenza?</h1>

        <div className="why-grid">
          <div className="glass why-card">
            <h3>🤖 AI Recruitment</h3>

            <p>Intelligent screening systems for faster hiring.</p>
          </div>

          <div className="glass why-card">
            <h3>⚡ Faster Hiring</h3>

            <p>Optimized recruitment process reducing hiring time.</p>
          </div>

          <div className="glass why-card">
            <h3>🌐 Industry Experts</h3>

            <p>Specialized recruiters across business domains.</p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section process-ai">
        <h1 className="center process-title">Recruitment Journey</h1>

        <div className="timeline-ai">
          {[
            "Requirement Analysis",
            "Talent Discovery",
            "Candidate Screening",
            "Successful Placement",
          ].map((step, index) => (
            <div
              className="timeline-ai-card"
              key={index}
              style={{
                animationDelay: `${index * 0.15}s`,
              }}
            >
              <div className="step-badge">0{index + 1}</div>

              <h3>{step}</h3>

              <p>
                AI-driven matching system connecting talent with opportunity.
              </p>

              <div className="pulse-dot"></div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="cta futuristic">
          <div className="cta-glow"></div>

          <h1>Build Your Future Workforce</h1>

          <p>
            Partner with Probenza Consultancy and discover exceptional talent.
          </p>

          <div className="cta-buttons">
            <button onClick={openContact}>Start Hiring →</button>

            <button onClick={openJobs} className="secondary">
              Explore Jobs
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
