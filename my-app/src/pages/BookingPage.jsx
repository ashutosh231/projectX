import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function BookingPage() {
  const navigate = useNavigate();
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [selectedAccommodation, setSelectedAccommodation] = useState(null);
  const [numNights, setNumNights] = useState(1); // Default to 1 night

  useEffect(() => {
    const storedDestination = sessionStorage.getItem("selectedDestination");
    const storedAccommodation = sessionStorage.getItem("selectedAccommodation");

    if (storedDestination) setSelectedDestination(JSON.parse(storedDestination));
    if (storedAccommodation) setSelectedAccommodation(JSON.parse(storedAccommodation));
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 p-6 z-20">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Destination Selection */}
        <div className="bg-white rounded-3xl shadow-xl p-8 transition-transform transform hover:scale-105">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Selected Destination</h2>
          {selectedDestination ? (
            <>
              <img src={selectedDestination.image} alt={selectedDestination.title} className="w-full h-48 object-cover rounded-2xl shadow-lg transition-transform transform hover:scale-105"/>
              <h3 className="text-2xl font-semibold text-gray-900 mt-4 text-center">{selectedDestination.title}</h3>
              <p className="text-lg text-gray-600 text-center"><strong>Subtitle:</strong> {selectedDestination?.subTitle || "Not Available"}</p>
              <p className="text-lg text-gray-600 text-center"><strong>Location:</strong> {selectedDestination?.location || "Not Available"}</p>
              <p className="text-gray-700 text-center mt-2"><strong>Description:</strong> {selectedDestination?.description || "No description provided"}</p>
              <p className="text-gray-700 text-center mt-2"><strong>Rating:</strong> {selectedDestination?.rating || "No rating available"}</p>
              <p className="text-gray-700 text-center mt-2"><strong>Reviews:</strong> {selectedDestination?.reviews || "No reviews available"}</p>
              <p className="text-2xl font-bold text-purple-700 text-center mt-2">
                {selectedDestination?.cost ? `$${selectedDestination.cost}` : "Price not available"}
              </p>
            </>
          ) : (
            <button 
              className="w-full py-3 bg-blue-600 text-white font-bold text-lg rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300"
              onClick={() => navigate("/recommend")}
            >
              Choose Destination
            </button>
          )}
        </div>

        {/* Accommodation Selection */}
        <div className="bg-white rounded-3xl shadow-xl p-8 transition-transform transform hover:scale-105">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Selected Accommodation</h2>
          {selectedAccommodation ? (
            <>
              <img src={selectedAccommodation.image} alt={selectedAccommodation.title} className="w-full h-48 object-cover rounded-2xl shadow-lg transition-transform transform hover:scale-105"/>
              <h3 className="text-2xl font-semibold text-gray-900 mt-4 text-center">{selectedAccommodation.title}</h3>
              {/* <p className="text-lg text-gray-600 text-center"><strong>Subtitle:</strong> {selectedAccommodation?.subTitle || "Not Available"}</p> */}
              <p className="text-lg text-gray-600 text-center"><strong>Location:</strong> {selectedAccommodation?.location || "Not Available"}</p>
              <p className="text-gray-700 text-center mt-2"><strong>Description:</strong> {selectedAccommodation?.description || "No description provided"}</p>
              <p className="text-lg text-gray-600 text-center"><strong>Location:</strong> {selectedAccommodation?.location || "Not Available"}</p>
              <p className="text-gray-700 text-center mt-2"><strong>Rating:</strong> {selectedAccommodation?.rating || "No rating available"}</p>
              <p className="text-gray-700 text-center mt-2"><strong>Reviews:</strong> {selectedAccommodation?.reviews || "No reviews available"}</p>
              
              {/* Nights Selection */}
              <div className="text-center mt-4">
                <label htmlFor="nights" className="block text-lg font-semibold text-gray-800">
                  Select Nights:
                </label>
                <select
                  id="nights"
                  className="mt-2 p-2 border rounded-md text-lg"
                  value={numNights}
                  onChange={(e) => setNumNights(parseInt(e.target.value))}
                >
                  {[...Array(30).keys()].map((n) => (
                    <option key={n + 1} value={n + 1}>
                      {n + 1} Night{n + 1 > 1 ? "s" : ""}
                    </option>
                  ))}
                </select>
              </div>

              {/* Updated Cost */}
              <p className="text-2xl font-bold text-blue-600 text-center mt-4">
                Total Cost: ${selectedAccommodation?.cost ? (selectedAccommodation.cost * numNights).toFixed(2) : "Price not available"}
              </p>
            </>
          ) : (
            <button 
              className="w-full py-3 bg-green-600 text-white font-bold text-lg rounded-full shadow-lg hover:bg-green-700 transition-all duration-300"
              onClick={() => navigate("/accommodation")}
            >
              Choose Accommodation
            </button>
          )}
        </div>
      </div>

      {/* Proceed to Payment */}
      <div className="mt-8">
        <button 
          className={`w-full max-w-md py-4 text-white font-bold text-lg rounded-full shadow-lg transition-all duration-300
            ${selectedDestination && selectedAccommodation ? "bg-purple-600 hover:bg-purple-700" : "bg-gray-400 cursor-not-allowed"}`}
          disabled={!selectedDestination || !selectedAccommodation}
          onClick={() => navigate("/payment")}
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}
