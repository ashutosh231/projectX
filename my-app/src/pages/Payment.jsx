import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCreditCard, FaCheckCircle } from "react-icons/fa";

export default function PaymentPage() {
  const navigate = useNavigate();
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [selectedAccommodation, setSelectedAccommodation] = useState(null);
  const [numNights, setNumNights] = useState(1);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    const storedDestination = sessionStorage.getItem("selectedDestination");
    const storedAccommodation = sessionStorage.getItem("selectedAccommodation");
    const storedNights = sessionStorage.getItem("numNights");

    if (storedDestination) setSelectedDestination(JSON.parse(storedDestination));
    if (storedAccommodation) setSelectedAccommodation(JSON.parse(storedAccommodation));
    if (storedNights) setNumNights(parseInt(storedNights, 10));

    if (storedAccommodation) {
      const acc = JSON.parse(storedAccommodation);
      setTotalCost(acc.cost * (storedNights ? parseInt(storedNights, 10) : 1));
    }
  }, []);

  const handlePayment = () => {
    navigate("/paymentOption"); // Navigate to PaymentOption page
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl p-10 transform transition-all duration-500 hover:scale-105">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-6 flex items-center justify-center gap-3">
          <FaCreditCard className="text-blue-600 text-5xl" /> Review & Pay
        </h2>

        {/* Destination Details */}
        {selectedDestination && (
          <div className="mb-6 p-6 border-l-[6px] border-blue-500 rounded-2xl shadow-lg bg-gradient-to-r from-gray-100 to-gray-200">
            <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">📍 Destination</h3>
            <p className="text-lg text-gray-700 font-semibold">{selectedDestination.title}</p>
            <p className="text-sm text-gray-600 italic">{selectedDestination.location}</p>
          </div>
        )}

        {/* Accommodation Details */}
        {selectedAccommodation && (
          <div className="mb-6 p-6 border-l-[6px] border-green-500 rounded-2xl shadow-lg bg-gradient-to-r from-gray-100 to-gray-200">
            <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">🏨 Accommodation</h3>
            <p className="text-lg text-gray-700 font-semibold">{selectedAccommodation.title}</p>
            <p className="text-sm text-gray-600 italic">{selectedAccommodation.location}</p>
            <p className="text-md text-gray-800 font-semibold">
              Per Night Cost: <span className="text-blue-600 font-bold">${selectedAccommodation.cost}</span>
            </p>
            <p className="text-md text-gray-800 font-semibold">
              Nights: <span className="text-green-600 font-bold">{numNights}</span>
            </p>
          </div>
        )}

        {/* Total Cost */}
        <div className="mb-6 p-6 border-l-[6px] border-red-500 rounded-2xl shadow-lg bg-gradient-to-r from-gray-100 to-gray-200">
          <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">💰 Total Cost</h3>
          <p className="text-4xl font-extrabold text-red-600 drop-shadow-md">${totalCost.toFixed(2)}</p>
        </div>

        {/* Payment Button */}
        <button
          className="w-full py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold text-lg rounded-full shadow-lg flex items-center justify-center gap-3 
          hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 active:scale-95"
          onClick={handlePayment}
        >
          <FaCheckCircle className="text-white text-xl" /> Pay Now
        </button>
      </div>
    </div>
  );
}
