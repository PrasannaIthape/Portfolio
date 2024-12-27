// src/components/Testimonials.js
import React from "react";
// import '../../public/css/Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Prasanna is a fantastic frontend developer! He brought our ideas to life beautifully, and we couldn't be happier with the outcome.",
      name: "John Doe",
      title: "CEO, Tech Innovators",
    },
    {
      quote:
        "The project was delivered on time and exceeded our expectations. His attention to detail and professionalism is unmatched.",
      name: "Jane Smith",
      title: "Founder, Web Solutions",
    },
    {
      quote:
        "Highly recommend Prasanna for any frontend development work. His creativity and skills are top-notch!",
      name: "Sam Wilson",
      title: "Project Manager, Global Tech",
    },
  ];

  return (
    <section className="testimonials">
      <div className="container px-5 my-5">
        <div className="card shadow border-0 rounded-4 mb-5">
          <div className="card-body p-5">
            <h2 className="text-secondary fw-bolder mb-4">What Clients Say</h2>
            <div className="testimonial-container">
              {testimonials.map((testimonial, index) => (
                <div className="testimonial" key={index}>
                  <p className="quote">"{testimonial.quote}"</p>
                  <p className="client-name">{testimonial.name}</p>
                  <p className="client-title">{testimonial.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
