

import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { destinations } from "../data/Recommend"; // Corrected import

export default function Recommend() {
  const [active, setActive] = useState(0);
  const [filteredDestinations, setFilteredDestinations] = useState(destinations);
  const navigate = useNavigate();

  const filterDestinations = (index) => {
    setActive(index);
    if (index === 0) {
      setFilteredDestinations(destinations);
    } else if (index === 1) {
      setFilteredDestinations(destinations.filter((d) => parseInt(d.cost) < 50000));
    } else if (index === 2) {
      setFilteredDestinations(
        destinations.filter((d) => parseInt(d.cost) >= 50000 && parseInt(d.cost) <= 80000)
      );
    } else {
      setFilteredDestinations(destinations.filter((d) => parseInt(d.cost) > 80000));
    }
  };

  const handleBooking = (destination) => {
    sessionStorage.setItem("selectedDestination", JSON.stringify(destination));
    navigate("/booking");
  };

  return (
    <section id="recommend" className="py-12 bg-gradient-to-r from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-extrabold text-white">Recommended Destinations ✈️</h2>
          <p className="text-white">Explore stunning locations curated just for you.</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-8 overflow-x-auto">
          <ul className="flex list-none gap-4 border-b-2 border-gray-700 px-4 flex-nowrap">
            {[
              "All Destinations",
              "Budget-Friendly (< $50,000)",
              "Mid-Range ($50,000 - $80,000)",
              "Luxury Travel (> $80,000)",
            ].map((pkg, index) => (
              <li
                key={index}
                className={`cursor-pointer px-4 py-2 text-sm rounded-md transition duration-300 ${
                  active === index
                    ? "bg-purple-600 text-white font-semibold shadow-lg"
                    : "bg-purple-600 text-white"
                }`}
                onClick={() => filterDestinations(index)}
              >
                {pkg}
              </li>
            ))}
          </ul>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDestinations.map((destination, index) => (
            <TiltCard key={index} destination={destination} handleBooking={handleBooking} />
          ))}
        </div>
      </div>
    </section>
  );
}

// TiltCard Component
const TiltCard = ({ destination, handleBooking }) => {
  const cardRef = useRef(null);
  const [cursorStyle, setCursorStyle] = useState({ top: "50%", left: "50%", opacity: 0 });

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const { left, top, width, height } = card.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;

    const rotateX = (y - 0.5) * 15;
    const rotateY = (x - 0.5) * 15;

    const borderColorX = `rgba(147, 51, 234, ${x + 0.3})`;
    const borderColorY = `rgba(192, 38, 211, ${y + 0.3})`;

    card.style.borderTop = `4px solid ${borderColorY}`;
    card.style.borderBottom = `4px solid ${borderColorY}`;
    card.style.borderLeft = `4px solid ${borderColorX}`;
    card.style.borderRight = `4px solid ${borderColorX}`;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    card.style.boxShadow = `0px 20px 40px rgba(0, 0, 0, 0.3)`;

    setCursorStyle({
      top: `${y * 100}%`,
      left: `${x * 100}%`,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (card) {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
      card.style.boxShadow = "0px 10px 20px rgba(0, 0, 0, 0.15)";
      card.style.border = "none";

      setCursorStyle({ top: "50%", left: "50%", opacity: 0 });
    }
  };

  return (
    <div
      ref={cardRef}
      className="relative bg-gradient-to-b from-black via-gray-900 to-black rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-out transform"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="absolute w-[180px] h-[180px] bg-gradient-to-r from-purple-500 to-green opacity-40 blur-[50px] transition-all duration-100 pointer-events-none"
        style={{
          top: cursorStyle.top,
          left: cursorStyle.left,
          transform: "translate(-50%, -50%)",
          opacity: cursorStyle.opacity,
        }}
      ></div>

      <div className="relative">
        <img src={destination.image} alt={destination.title} className="w-full h-56 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{destination.title}</h3>
        <p className="text-white mb-4">{destination.subTitle}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-purple-600 font-semibold text-xl">${destination.cost}</span>
          <span className="text-white-100">{destination.duration}</span>
        </div>
        <div className="flex justify-between items-center text-white mb-6">
          <span>{destination.distance}</span>
          <span className="flex items-center">⭐ {destination.rating} ({destination.reviews} reviews)</span>
        </div>
        <button
          className="w-full cursor-pointer bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
          onClick={() => handleBooking(destination)}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

