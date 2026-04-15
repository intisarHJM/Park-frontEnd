import "./App.css"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
// import ViewRide from "./pages/ViewRide"
// import TicketForm from "./pages/TicketForm"

function App() {
  return (
    <>
      <h1 id="main-title">Central Landing Park</h1>

      <Routes>
        
        <Route path="/rides" element={<Home />} />
        {/* <Route path="/rides/:id" element={<ViewRide />} />
      <Route path="/rides/:rideId/tickets/new" element={<TicketForm />} /> */}
        {/* <Route path="/rides/:id" element={<ViewTicket />} /> */}
      </Routes>
    </>
  )
}

export default App
