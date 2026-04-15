import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom" // Use navigate instead of Link for forms
import TicketCard from "../components/TicketCard" // Import your component

const TicketForm = () => {
  const navigate = useNavigate()
  const initialState = { num: "", price: "", rideId: "", date: "" }
  const [formState, setFormState] = useState(initialState)
  const [rides, setRides] = useState([])
  const [tickets, setTickets] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const ridesRes = await axios.get("http://localhost:3001/rides")
        setRides(ridesRes.data.data)

        const ticketsRes = await axios.get("http://localhost:3001/tickets")
        setTickets(ticketsRes.data.data)
      } catch (err) {
        console.error("Error data:", err)
      }
    }
    getData()
  }, [setTickets])

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.post(
        `http://localhost:3001/rides/${formState.rideId}/tickets/new`,
        formState
      )
      setTickets([...tickets, response.data.data])
      setFormState(initialState)

      // Optional: Navigate to the tickets list after creation
      // navigate('/tickets')
    } catch (err) {
      console.error("Error creating ticket:", err)
    }
  }

  return (
    <div className="rides-container">
      <h2>Rides and Their Tickets</h2>
      <form onSubmit={handleSubmit}>
                <label htmlFor="num">Ticket Number:</label>
                
        <input
          type="text"
          name="num"
          onChange={handleChange}
          value={formState.num}
          autoComplete="off"
        />
        <label htmlFor="price">Price:</label>

        <input
          type="number"
          name="price"
          onChange={handleChange}
          value={formState.price}
          autoComplete="off"
        />
        <label htmlFor="rideId">Select Ride:</label>

        <select name="rideId" onChange={handleChange} value={formState.rideId}>

          <option value="" disabled>
            Select a Ride
          </option>

          {rides.map((ride) => (
            <option key={ride._id} value={ride._id}>
              {ride.name}

            </option>
          ))}

        </select>
        <label htmlFor="date">Created Date:</label>

        <input
          type="date"
          name="date"
          onChange={handleChange}
          value={formState.date}
        />
        <button type="submit">Buy the Ticket</button>

      </form>

      {rides.map((ride) => (
        <div key={ride._id} className="ride-section">
          <header className="ride-header">
            <h3>{ride.name}</h3>
          </header>

          <div>
            <TicketCard tickets={tickets} />
          </div>

          <hr />
        </div>
      ))}
    </div>
  )
}

export default TicketForm
