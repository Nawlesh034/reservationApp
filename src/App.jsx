import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import BookingForm from './component/Booking'
import BookingSummary from './component/BookingSummary';
import AvailabilityDisplay from './component/Availiablity';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Router>
      <Routes>
        <Route path="/" element={<BookingForm />} />
        <Route path="/Availiablity" element={<AvailabilityDisplay />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
