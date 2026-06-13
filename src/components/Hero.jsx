import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  const handleJobs = () => {
    navigate("/jobs");
  };

  const handleHire = () => {
    navigate("/contact");
  };

  return (
    <section className="hero">
      <div className="hero-glow glow-left"></div>
      <div className="hero-glow glow-right"></div>

      <div className="hero-content">
        <span className="hero-badge">
          🚀 Trusted Recruitment & Workforce Solutions
        </span>

        <h1>
          Connecting
          <span> Talent</span>
          <br />
          With Opportunity
        </h1>

        <p>
          Empowering businesses with exceptional talent and helping
          professionals discover career opportunities that drive growth,
          innovation, and success.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn" onClick={handleJobs}>
            Explore Opportunities
          </button>

          <button className="secondary-btn" onClick={handleHire}>
            Hire Talent
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
