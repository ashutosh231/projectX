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
    if (storedNights) setNumNights(parseInt(storedNights));

    if (storedAccommodation) {
      const acc = JSON.parse(storedAccommodation);
      setTotalCost(acc.cost * (storedNights ? parseInt(storedNights) : 1));
    }
  }, []);

  const handlePayment = () => {
    alert("🎉 Payment successful! Booking confirmed.");
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-300 to-blue-400 p-6">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl p-8 transform transition-all duration-500 hover:scale-105">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-6 flex items-center justify-center gap-2">
          <FaCreditCard className="text-blue-600" /> Review & Pay
        </h2>

        {/* Destination Details */}
        {selectedDestination && (
          <div className="mb-6 p-5 border-l-8 border-blue-500 rounded-xl shadow-sm bg-gray-100">
            <h3 className="text-2xl font-bold text-gray-800">📍 Destination</h3>
            <p className="text-lg text-gray-700 font-medium">{selectedDestination.title}</p>
            <p className="text-sm text-gray-600">{selectedDestination.location}</p>
          </div>
        )}

        {/* Accommodation Details */}
        {selectedAccommodation && (
          <div className="mb-6 p-5 border-l-8 border-green-500 rounded-xl shadow-sm bg-gray-100">
            <h3 className="text-2xl font-bold text-gray-800">🏨 Accommodation</h3>
            <p className="text-lg text-gray-700 font-medium">{selectedAccommodation.title}</p>
            <p className="text-sm text-gray-600">{selectedAccommodation.location}</p>
            <p className="text-sm text-gray-600 font-semibold">Per Night Cost: <span className="text-blue-600">${selectedAccommodation.cost}</span></p>
            <p className="text-sm text-gray-600 font-semibold">Nights: <span className="text-green-600">{numNights}</span></p>
          </div>
        )}

        {/* Total Cost */}
        <div className="mb-6 p-5 border-l-8 border-red-500 rounded-xl shadow-sm bg-gray-100">
          <h3 className="text-2xl font-bold text-gray-800">💰 Total Cost</h3>
          <p className="text-3xl font-extrabold text-red-600">${totalCost.toFixed(2)}</p>
        </div>

        {/* Payment Button */}
        <button
          className="w-full py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold text-lg rounded-full shadow-lg flex items-center justify-center gap-2 hover:from-green-600 hover:to-blue-600 transition-all duration-300"
          onClick={handlePayment}
        >
          <FaCheckCircle className="text-white" /> Pay Now
        </button>
      </div>
    </div>
  );
}
