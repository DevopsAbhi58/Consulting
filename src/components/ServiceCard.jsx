function ServiceCard({ title, description, onClick }) {
  return (
    <div className="service-card">
      <h3>{title}</h3>

      <p>{description}</p>

      <button className="service-btn" onClick={() => onClick?.(title)}>
        Learn More →
      </button>
    </div>
  );
}

export default ServiceCard;
