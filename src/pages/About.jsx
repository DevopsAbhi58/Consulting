import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

function Counter({ value }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value);

    const timer = setInterval(() => {
      start += Math.ceil(end / 40);

      if (start >= end) {
        start = end;
        clearInterval(timer);
      }

      setCount(start);
    }, 40);

    return () => clearInterval(timer);
  }, [value]);

  return <h2>{count}+</h2>;
}

function About() {
  const navigate = useNavigate();

  const values = [
    {
      icon: "🧠",
      title: "Integrity",
      desc: "Transparent recruitment powered by trust, ethics, and professional excellence.",
    },
    {
      icon: "⚡",
      title: "Innovation",
      desc: "AI-driven hiring strategies and future-ready workforce solutions.",
    },
    {
      icon: "🌎",
      title: "Partnership",
      desc: "Building powerful relationships between organizations and talent.",
    },
    {
      icon: "🚀",
      title: "Excellence",
      desc: "Delivering high-impact recruitment experiences that create growth.",
    },
  ];

  return (
    <main className="about-page">
      <ScrollToTop />

      {/* HERO */}
      <section className="future-hero">
        <div className="orb orb1"></div>
        <div className="orb orb2"></div>

        <div className="hero-content">
          <span className="badge">Future Workforce Solutions</span>

          <h1>
            Building Teams That
            <span> Shape Tomorrow</span>
          </h1>

          <p>
            Probenza Consultancy connects exceptional people with ambitious
            organizations through intelligent recruitment, technology, and human
            expertise.
          </p>

          <div className="hero-buttons">
            <button onClick={() => navigate("/services")}>
              Explore Services
            </button>

            <button className="outline" onClick={() => navigate("/contact")}>
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="section">
        <div className="glass story">
          <div>
            <h2>Who We Are</h2>

            <p>
              Probenza Consultancy is a next-generation recruitment and
              workforce company helping businesses discover exceptional talent.
            </p>

            <p>
              From healthcare staffing to IT recruitment and executive search,
              we create solutions designed for the evolving world of work.
            </p>

            <p>
              Our mission is simple — connect talent, technology, and
              opportunity.
            </p>
          </div>

          <div className="visual-box">
            <div className="pulse"></div>

            <h3>Trusted Partner</h3>

            <p>Transforming businesses through people.</p>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="section grid-two">
        <div className="glass hover-card">
          <h2>🎯 Mission</h2>

          <p>
            Bridge organizations and professionals through efficient, reliable,
            and innovative recruitment.
          </p>
        </div>

        <div className="glass hover-card">
          <h2>🚀 Vision</h2>

          <p>
            Become India's most trusted workforce consulting partner with global
            standards.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="section">
        <h1 className="center impact-title pulse-text">
          Our <span>Impact</span>
        </h1>

        <div className="stats">
          <div className="glass stat-card">
            <Counter value="500" />
            <p>Placements</p>
          </div>

          <div className="glass stat-card">
            <Counter value="5+" />
            <p>Clients</p>
          </div>

          <div className="glass stat-card">
            <Counter value="5" />
            <p>Industries</p>
          </div>

          <div className="glass stat-card">
            <h2>95%</h2>
            <p>Satisfaction</p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section">
        <h1 className="center">Core Values</h1>

        <div className="values">
          {values.map((item, index) => (
            <div className="glass value-card" key={index}>
              <div className="icon">{item.icon}</div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="cta futuristic">
          <h1>Ready To Build The Future?</h1>

          <p>
            Partner with Probenza Consultancy and discover smarter workforce
            solutions.
          </p>

          <button onClick={() => navigate("/contact")}>Start Now →</button>
        </div>
      </section>
    </main>
  );
}

export default About;
