import "./App.css"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import { useState } from 'react'
import TicketForm from './pages/TicketForm'
import TicketCard from './components/TicketCard'
// import ViewRide from "./pages/ViewRide"
// import TicketForm from "./pages/TicketForm"
import btn from "./components/btn.jsx"

function App() {

  const [tickets, setTickets] = useState([])
  return (
    <>
      <h1 id="main-title">Central Landing Park</h1>
      <br />
      <btn />
      <Routes>
        {/* <Route path="/" element={<Btn />} /> */}
        <Route path="/rides" element={<Home />} />
        {/* <Route path="/rides/:id" element={<ViewRide />} />
      <Route path="/rides/:rideId/tickets/new" element={<TicketForm />} /> */}
        {/* <Route path="/rides/:id" element={<ViewTicket />} /> */}
      </Routes>
    </>
  )
}

export default App
