import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Industries() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const industries = [
    {
      icon: "🏥",
      title: "Healthcare",
      desc: "Hospitals, clinics, diagnostic centers and medical institutions.",
    },
    {
      icon: "💻",
      title: "IT & Technology",
      desc: "Developers, engineers, analysts and tech leadership roles.",
    },
    {
      icon: "🏭",
      title: "Manufacturing",
      desc: "Engineers, plant heads, production and technical workforce.",
    },
    {
      icon: "🛒",
      title: "Retail",
      desc: "Sales, store operations and customer experience teams.",
    },
    {
      icon: "🎓",
      title: "Education",
      desc: "Academic institutions and training organizations.",
    },
    {
      icon: "🏨",
      title: "Hospitality",
      desc: "Hotels, restaurants and tourism workforce solutions.",
    },
  ];

  const stats = [
    ["500+", "Careers Transformed"],
    ["5+", "Hiring Partners"],
    ["5+", "Specialized Industries"],
    ["95%", "Placement Success Rate"],
  ];
  return (
    <main className="industries-page">
      {/* HERO */}
      <section className="industries-hero">
        <div className="hero-glow"></div>

        <div className="hero-content">
          <span className="badge">Industry Expertise</span>

          <h1>
            Powering Talent Across
            <span> Every Industry</span>
          </h1>

          <p>
            We deliver specialized recruitment solutions tailored to each
            industry's unique workforce needs.
          </p>
        </div>
      </section>



      {/* INDUSTRIES */}
      <section className="section">
          <div className="section-heading">
            <span>INDUSTRIES</span>

            <h1>Where We Create Impact</h1>

          <p>
           Domain-specific recruitment expertise across India.
    </p>
  </div>


        <div className="industry-grid">
          {industries.map((item, index) => (
            <div className="glass industry-card" key={index}>
              <div className="industry-icon">{item.icon}</div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

              <button
                className="ghost-btn"
                onClick={() => navigate("/contact")}
              >
                Explore Industry →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="section">
        <div className="stats">
          {stats.map((item, index) => (
            <div className="glass stat-card" key={index}>
              <h2>{item[0]}</h2>

              <p>{item[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="cta futuristic">
          <div className="cta-glow"></div>

          <h1>Need Industry-Specific Talent?</h1>

          <p>
            Partner with Probenza Consultancy and get domain-ready professionals
            faster.
          </p>

          <button onClick={() => navigate("/contact")}>
            Partner With Us →
          </button>
        </div>
      </section>
    </main>
  );
}

export default Industries;
