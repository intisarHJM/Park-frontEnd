import { useState } from "react"
import { useNavigate } from "react-router-dom"

const RideCard = ({ name, imageURL, type, tickets }) => {
  const navigate = useNavigate()

  return (
    <div className="rideCard">
      <h3>{name}</h3>
      <img src={imageURL} alt={name} />
      <h3>type: {type}</h3>

      <ul id="tickets">
        {tickets.map((ticket) => (
          <li key={ticket.id}>
            {ticket.name}
            {ticket.num}
            {ticket.price}
            {ticket.date}
          </li>
        ))}
      </ul>
      {/* /tickets ot /${ride.tickets} */}
      <button onClick={() => navigate(`/rides/${ride._id}/${ride.tickets}`)}>
        Buy Tickets
      </button>
    </div>
  )
}

export default RideCard
