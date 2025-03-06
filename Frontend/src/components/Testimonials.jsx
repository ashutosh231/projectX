import { FaUserCircle } from "react-icons/fa";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Shambhu",
      role: "Full Stack Developer",
      feedback:
        "This platform made my trip planning so easy! Everything was smooth and hassle-free.",
    },
    {
      name: "Rahul Verma",
      role: "Software Engineer",
      feedback:
        "Absolutely love the services. The customer support was fantastic!",
    },
    {
      name: "Ananya Gupta",
      role: "Freelance Designer",
      feedback:
        "Had the best experience booking my trip through this platform. Highly recommended!",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-white glow-text">Happy Customers</h2>
        <p className="text-gray-300 mt-2 text-lg">See what our users have to say about us.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 px-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="relative max-w-sm bg-gray-900 bg-opacity-40 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-gray-700 transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:border-purple-500 hover:glow-card"
          >
            <p className="text-gray-300 italic mb-4">"{testimonial.feedback}"</p>
            <div className="flex items-center gap-4">
              <FaUserCircle className="w-14 h-14 text-purple-400" />
              <div>
                <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                <span className="text-purple-400 text-sm">{testimonial.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .glow-text {
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        }
        .glow-card:hover {
          box-shadow: 0px 0px 15px rgba(168, 85, 247, 0.7);
        }
      `}</style>
    </section>
  );
}