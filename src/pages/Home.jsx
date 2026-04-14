//rideList
//clickableRides

import axios from "axios"
import RideCard from "../components/RideCard"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Home = () => {
  const [rides, setRides] = useState([])

  //if the page mounted the rides appears

  useEffect(() => {
    const getRides = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/rides`)

        setRides(response.data.data)
      } catch (err) {
        console.error("Fetch error:", err)
      }
    }
    getRides()
  }, [])

  return (
    <div className="allRides">
      {rides.map((ride) => (
        <Link key={ride._id} to={`/rides/${ride._id}`}>
          {" "}
          <RideCard
            imageURL={ride.imageURL}
            name={ride.name}
            type={ride.type}
            tickets={ride.tickets}
          />
        </Link>
      ))}
    </div>
  )
}
export default Home
