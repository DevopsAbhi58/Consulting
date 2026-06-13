import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

function Jobs() {
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [locationFilter, setLocationFilter] = useState("All");

  const jobs = [
    {
      title: "Data Analyst",
      location: "Bilaspur",
      salary: "₹3 - 5 LPA",
      type: "Full Time",
      company: "Leading IT Company",
    },
    {
      title: "HR Executive",
      location: "Raipur",
      salary: "₹2.5 - 4 LPA",
      type: "Full Time",
      company: "Corporate Group",
    },
    {
      title: "Staff Nurse",
      location: "Jashpur",
      salary: "₹2 - 3 LPA",
      type: "Full Time",
      company: "Multi-Speciality Hospital",
    },
    {
      title: "Software Developer",
      location: "Bangalore",
      salary: "₹5 - 8 LPA",
      type: "Remote",
      company: "Tech Startup",
    },
    {
      title: "Hospital Administrator",
      location: "Bilaspur",
      salary: "₹4 - 6 LPA",
      type: "Full Time",
      company: "Healthcare Network",
    },
    {
      title: "Marketing Executive",
      location: "Raipur",
      salary: "₹3 - 5 LPA",
      type: "Hybrid",
      company: "Marketing Agency",
    },
  ];

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const q = query.toLowerCase();

      const matchesSearch =
        job.title.toLowerCase().includes(q) ||
        job.company.toLowerCase().includes(q) ||
        job.location.toLowerCase().includes(q) ||
        job.type.toLowerCase().includes(q);

      const matchesType = typeFilter === "All" || job.type === typeFilter;

      const matchesLocation =
        locationFilter === "All" || job.location === locationFilter;

      return matchesSearch && matchesType && matchesLocation;
    });
  }, [query, typeFilter, locationFilter]);

  const handleApply = (job) => {
    navigate("/contact", {
      state: {
        jobTitle: job.title,
        company: job.company,
        location: job.location,
      },
    });
  };

  const resetFilters = () => {
    setQuery("");
    setTypeFilter("All");
    setLocationFilter("All");
  };

  return (
    <>
      {/* HERO */}
      <section className="jobs-hero">
        <div className="jobs-overlay">
          <span className="hero-badge">🚀 Career Opportunities</span>

          <h1>Find Your Dream Job</h1>

          <p>Explore opportunities across industries with top companies.</p>

          <div className="job-search">
            <input
              type="text"
              placeholder="Search jobs, skills or companies..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />

            <button onClick={resetFilters}>Reset</button>
          </div>
        </div>
      </section>

      {/* FILTERS */}
      <section className="container">
        <div className="filter-bar">
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
          >
            <option>All</option>
            <option>Full Time</option>
            <option>Remote</option>
            <option>Hybrid</option>
          </select>

          <select
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
          >
            <option>All</option>
            <option>Bilaspur</option>
            <option>Raipur</option>
            <option>Bangalore</option>
            <option>Jashpur</option>
          </select>
        </div>
      </section>

      {/* JOBS */}
      <section className="container">
        <h1>Featured Opportunities</h1>

        <div className="grid">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => (
              <div className="job-card" key={index}>
                <span className="job-tag">{job.type}</span>

                <h3>{job.title}</h3>

                <p className="job-company">🏢 {job.company}</p>

                <div className="job-meta">
                  <span>📍 {job.location}</span>

                  <span>💰 {job.salary}</span>
                </div>

                <button className="apply-btn" onClick={() => handleApply(job)}>
                  Apply Now
                </button>
              </div>
            ))
          ) : (
            <p
              style={{
                textAlign: "center",
                color: "#94a3b8",
              }}
            >
              No jobs match your filters.
            </p>
          )}
        </div>
      </section>
    </>
  );
}

export default Jobs;
