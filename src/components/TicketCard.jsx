const TicketCard= ({ tickets }) => {

  return (
    <div className="tickets-section">
      <div className="tickets-list">
        {tickets.length > 0 ? (
          tickets.map((ticket) => (
            <div key={ticket._id} className="ticket-card">
              <h3>Ticket #: {ticket.num}</h3>
              <p>Price: ${ticket.price}</p>
              <p>Ride ID: {ticket.rideId}</p>
              <p>Created Date:{ticket.date?.split('T')[0]}</p>
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
