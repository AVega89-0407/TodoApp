import Navigation from "../components/Navigation";
import { FaList, FaCheck, FaClock } from "react-icons/fa";
import Calender from "../components/Calender";

function CalenderPage({ todos }) {
  const all = todos.length;
  const active = todos.filter(t => !t.completed).length;
  const done = todos.filter(t => t.completed).length;

  return (
    <>
    <Navigation />
    <h2>Kalender</h2>
   <section className="widgets">
      <div className="card"><FaList /> Alla: {all}</div>
      <div className="card"><FaClock /> Aktiva: {active}</div>
      <div className="card"><FaCheck /> Klara: {done}</div>
      <div className="card">{<Calender />}</div>
    </section>
    </>
  )
}

export default CalenderPage