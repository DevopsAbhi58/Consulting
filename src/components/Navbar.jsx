import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BriefcaseBusiness, Menu, X, Sparkles } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Home", "/"],
    ["About", "/about"],
    ["Services", "/services"],
    ["Industries", "/industries"],
    ["Jobs", "/jobs"],
    ["Employers", "/employers"],
    ["Candidates", "/candidates"],
    ["Contact", "/contact"],
  ];

  return (
    <header className="nav-container">
      <nav className="navbar">
        {/* BRAND */}
        <Link to="/" className="brand">
          <div className="brand-icon">
            <BriefcaseBusiness size={25} />
          </div>

          <div>
            <h2>
              Probenza <Sparkles size={14} />
            </h2>

            <p>Consultancy Services</p>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <div className="nav-menu">
          {links.map(([name, path]) => (
            <NavLink
              key={name}
              to={path}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {name}
            </NavLink>
          ))}
        </div>

        {/* DESKTOP CTA */}
        

        {/* MOBILE BUTTON */}
        <button className="hamburger" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {/* MOBILE DRAWER */}
      <div className={`mobile-drawer ${open ? "open" : ""}`}>
        {links.map(([name, path]) => (
          <NavLink onClick={() => setOpen(false)} key={name} to={path}>
            {name}
          </NavLink>
        ))}

        <Link
          className="hire-btn mobile"
          to="/contact"
          onClick={() => setOpen(false)}
        >
          Hire Talent →
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
