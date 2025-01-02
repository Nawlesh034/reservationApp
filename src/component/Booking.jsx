import React, { useState } from "react";
import axiosInstance from "../axiosInstances"; // Make sure axiosInstance is correctly configured
import BookingSummary from "./BookingSummary";

function BookingForm() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('2');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');

  const [booking, setBooking] = useState(null);

  const handleSubmit = () => {
    if (!date || !time || !guests || !name || !contact || !email) {
      alert('All fields are required');
      return;
    }

    const newReservation = {
      date,
      time,
      guests,
      name,
      contact,
      email,
    };

    axiosInstance.post('/api/reservations', newReservation)
      .then((response) => {
        console.log("Reservation created:", response.data);
        setBooking(response.data); // Save booking details in state
        alert("Reservation done");

        // Clear the form state
        setDate('');
        setTime('');
        setGuests('2');
        setName('');
        setContact('');
        setEmail('');
      })
      .catch((error) => {
        console.error('Error creating reservation:', error.response ? error.response.data : error.message);
        alert("Error creating reservation");
      });
  };

  if (booking) {
    return <BookingSummary details={booking} />;
  }

  return (
    <div className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Book a Table</h1>
      <form className="space-y-6">
        <div>
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="date">Date</label>
          <input
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="time">Time</label>
          <input
            type="time"
            value={time}
            onChange={e => setTime(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="guests">Number of Guests</label>
          <input
            type="number"
            placeholder="Guests"
            value={guests}
            onChange={e => setGuests(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="contact">Contact Details</label>
          <input
            type="text"
            placeholder="Phone or Address"
            value={contact}
            onChange={e => setContact(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="text-center">
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default BookingForm;
