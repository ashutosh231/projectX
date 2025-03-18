import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCreditCard, FaCheckCircle, FaMapMarkerAlt, FaHotel, FaMoneyBillWave } from 'react-icons/fa';

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
    <div className="flex justify-center items-center min-h-screen bg-richblack-900 text-white p-6">
      <div className="w-full max-w-3xl bg-gray-900 text-white rounded-3xl shadow-lg p-10 border border-gray-700">
        
        <h2 className="text-4xl font-extrabold text-center mb-6 flex items-center justify-center gap-3">
          <FaCreditCard className="text-blue-400 text-5xl" /> Review & Pay
        </h2>
  
        {selectedDestination && (
          <div className="mb-6 p-6 border-l-4 border-blue-400 rounded-xl bg-gray-800">
            <h3 className="text-2xl font-bold text-blue-300 flex items-center gap-2">
              <FaMapMarkerAlt /> Destination
            </h3>
            <p className="text-lg text-gray-300 font-semibold">{selectedDestination.title}</p>
            <p className="text-sm text-gray-400 italic">{selectedDestination.location}</p>
          </div>
        )}
  
        {selectedAccommodation && (
          <div className="mb-6 p-6 border-l-4 border-green-400 rounded-xl bg-gray-800">
            <h3 className="text-2xl font-bold text-green-300 flex items-center gap-2">
              <FaHotel /> Accommodation
            </h3>
            <p className="text-lg text-gray-300 font-semibold">{selectedAccommodation.title}</p>
            <p className="text-sm text-gray-400 italic">{selectedAccommodation.location}</p>
            <p className="text-md text-gray-300 font-semibold">Per Night Cost: <span className="text-blue-400 font-bold">${selectedAccommodation.cost}</span></p>
            <p className="text-md text-gray-300 font-semibold">Nights: <span className="text-green-400 font-bold">{numNights}</span></p>
          </div>
        )}
  
        <div className="mb-6 p-6 border-l-4 border-red-500 rounded-xl bg-gray-800">
          <h3 className="text-2xl font-bold text-red-400 flex items-center gap-2">
            <FaMoneyBillWave /> Total Cost
          </h3>
          <p className="text-4xl font-extrabold text-red-400">${totalCost.toFixed(2)}</p>
        </div>
  
        <button
          className="w-full py-3 bg-blue-600 text-white font-bold text-lg rounded-lg shadow-md flex items-center justify-center gap-3 hover:bg-blue-500 transition-all"
          onClick={handlePayment}
        >
          <FaCheckCircle className="text-white text-xl" /> Pay Now
        </button>
      </div>
    </div>
  );
}

