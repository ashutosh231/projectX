import { useState, useRef } from "react";

export default function Recommend() {
  const destinations = [
    { image: "https://cdn.britannica.com/17/83817-050-67C814CD/Mount-Everest.jpg", title: "Mount Everest", subTitle: "Experience the breathtaking beauty of the world's highest peak.", cost: "75000", duration: "5 nights", distance: "3,500 km", rating: 4.9, reviews: 320 },
    { image: "https://www.shutterstock.com/image-photo/jaguar-on-patrol-hunt-food-600nw-2437844757.jpg", title: "Amazon Rainforest", subTitle: "Explore the lush and dense wilderness with exotic wildlife.", cost: "60500", duration: "4 nights", distance: "4,200 km", rating: 4.7, reviews: 250 },
    { image: "https://www.thoughtco.com/thmb/l0Ei2qSYEp6vtU6a1o0FtphhV4s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SaharaDesert-58c1a5603df78c353c3d525d.jpg", title: "Sahara Desert", subTitle: "Witness the vast golden dunes and the stunning desert landscapes.", cost: "45000", duration: "3 nights", distance: "2,800 km", rating: 4.6, reviews: 190 },
    { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8PbT66cTf7eSO9iylaXXHDbis0U6KGWQ7vw&s", title: "Great Barrier Reef", subTitle: "Dive into the world's largest coral reef system.", cost: "90000", duration: "5 nights", distance: "8,000 km", rating: 4.8, reviews: 280 },
    { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDO5HT08XYSvimImIzObLa-YQUKNgyFP_AXA&s", title: "Swiss Alps", subTitle: "Enjoy the breathtaking winter landscape and scenic views.", cost: "85000", duration: "6 nights", distance: "5,500 km", rating: 4.9, reviews: 400 },
    { image: "https://npf-prod.imgix.net/uploads/shutterstock_97706066_1.jpg?auto=compress%2Cformat&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=900&q=80&w=1600", title: "Grand Canyon", subTitle: "Marvel at the stunning natural rock formations and sunset views.", cost: "50000", duration: "4 nights", distance: "3,000 km", rating: 4.8, reviews: 310 },
  ];

  const [active, setActive] = useState(0);
  const [filteredDestinations, setFilteredDestinations] = useState(destinations);

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

  

  return (
    <section id="recommend" className="py-12 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-extrabold text-white">
            Recommended Destinations ✈️
          </h2>
          <p className="text-white">
            Explore stunning locations curated just for you.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-8 overflow-x-auto">
  <ul className="flex list-none gap-4 border-b-2 border-gray-700 flex-wrap px-4">
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
            : "text-white-100 hover:bg-purple-600 hover:text-white"
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
            <TiltCard key={index} destination={destination} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Card Component with Tilt Effect


const TiltCard = ({ destination }) => {
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

    // Dynamic Border Effect (Soft Glow on X & Y Axis)
    const borderColorX = `rgba(147, 51, 234, ${x + 0.3})`; // Soft Purple
    const borderColorY = `rgba(192, 38, 211, ${y + 0.3})`; // Soft Magenta

    card.style.borderTop = `4px solid ${borderColorY}`;
    card.style.borderBottom = `4px solid ${borderColorY}`;
    card.style.borderLeft = `4px solid ${borderColorX}`;
    card.style.borderRight = `4px solid ${borderColorX}`;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    card.style.boxShadow = `0px 20px 40px rgba(0, 0, 0, 0.3)`;

    // Balanced Glow Effect
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
      card.style.border = "none"; // Remove border on leave

      setCursorStyle({ top: "50%", left: "50%", opacity: 0 });
    }
  };

  return (
    <div
      ref={cardRef}
      className="relative bg-gradient-to-br bg-black rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-out transform"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Balanced Soft Glow Effect */}
      <div
        className="absolute w-[180px] h-[180px] bg-gradient-to-r from-purple-500 to-green opacity-40 blur-[50px] transition-all duration-100 pointer-events-none"
        style={{
          top: cursorStyle.top,
          left: cursorStyle.left,
          transform: "translate(-50%, -50%)",
          opacity: cursorStyle.opacity,
        }}
      ></div>

      {/* Image with Overlay */}
      <div className="relative">
        <img
          src={destination.image}
          alt={destination.title}
          className="w-full h-56 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{destination.title}</h3>
        <p className="text-white mb-4">{destination.subTitle}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-purple-600 font-semibold text-xl">
            ${destination.cost}
          </span>
          <span className="text-white-100">{destination.duration}</span>
        </div>
        <div className="flex justify-between items-center text-white mb-6">
          <span>{destination.distance}</span>
          <span className="flex items-center">
            ⭐ {destination.rating} ({destination.reviews} reviews)
          </span>
        </div>
        <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
          Book Now
        </button>
      </div>
    </div>
  );
};

