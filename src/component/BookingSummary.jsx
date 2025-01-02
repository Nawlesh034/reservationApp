import React from "react";

function BookingSummary({ details }) {
  return (
    <div className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Booking Confirmation</h2>
      <p className="text-center text-gray-700 mb-6">Thank you for your reservation!</p>
      
      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
        <ul className="space-y-4">
          <li className="text-lg text-gray-800"><strong className="text-blue-500">Date:</strong> {details.date}</li>
          <li className="text-lg text-gray-800"><strong className="text-blue-500">Time:</strong> {details.time}</li>
          <li className="text-lg text-gray-800"><strong className="text-blue-500">Guests:</strong> {details.guests}</li>
          <li className="text-lg text-gray-800"><strong className="text-blue-500">Name:</strong> {details.name}</li>
          <li className="text-lg text-gray-800"><strong className="text-blue-500">Contact:</strong> {details.contact}</li>
        </ul>
      </div>

      <p className="text-center text-gray-700 mt-6">We look forward to serving you!</p>
    </div>
  );
}

export default BookingSummary;
