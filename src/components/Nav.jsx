import { Link } from "react-router-dom"
const Nav = () => {
  return (
    <header>
      <nav>
        <h2 style={{ color: "white" }}>Time to Enjoy</h2>
        <Link to="/rides">Pick a Ride</Link>
      </nav>
    </header>
  )
}
export default Nav
