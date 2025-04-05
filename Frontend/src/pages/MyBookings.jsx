import React, { useEffect, useState } from "react";

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(storedBookings);
  }, []);

  const cancelBooking = (index) => {
    const updatedBookings = bookings.map((booking, i) =>
      i === index ? { ...booking, status: "Cancelled" } : booking
    );
    setBookings(updatedBookings);
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">My Bookings</h2>
      {bookings.length === 0 ? (
        <p className="text-gray-600">No bookings found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bookings.map((booking, index) => {
            const destination =
              typeof booking.destination === "string"
                ? JSON.parse(booking.destination)
                : booking.destination;
            const accommodation =
              typeof booking.accommodation === "string"
                ? JSON.parse(booking.accommodation)
                : booking.accommodation;
            const members =
              typeof booking.members === "string"
                ? JSON.parse(booking.members)
                : booking.members;

            return (
              <div key={index} className="bg-white rounded-3xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-blue-600 mb-2">
                  {destination.title}
                </h3>
                <p className="text-gray-600 mb-1">
                  <strong>Location:</strong> {destination.location}
                </p>
                <p className="text-gray-600 mb-1">
                  <strong>Accommodation:</strong> {accommodation.title}
                </p>
                <p className="text-gray-600 mb-1">
                  <strong>Accommodation Location:</strong> {accommodation.location}
                </p>
                <p className="text-gray-600 mb-1">
                  <strong>Total Cost:</strong> Rs.{booking.totalCost}
                </p>
                <p className="text-gray-600 mb-1">
                  <strong>Booking Date:</strong> {new Date(booking.date).toLocaleString()}
                </p>
                <p className="text-gray-600">
                  <strong>Duration:</strong> {destination.duration}
                </p>
                <p className="text-gray-600 mb-1">
                  <strong>Status:</strong> {booking.status=== "Pending" ? "Confirmed" : "Cancelled"}
                </p>
                <div className="mt-4">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Members:</h4>
                  {members && members.length > 0 ? (
                    <ul className="list-disc pl-5 text-gray-600">
                      {members.map((member, i) => (
                        <li key={i}>
                          {member.name} (Age: {member.age})
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-600">No members added.</p>
                  )}
                </div>
                <button
                  onClick={() => cancelBooking(index)}
                  className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Cancel Booking
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
