import { NavLink } from "react-router-dom";
import { FaHome, FaList, FaCalendarAlt, FaSun } from "react-icons/fa";

function Navbar() {

  return (
    <>
    
    <section className="navlinks">
      <NavLink to="/">
      <FaHome />
      <a>Hem</a></NavLink>
      <NavLink to="/alltodos">
      <FaList />
      <a>Alla uppgifter</a></NavLink>
      <NavLink to="/activetodos">
      <FaSun />
      <a>Min dag</a></NavLink>
      <NavLink to="/completedtodos">
      <FaCalendarAlt />
      <a>Kalender</a></NavLink>
      </section>
    </>
  )
}

export default Navbar