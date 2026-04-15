//view single ride
//button to view tickets
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import TicketForm from "./TicketForm"

import axios from "axios"

const ViewRide = () => {
  const [ride, setRide] = useState("")

  const { id } = useParams()
  const nav = useNavigate()
  useEffect(() => {
    const getRide = async () => {
      try {
        let response = await axios.get(`http://localhost:3001/rides/${id}`)
        setRide(response.data.data)
        console.log(ride)
      } catch (error) {}
    }

    getRide()
  }, [])

  const handelDeletCard = async (ticketId) => {
    try {
      await axios.delete(`http://localhost:3001/rides/${ticketId}`)
      nav("/rides")
    } catch (err) {
      console.error("Error deleting ticket:", err)
    }
  }

  return (
    <div className="rideDetails">
      <h2>{ride.name}</h2>

      <img
        src={ride.imageURL}
        alt={`${ride.name} picture`}
        className="ridePic"
      />
      <h3>{ride.type}</h3>
      <Link to={`/rides/${id}/tickets/new`}> Add ticket</Link>
      <button
        onClick={() => {
          handelDeletCard(id)
        }}
      >
        delete
      </button>
    </div>
  )
}

export default ViewRide
