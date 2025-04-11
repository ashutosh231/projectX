// import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { motion } from "framer-motion";

// export default function BookingPage() {
//   const navigate = useNavigate();
//   const [selectedDestination, setSelectedDestination] = useState(null);
//   const [selectedAccommodation, setSelectedAccommodation] = useState(null);
//   const [checkInDate, setCheckInDate] = useState(new Date());
//   const [checkOutDate, setCheckOutDate] = useState(new Date());
//   const [numNights, setNumNights] = useState(1);
//   const [members, setMembers] = useState([{ name: "", age: "" }]);

//   const handleMemberChange = (index, field, value) => {
//     const updatedMembers = [...members];
//     updatedMembers[index][field] = value;
//     setMembers(updatedMembers);
//   };

//   const addMember = () => {
//     setMembers([...members, { name: "", age: "" }]);
//   };

//   const removeMember = (index) => {
//     const updatedMembers = members.filter((_, i) => i !== index);
//     setMembers(updatedMembers);
//   };

//   useEffect(() => { 
//     if (checkInDate && checkOutDate) {
//       const timeDiff = checkOutDate - checkInDate;
//       const nights = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
//       setNumNights(nights > 0 ? nights : 1);
//     }
//   }, [checkInDate, checkOutDate]);

//   useEffect(() => {
//     const storedDestination = sessionStorage.getItem("selectedDestination");
//     const storedAccommodation = sessionStorage.getItem("selectedAccommodation");

//     if (storedDestination) setSelectedDestination(JSON.parse(storedDestination));
//     if (storedAccommodation) setSelectedAccommodation(JSON.parse(storedAccommodation));
//   }, []);

//   return (
//     <div className="flex flex-col min-h-screen bg-richbalck-900 text-white">
//       <div className="flex-grow flex flex-col items-center p-6">
//         <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Destination Section */}
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-3xl shadow-2xl p-8 transition-transform hover:scale-105 hover:shadow-purple-500/50"
//           >
//             <h2 className="text-3xl font-bold text-white text-center mb-4">Selected Destination</h2>
//             {selectedDestination ? (
//               <>
//                 <img
//                   src={selectedDestination.image}
//                   alt={selectedDestination.title}
//                   className="w-full h-48 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-transform hover:scale-105"
//                 />
//                 <h3 className="text-2xl font-semibold text-white mt-4">{selectedDestination.title}</h3>
//                 <p className="text-lg text-gray-200"><strong>Location:</strong> {selectedDestination?.location || "Not Available"}</p>
//                 <p className="text-gray-300"><strong>Description:</strong> {selectedDestination?.description || "No description provided"}</p>
//                 <p className="text-xl font-bold text-green-400 mt-2">
//                   {selectedDestination?.cost ? `Rs.${selectedDestination.cost}` : "Price not available"}
//                 </p>
//               </>
//             ) : (
//               <button
//                 className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg rounded-full shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all hover:scale-105"
//                 onClick={() => navigate("/recommend")}
//               >
//                 Choose Destination
//               </button>
//             )}
//           </motion.div>

//           {/* Accommodation Section */}
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-3xl shadow-2xl p-8 transition-transform hover:scale-105 hover:shadow-purple-500/50"
//           >
//             <h2 className="text-3xl font-bold text-white text-center mb-4">Selected Accommodation</h2>
//             {selectedAccommodation ? (
//               <>
//                 <img
//                   src={selectedAccommodation.image}
//                   alt={selectedAccommodation.title}
//                   className="w-full h-48 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-transform hover:scale-105"
//                 />
//                 <h3 className="text-2xl font-semibold text-white mt-4">{selectedAccommodation.title}</h3>
//                 <p className="text-lg text-gray-200"><strong>Location:</strong> {selectedAccommodation?.location || "Not Available"}</p>
//                 <p className="text-gray-300"><strong>Description:</strong> {selectedAccommodation?.description || "No description provided"}</p>

//                 {/* Check-in and Check-out Date Pickers */}
//                 <div className="mt-4 space-y-4">
//                   <div>
//                     <label className="block text-lg font-semibold text-gray-200">Check-in Date:</label>
//                     <DatePicker
//                       selected={checkInDate}
//                       onChange={(date) => setCheckInDate(date)}
//                       minDate={new Date()}
//                       className="mt-2 p-2 border rounded-md text-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-lg font-semibold text-gray-200">Check-out Date:</label>
//                     <DatePicker
//                       selected={checkOutDate}
//                       onChange={(date) => setCheckOutDate(date)}
//                       minDate={checkInDate}
//                       className="mt-2 p-2 border rounded-md text-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
//                     />
//                   </div>
//                 </div>

//                 <p className="text-lg text-gray-200 mt-4"><strong>Number of Nights:</strong> {numNights}</p>
//                 <p className="text-2xl font-bold text-green-400 mt-4">
//                   Total Cost:  Rs.{selectedAccommodation?.cost ? (selectedAccommodation.cost * numNights).toFixed(2) : "Price not available"}
//                 </p>
//               </>
//             ) : (
//               <button
//                 className="w-full py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white font-bold text-lg rounded-full shadow-lg hover:from-green-700 hover:to-teal-700 transition-all hover:scale-105"
//                 onClick={() => navigate("/accommodation")}
//               >
//                 Choose Accommodation
//               </button>
//             )}
//           </motion.div>
//         </div>

//         {/* Add Members Section */}
//         <div className="mt-6">
//           <h3 className="text-xl font-bold text-white mb-4">Add Members</h3>
//           {members.map((member, index) => (
//             <div key={index} className="flex gap-4 mb-4">
//               <input
//                 type="text"
//                 placeholder="Name"
//                 value={member.name}
//                 onChange={(e) => handleMemberChange(index, "name", e.target.value)}
//                 className="p-2 rounded bg-gray-900 text-white w-1/2"
//               />
//               <input
//                 type="number"
//                 placeholder="Age"
//                 value={member.age}
//                 onChange={(e) => handleMemberChange(index, "age", e.target.value)}
//                 className="p-2 rounded bg-gray-900 text-white w-1/4"
//               />
//               <button
//                 onClick={() => removeMember(index)}
//                 className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//               >
//                 Remove
//               </button>
//             </div>
//           ))}
//           <button
//             onClick={addMember}
//             className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//           >
//             Add Member
//           </button>
//         </div>

//         {/* Buttons Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//           className="mt-8 flex justify-center gap-4"
//         >
//           <button
//             className="py-4 px-6 bg-gradient-to-r from-red-600 to-pink-600 text-white font-bold text-lg rounded-full shadow-lg hover:from-red-700 hover:to-pink-700 transition-all hover:scale-105"
//             onClick={() => {
//               setSelectedDestination(null);
//               setSelectedAccommodation(null);
//               sessionStorage.removeItem("selectedDestination");
//               sessionStorage.removeItem("selectedAccommodation");
//             }}
//           >
//             Reset Selections
//           </button>

//           <button
//             className={`py-4 px-6 text-white font-bold text-lg rounded-full shadow-lg transition-all hover:scale-105
//               ${selectedDestination && selectedAccommodation ? "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700" : "bg-gray-400 cursor-pointer"}`}
//             disabled={!selectedDestination || !selectedAccommodation}
//             onClick={() => {
//               sessionStorage.setItem("members", JSON.stringify(members));
//               navigate("/payment");
//             }}
//           >
//             Proceed to Payment
//           </button>
//         </motion.div>
//       </div>
//     </div>
//   );
// }
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { motion } from "framer-motion";

export default function BookingPage() {
  const navigate = useNavigate();
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [selectedAccommodation, setSelectedAccommodation] = useState(null);
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  const [numNights, setNumNights] = useState(1);
  const [members, setMembers] = useState([{ name: "", age: "" }]);

  const handleMemberChange = (index, field, value) => {
    const updatedMembers = [...members];
    updatedMembers[index][field] = value;
    setMembers(updatedMembers);
  };

  const addMember = () => setMembers([...members, { name: "", age: "" }]);
  const removeMember = (index) => setMembers(members.filter((_, i) => i !== index));

  useEffect(() => {
    if (checkInDate && checkOutDate) {
      const timeDiff = checkOutDate - checkInDate;
      const nights = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
      setNumNights(nights > 0 ? nights : 1);
    }
  }, [checkInDate, checkOutDate]);

  useEffect(() => {
    const storedDestination = sessionStorage.getItem("selectedDestination");
    const storedAccommodation = sessionStorage.getItem("selectedAccommodation");
    if (storedDestination) setSelectedDestination(JSON.parse(storedDestination));
    if (storedAccommodation) setSelectedAccommodation(JSON.parse(storedAccommodation));
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="flex-grow flex flex-col items-center p-8">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Destination Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-white/20 transition-transform hover:scale-105"
          >
            <h2 className="text-3xl font-extrabold text-center text-white mb-5">Selected Destination</h2>
            {selectedDestination ? (
              <>
                <img src={selectedDestination.image} alt={selectedDestination.title} className="w-full h-48 object-cover rounded-xl shadow-lg mb-4" />
                <h3 className="text-2xl font-semibold">{selectedDestination.title}</h3>
                <p className="text-sm text-gray-300 mt-1"><strong>Location:</strong> {selectedDestination?.location}</p>
                <p className="text-gray-400 text-sm mt-2">{selectedDestination?.description}</p>
                <p className="text-xl text-green-400 mt-4 font-semibold">Rs. {selectedDestination?.cost}</p>
              </>
            ) : (
              <button
                onClick={() => navigate("/recommend")}
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-full shadow hover:scale-105"
              >
                Choose Destination
              </button>
            )}
          </motion.div>

          {/* Accommodation Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-white/20 transition-transform hover:scale-105"
          >
            <h2 className="text-3xl font-extrabold text-center text-white mb-5">Selected Accommodation</h2>
            {selectedAccommodation ? (
              <>
                <img src={selectedAccommodation.image} alt={selectedAccommodation.title} className="w-full h-48 object-cover rounded-xl shadow-lg mb-4" />
                <h3 className="text-2xl font-semibold">{selectedAccommodation.title}</h3>
                <p className="text-sm text-gray-300 mt-1"><strong>Location:</strong> {selectedAccommodation?.location}</p>
                <p className="text-gray-400 text-sm mt-2">{selectedAccommodation?.description}</p>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Check-in:</label>
                    <DatePicker
                      selected={checkInDate}
                      onChange={setCheckInDate}
                      minDate={new Date()}
                      className="w-full mt-1 p-2 rounded-md bg-gray-800 text-white border border-gray-700"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Check-out:</label>
                    <DatePicker
                      selected={checkOutDate}
                      onChange={setCheckOutDate}
                      minDate={checkInDate}
                      className="w-full mt-1 p-2 rounded-md bg-gray-800 text-white border border-gray-700"
                    />
                  </div>
                </div>

                <p className="text-md mt-4 text-gray-300">Nights: <span className="font-bold">{numNights}</span></p>
                <p className="text-2xl font-bold text-green-400 mt-2">Total: Rs.{(selectedAccommodation.cost * numNights).toFixed(2)}</p>
              </>
            ) : (
              <button
                onClick={() => navigate("/accommodation")}
                className="w-full py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white font-bold rounded-full shadow hover:scale-105"
              >
                Choose Accommodation
              </button>
            )}
          </motion.div>
        </div>

        {/* Member List */}
        <div className="w-full max-w-4xl mt-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
          <h3 className="text-2xl font-bold mb-6 text-white">Group Members</h3>
          {members.map((member, index) => (
            <div key={index} className="flex gap-4 mb-4 items-center">
              <input
                type="text"
                placeholder="Name"
                value={member.name}
                onChange={(e) => handleMemberChange(index, "name", e.target.value)}
                className="flex-1 p-2 rounded-md bg-gray-900 text-white border border-gray-700"
              />
              <input
                type="number"
                placeholder="Age"
                value={member.age}
                onChange={(e) => handleMemberChange(index, "age", e.target.value)}
                className="w-24 p-2 rounded-md bg-gray-900 text-white border border-gray-700"
              />
              <button
                onClick={() => removeMember(index)}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            onClick={addMember}
            className="mt-2 bg-blue-600 hover:bg-blue-700 transition px-6 py-2 text-white font-medium rounded-md"
          >
            Add Member
          </button>
        </div>

        {/* Actions */}
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <button
            className="py-4 px-6 bg-gradient-to-r from-red-600 to-pink-600 text-white font-bold rounded-full shadow-lg hover:scale-105 transition"
            onClick={() => {
              setSelectedDestination(null);
              setSelectedAccommodation(null);
              sessionStorage.removeItem("selectedDestination");
              sessionStorage.removeItem("selectedAccommodation");
            }}
          >
            Reset Selections
          </button>
          <button
            className={`py-4 px-6 font-bold rounded-full shadow-lg transition hover:scale-105
              ${selectedDestination && selectedAccommodation
                ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700"
                : "bg-gray-500 text-white cursor-not-allowed"}`}
            disabled={!selectedDestination || !selectedAccommodation}
            onClick={() => {
              sessionStorage.setItem("members", JSON.stringify(members));
              navigate("/payment");
            }}
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
}
