import { Link } from "react-router-dom"

const Button = () => {
  return (
    <Link to="/rides" className="main-btn">
      <button type="button">View Rides</button>
    </Link>
  )
}

export default Button
