
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const [destination, setDestination] = useState("");
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const headingText = "Discover Your Next Adventure";

  useEffect(() => {
    if (index < headingText.length) {
      const timer = setTimeout(() => {
        setText((prev) => prev + headingText[index]);
        setIndex(index + 1);
      }, 100); // Typing speed (adjust if needed)

      return () => clearTimeout(timer);
    }
  }, [index]);

  const handleSearch = () => {
    if (destination.trim()) {
      navigate(`/recommend?destination=${destination}`);
    } else {
      alert("Please enter a destination");
    }
  };

  return (
    <section className="relative w-full h-screen flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Left Section (Search) */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-left p-12 space-y-6 animate-fade-in">
        {/* Typing Effect for Heading */}
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 drop-shadow-2xl">
          {text}
          <span className="animate-blink">.....</span>
        </h1>

        <p className="text-lg md:text-2xl opacity-90 font-medium text-white/80">
          Explore breathtaking destinations curated just for you.
        </p>

        {/* Search Box */}
        <div className="mt-6 bg-white/20 p-6 rounded-3xl shadow-2xl backdrop-blur-xl flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 border border-white/30 w-full">
          <input
            type="text"
            placeholder="Where to next?"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="px-5 py-3 rounded-lg bg-white/30 border border-yellow-400 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full"
          />
          <input
            type="date"
            className="px-5 py-3 rounded-lg bg-white/30 border border-yellow-400 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="date"
            className="px-5 py-3 rounded-lg bg-white/30 border border-yellow-400 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-500 text-lg uppercase font-semibold transition transform duration-300 hover:scale-110 hover:shadow-2xl"
            onClick={handleSearch}
          >
            <i className="fas fa-search"></i> Search
          </button>
        </div>
      </div>

      {/* Right Section (Image Gallery) */}
      <div className="w-full md:w-1/2 grid grid-cols-2 gap-6 p-8 relative animate-fade-in delay-200">
        {[
          "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg",
          "https://images.pexels.com/photos/1450372/pexels-photo-1450372.jpeg",
          "https://www.india.com/wp-content/uploads/2024/11/Kupwara.jpg",
          "https://www.tripgiraffe.com/upload/media/0/fcaqu/sydney1.png",
        ].map((img, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-3xl shadow-2xl border-4 border-white/50 transform transition duration-300 hover:scale-105 hover:shadow-3xl"
          >
            <img src={img} alt={`Destination ${index + 1}`} className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-lg font-bold">
              Discover More
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
