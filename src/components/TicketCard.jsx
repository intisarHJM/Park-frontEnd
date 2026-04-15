import axios from "axios"
// import { useNavigate } from "react-router-dom"

const TicketCard = ({ tickets }) => {
  // nav = useNavigate
  const handelDeletCard = async (ticketId) => {
    try {
      await axios.delete(`http://localhost:3001/${ticketId}`)
      // nav("/rides")
    } catch (err) {
      console.error("Error deleting ticket:", err)
    }
  }

  return (
    <div className="tickets-section">
      <div className="tickets-list">
        {tickets.length > 0 ? (
          tickets.map((ticket) => (
            <div key={ticket._id} className="ticket-card">
              <h3>Ticket #: {ticket.num}</h3>
              <p>Price: ${ticket.price}</p>
              <p>Ride ID: {ticket.rideId}</p>
              <p>Created Date:{ticket.date?.split("T")[0]}</p>

              <button
                onClick={() => {
                  handelDeletCard(ticket._id)
                }}
              >
                delete
              </button>
            </div>
          ))
        ) : (
          <p>No tickets found</p>
        )}
      </div>
    </div>
  )
}

export default TicketCard
