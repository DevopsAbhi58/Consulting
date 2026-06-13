function JobCard({ title, location, salary, company, type, onApply }) {
  return (
    <div className="job-card">
      <div className="job-card-header">
        <span className="job-badge">🔥 Urgent Hiring</span>

        <h3>{title}</h3>

        {company && <p className="job-company">🏢 {company}</p>}
      </div>

      <div className="job-details">
        <div className="job-detail">
          <span>📍</span>
          <p>{location}</p>
        </div>

        <div className="job-detail">
          <span>💰</span>
          <p>{salary}</p>
        </div>

        {type && (
          <div className="job-detail">
            <span>💼</span>
            <p>{type}</p>
          </div>
        )}
      </div>

      <div className="job-actions">
        <button className="apply-btn" onClick={() => onApply?.(title)}>
          Apply Now →
        </button>
      </div>
    </div>
  );
}

export default JobCard;
