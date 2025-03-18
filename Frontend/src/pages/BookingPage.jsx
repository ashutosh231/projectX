
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
    <div className="flex flex-col min-h-screen bg-white text-black">
      <div className="flex-grow flex flex-col items-center p-6">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Destination Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-3xl shadow-2xl p-8 transition-transform hover:scale-105 hover:shadow-purple-500/50"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-4">Selected Destination</h2>
            {selectedDestination ? (
              <>
                <img
                  src={selectedDestination.image}
                  alt={selectedDestination.title}
                  className="w-full h-48 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-transform hover:scale-105"
                />
                <h3 className="text-2xl font-semibold text-white mt-4">{selectedDestination.title}</h3>
                <p className="text-lg text-gray-200"><strong>Location:</strong> {selectedDestination?.location || "Not Available"}</p>
                <p className="text-gray-300"><strong>Description:</strong> {selectedDestination?.description || "No description provided"}</p>
                <p className="text-xl font-bold text-green-400 mt-2">
                  {selectedDestination?.cost ? `$${selectedDestination.cost}` : "Price not available"}
                </p>
              </>
            ) : (
              <button
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg rounded-full shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all hover:scale-105"
                onClick={() => navigate("/recommend")}
              >
                Choose Destination
              </button>
            )}
          </motion.div>

          {/* Accommodation Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-3xl shadow-2xl p-8 transition-transform hover:scale-105 hover:shadow-purple-500/50"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-4">Selected Accommodation</h2>
            {selectedAccommodation ? (
              <>
                <img
                  src={selectedAccommodation.image}
                  alt={selectedAccommodation.title}
                  className="w-full h-48 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-transform hover:scale-105"
                />
                <h3 className="text-2xl font-semibold text-white mt-4">{selectedAccommodation.title}</h3>
                <p className="text-lg text-gray-200"><strong>Location:</strong> {selectedAccommodation?.location || "Not Available"}</p>
                <p className="text-gray-300"><strong>Description:</strong> {selectedAccommodation?.description || "No description provided"}</p>

                {/* Check-in and Check-out Date Pickers */}
                <div className="mt-4 space-y-4">
                  <div>
                    <label className="block text-lg font-semibold text-gray-200">Check-in Date:</label>
                    <DatePicker
                      selected={checkInDate}
                      onChange={(date) => setCheckInDate(date)}
                      minDate={new Date()}
                      className="mt-2 p-2 border rounded-md text-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-semibold text-gray-200">Check-out Date:</label>
                    <DatePicker
                      selected={checkOutDate}
                      onChange={(date) => setCheckOutDate(date)}
                      minDate={checkInDate}
                      className="mt-2 p-2 border rounded-md text-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
                    />
                  </div>
                </div>

                <p className="text-lg text-gray-200 mt-4"><strong>Number of Nights:</strong> {numNights}</p>
                <p className="text-2xl font-bold text-green-400 mt-4">
                  Total Cost: ${selectedAccommodation?.cost ? (selectedAccommodation.cost * numNights).toFixed(2) : "Price not available"}
                </p>
              </>
            ) : (
              <button
                className="w-full py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white font-bold text-lg rounded-full shadow-lg hover:from-green-700 hover:to-teal-700 transition-all hover:scale-105"
                onClick={() => navigate("/accommodation")}
              >
                Choose Accommodation
              </button>
            )}
          </motion.div>
        </div>

        {/* Buttons Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex justify-center gap-4"
        >
          <button
            className="py-4 px-6 bg-gradient-to-r from-red-600 to-pink-600 text-white font-bold text-lg rounded-full shadow-lg hover:from-red-700 hover:to-pink-700 transition-all hover:scale-105"
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
            className={`py-4 px-6 text-white font-bold text-lg rounded-full shadow-lg transition-all hover:scale-105
              ${selectedDestination && selectedAccommodation ? "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700" : "bg-gray-400 cursor-pointer"}`}
            disabled={!selectedDestination || !selectedAccommodation}
            onClick={() => navigate("/payment")}
          >
            Proceed to Payment
          </button>
        </motion.div>
      </div>
    </div>
  );
}
