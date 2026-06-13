function Testimonial({ name, review, role = "Client" }) {
  return (
    <div className="testimonial-card">
      <div className="quote-icon">❝</div>

      <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>

      <p className="testimonial-review">{review}</p>

      <div className="testimonial-user">
        <div className="avatar">{name.charAt(0)}</div>

        <div>
          <h4>{name}</h4>
          <span>{role}</span>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
