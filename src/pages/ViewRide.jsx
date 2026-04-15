//view single ride
//button to view tickets
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import TicketForm from "./TicketForm"

import axios from "axios"

const ViewRide = () => {
  const [ride, setRide] = useState("")

  const { id } = useParams()

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
    </div>
  )
}

export default ViewRide
