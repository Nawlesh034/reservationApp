import { useEffect, useState } from "react";
import axiosInstance from "../axiosInstances";

function AvailabilityDisplay() {
    const [selectedDate, setSelectedDate] = useState('');
    const [availableSlots, setAvailableSlots] = useState([]);
  
    useEffect(() => {
      if (selectedDate) {
        axiosInstance.get(`/api/availability?date=${selectedDate}`)
          .then(response => setAvailableSlots(response.data))
          .catch(error => console.error('Error fetching availability:', error));
      }
    }, [selectedDate]);
  
    return (
      <div>
        <h1>Check Availability</h1>
        <input
          type="date"
          value={selectedDate}
          onChange={e => setSelectedDate(e.target.value)}
        />
        <ul>
          {availableSlots.length > 0 ? (
            availableSlots.map((slot, index) => (
              <li key={index}>{slot}</li>
            ))
          ) : (
            <p>No available slots for the selected date.</p>
          )}
        </ul>
      </div>
    );
  }


export default AvailabilityDisplay  