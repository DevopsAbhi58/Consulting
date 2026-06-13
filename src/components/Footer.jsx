import { Link, useNavigate } from "react-router-dom";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  const navigate = useNavigate();

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Industries", path: "/industries" },
    { name: "Jobs", path: "/jobs" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="future-footer">
      <div className="footer-glow glow-one"></div>
      <div className="footer-glow glow-two"></div>

      <div className="footer-wrapper">
        {/* Brand */}
        <div className="footer-brand futuristic-card">
          <div className="logo-circle">P</div>

          <h2>
            Probenza <span>Consultancy</span>
          </h2>

          <p>
            Connecting exceptional talent with future-ready organizations
            through intelligent workforce solutions.
          </p>

          <div className="socials">
            <a
              href="https://www.linkedin.com/company/128014174"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaXTwitter />
            </a>

            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="footer-column">
          <h3>Navigation</h3>

          {links.map((item) => (
            <Link key={item.path} to={item.path}>
              {item.name}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h3>Connect</h3>

          <a href="mailto:consultingfirm54@gmail.com">
            📧 consultingfirm54@gmail.com
          </a>

          <a href="tel:+919131973508">📞 +91 91319 73508</a>

          <p>📍 Ambikapur, Chhattisgarh, India</p>
        </div>

        {/* CTA */}
        <div className="footer-column hiring">
          <h3>Build Your Team</h3>

          <p>Need exceptional talent? Start your hiring journey today.</p>

          <button onClick={() => navigate("/contact")}>Get Started →</button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Probenza Consulting. All Rights
          Reserved.
        </p>

        <p>Designed for the Future Workforce 🚀</p>
      </div>
    </footer>
  );
}

export default Footer;
