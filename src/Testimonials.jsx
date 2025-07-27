
// import {ela} from '/ela.jpg'
const Testimonials = () => {
  const testimonials = [
    {
      name: "Elias Befikadu",
      role: "Pdddddddddd",
      content: "Worked with Joseph on a complex React project. His attention to detail and modern development practices impressed our entire team.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Elias Befikadu",
      role: "Product Manager",
      content: "Joseph doesn't just code - he thinks like a product person. He suggested improvements that saved us months of development time.",
      avatar: '/ela.jpg'
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-title">What People Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-content">
                <p>"{testimonial.content}"</p>
              </div>
              <div className="testimonial-author">
                <img src={testimonial.avatar} alt={testimonial.name} className="author-avatar" />
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-role">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials