import TodoList from "../components/TodoList";
import Navigation from "../components/Navigation";
import TodoForm from "../components/TodoForm";
import Calender from "../components/Calender";

import { FaList, FaCheck, FaClock } from "react-icons/fa";
import { NavLink } from "react-router-dom";


function AllTodos({ todos = [], addTodo, removeTodo }) {
  const all = todos.length;
  const active = todos.filter(t => !t.completed).length;
  const completed = todos.filter(t => t.completed).length;

  return (
    <>
  
      <Navigation />

      <h3>Alla uppgifter</h3>

      <TodoForm onAddTodo={addTodo} />
      <TodoList todosArr={todos} onRemove={removeTodo} />

      <section className="navtodos">
        <NavLink to="/alltodos"
        className={({ isActive }) => isActive ? "active" : ""}>
          <FaList />
          <span>Alla ({all})</span>
        </NavLink>

        <NavLink to="/activetodos">
          <FaClock />
          <span>Aktiva ({active})</span>
        </NavLink>

        <NavLink to="/completedtodos">
          <FaCheck />
          <span>Klara ({completed})</span>
        </NavLink>
      </section>
    </>
  );
}

export default AllTodos;