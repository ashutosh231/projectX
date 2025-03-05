import React from "react";
import { FaSuitcaseRolling, FaTint, FaLanguage, FaFileAlt, FaMapMarkedAlt } from "react-icons/fa";

const tips = [
  {
    icon: <FaSuitcaseRolling className="text-blue-400 text-5xl mb-4" />,
    title: "Pack Light",
    description:
      "Avoid overpacking and bring only the essentials. Rolling clothes instead of folding saves space and reduces wrinkles.",
  },
  {
    icon: <FaTint className="text-blue-400 text-5xl mb-4" />,
    title: "Stay Hydrated",
    description:
      "Always carry a reusable water bottle and stay hydrated, especially when traveling to different climates.",
  },
  {
    icon: <FaLanguage className="text-blue-400 text-5xl mb-4" />,
    title: "Learn Key Phrases",
    description:
      "Learning a few local phrases like 'Hello,' 'Thank you,' and 'Where is the bathroom?' can be very helpful.",
  },
  {
    icon: <FaFileAlt className="text-blue-400 text-5xl mb-4" />,
    title: "Keep Copies of Important Documents",
    description:
      "Make photocopies of important travel documents and store digital copies on your phone or cloud for security.",
  },
  {
    icon: <FaMapMarkedAlt className="text-blue-400 text-5xl mb-4" />,
    title: "Plan Ahead, But Stay Flexible",
    description:
      "Having a plan is great, but allow time for spontaneous adventures and relaxation.",
  },
];

const TravelTips = () => {
  return (
    <section id="travel-tips" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Travel Tips
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-gray-900 p-8 rounded-lg shadow-xl transform transition-transform hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center"
            >
              {tip.icon}
              <h3 className="text-2xl font-semibold text-blue-400 mb-4">{tip.title}</h3>
              <p className="text-gray-300">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelTips;