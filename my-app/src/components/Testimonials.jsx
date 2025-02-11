// import avatar1 from "../assets/avatar1.jpg";
// import avatar2 from "../assets/avatar2.jpg";
// import avatar3 from "../assets/avatar3.jpg";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Priyanka Sharma",
      role: "Full Stack Developer",
      feedback:
        "This platform made my trip planning so easy! Everything was smooth and hassle-free.",
    //   avatar: avatar1,
    },
    {
      name: "Rahul Verma",
      role: "Software Engineer",
      feedback:
        "Absolutely love the services. The customer support was fantastic!",
    //   avatar: avatar2,
    },
    {
      name: "Ananya Gupta",
      role: "Freelance Designer",
      feedback:
        "Had the best experience booking my trip through this platform. Highly recommended!",
    //   avatar: avatar3,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-black">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white">Happy Customers</h2>
        <p className="text-gray-300 mt-2">
          See what our users have to say about us.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 px-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="max-w-sm bg-gray-800 p-6 rounded-xl shadow-lg transform transition duration-300 hover:-translate-y-3 hover:shadow-2xl"
          >
            <p className="text-gray-300 italic mb-4">"{testimonial.feedback}"</p>
            <div className="flex items-center gap-4">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-14 h-14 rounded-full border-2 border-purple-400"
              />
              <div>
                <h4 className="text-lg font-semibold text-white">
                  {testimonial.name}
                </h4>
                <span className="text-gray-400 text-sm">{testimonial.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
