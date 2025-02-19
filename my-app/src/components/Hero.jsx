// import { useState } from "react";
// import { useNavigate } from "react-router-dom"; // Importing React Router

// export default function Hero() {
//   const [destination, setDestination] = useState("");
//   const navigate = useNavigate(); // Initialize navigate

//   const handleSearch = () => {
//     if (destination.trim()) {
//       console.log("Searching for:", destination);
//       // Navigate to the Recommend section, passing the destination as a query
//       navigate(`/recommend?destination=${destination}`);
//     } else {
//       alert("Please enter a destination");
//     }
//   };

//   return (
//     <section id="hero" className="relative mt-8 w-full h-full">
//       <div className="h-full">
//         <img
//           src="https://static.vecteezy.com/system/resources/previews/037/248/582/non_2x/ai-generated-travelling-to-thailand-advertisment-background-with-copy-space-free-photo.jpg"
//           className="w-full h-full object-cover"
//         />
//       </div>
//       <div className="absolute inset-0 bg-black opacity-50"></div>
//       <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center gap-4">
//         <div className="text-white px-4 md:px-0">
//           <h1 className="text-4xl md:text-5xl font-bold tracking-wide">
//             TRAVEL TO EXPLORE
//           </h1>
//           <p className="mt-2 text-lg md:text-xl">
//             Discover new places and experience adventures like never before.
//           </p>
//         </div>
//         <div className="flex flex-col md:flex-row bg-white/80 p-4 rounded-md shadow-lg mt-4">
//           <div className="flex flex-col items-center md:items-start md:px-6 mb-4 md:mb-0">
//             <label className="text-lg text-blue-900">
//               Where do you want to go?
//             </label>
//             <input
//               type="text"
//               placeholder="Search your location"
//               value={destination}
//               onChange={(e) => setDestination(e.target.value)}
//               className="mt-2 bg-transparent border-b-2 border-blue-900 text-center md:text-left text-black placeholder-gray-500 focus:outline-none"
//             />
//           </div>
//           <div className="flex flex-col items-center md:items-start md:px-6 mb-4 md:mb-0">
//             <label className="text-lg text-blue-900">Check-in</label>
//             <input
//               type="date"
//               className="mt-2 bg-transparent border-b-2 border-blue-900 text-center md:text-left text-black focus:outline-none"
//             />
//           </div>
//           <div className="flex flex-col items-center md:items-start md:px-6 mb-4 md:mb-0">
//             <label className="text-lg text-blue-900">Check-out</label>
//             <input
//               type="date"
//               className="mt-2 bg-transparent border-b-2 border-blue-900 text-center md:text-left text-black focus:outline-none"
//             />
//           </div>
//           <button
//             className="mt-4 md:mt-0 md:ml-6 px-6 py-3 cursor-pointer rounded-md border-none text-white bg-blue-600 text-lg uppercase transition duration-300 hover:bg-blue-900"
//             onClick={handleSearch}
//           >
//             Explore Now
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }


import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const [destination, setDestination] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (destination.trim()) {
      console.log("Searching for:", destination);
      navigate(`/recommend?destination=${destination}`);
    } else {
      alert("Please enter a destination");
    }
  };

  return (
    <section id="hero" className="relative mt-8 w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Video */}
      {/* Background Image */}
    <img
      src="https://images.moneycontrol.com/static-mcnews/2024/12/20241224124455_1.jpg?impolicy=website&width=770&height=431"
      alt="Background"
      className="absolute top-0 left-0 w-full h-full object-cover"
    />



      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-5"></div>

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center gap-4">
        <div className="text-white px-4 md:px-0">
          <h1 className="text-4xl md:text-6xl font-bold tracking-wide animate-typing">
            TRAVEL TO EXPLORE
          </h1>
          <p className="mt-4 text-lg md:text-2xl font-light">
            Discover new places and experience adventures like never before.
          </p>
        </div>
        <div className="flex flex-col md:flex-row bg-white/80 p-6 rounded-lg shadow-2xl mt-8">
          <div className="flex flex-col items-center md:items-start md:px-6 mb-4 md:mb-0">
            <label className="text-lg text-blue-900 font-semibold flex items-center gap-2">
              <i className="fas fa-map-marker-alt text-blue-600"></i>
              Where do you want to go?
            </label>
            <input
              type="text"
              placeholder="Search your location"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="mt-2 bg-transparent border-b-2 border-blue-900 text-center md:text-left text-black placeholder-gray-500 focus:outline-none"
            />
          </div>
          <div className="flex flex-col items-center md:items-start md:px-6 mb-4 md:mb-0">
            <label className="text-lg text-blue-900 font-semibold flex items-center gap-2">
              <i className="fas fa-calendar-alt text-blue-600"></i>
              Check-in
            </label>
            <input
              type="date"
              className="mt-2 bg-transparent border-b-2 border-blue-900 text-center md:text-left text-black focus:outline-none"
            />
          </div>
          <div className="flex flex-col items-center md:items-start md:px-6 mb-4 md:mb-0">
            <label className="text-lg text-blue-900 font-semibold flex items-center gap-2">
              <i className="fas fa-calendar-alt text-blue-600"></i>
              Check-out
            </label>
            <input
              type="date"
              className="mt-2 bg-transparent border-b-2 border-blue-900 text-center md:text-left text-black focus:outline-none"
            />
          </div>
          <button
            className="mt-4 md:mt-0 md:ml-6 px-8 py-3 cursor-pointer rounded-lg border-none text-white bg-blue-600 text-lg uppercase transition duration-300 hover:bg-blue-900 flex items-center gap-2"
            onClick={handleSearch}
          >
            <i className="fas fa-search"></i>
            Explore Now
          </button>
        </div>
      </div>
    </section>
  );
}