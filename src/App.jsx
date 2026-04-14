import "./App.css"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
// import ViewRide from "./pages/ViewRide"
// import TicketForm from "./pages/TicketForm"
import Nav from "./components/Nav"

function App() {
  return (
    <>
      <h1 id="main-title">Central Landing Park</h1>
      <Nav />
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
