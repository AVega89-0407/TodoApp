import { NavLink } from "react-router-dom";

function Navbar({ todos }) {
  const all = todos.length;
  const active = todos.filter(t => !t.completed).length;
  const completed = todos.filter(t => t.completed).length;
  return (
    <>
    
    <section className="navlinks">
      <NavLink to="/"><a>Min dag</a></NavLink>
      <NavLink to="/alltodos"><a>Alla ({all})</a></NavLink>
      <NavLink to="/activetodos"><a>Aktiva ({active})</a></NavLink>
      <NavLink to="/completedtodos"><a>Klara ({completed})</a></NavLink>
      </section>
    </>
  )
}

export default Navbar