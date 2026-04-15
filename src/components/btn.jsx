import { useNavigate } from "react-router-dom"

const btn = () => {
  return (
    <button onClick={() => navigate(`../pages/Home.jsx`)}>View Rides</button>
  )
}
export default btn
