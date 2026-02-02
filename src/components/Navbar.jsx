import { NavLink } from "react-router-dom";
import { FaHome, FaList, FaCalendarAlt, FaSun } from "react-icons/fa";

function Navbar() {

  return (
    <>
    
    <section className="navlinks">
      <NavLink to="/">
      <FaHome />
      <span>Hem</span></NavLink>
      <NavLink to="/alltodos">
      <FaList />
      <span>Alla uppgifter</span></NavLink>
      <NavLink to="/myday">
      <FaSun />
      <span>Min dag</span></NavLink>
      <NavLink to="/calenderpage">
      <FaCalendarAlt />
      <span>Kalender</span></NavLink>
      </section>
    </>
  )
}

export default Navbar