import { NavLink } from "react-router-dom";
import { FaList, FaCheck, FaClock } from "react-icons/fa";

import TodoHeader from "../components/TodoHeader";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

function MainTodos({ todos, addTodo, removeTodo }) {
  const all = todos.length;
  const active = todos.filter(t => !t.completed).length;
  const completed = todos.filter(t => t.completed).length;

  return (
    <>
    <TodoHeader />
    <TodoForm onAddTodo={addTodo} />
    <TodoList todosArr={todos} onRemove={removeTodo} />
      <section className="navlinks">
      <NavLink to="/alltodos">
      <FaList />
      <a>Alla ({all})</a></NavLink>
      <NavLink to="/activetodos">
      <FaClock />
      <a>Aktiva ({active})</a></NavLink>
      <NavLink to="/completedtodos">
      <FaCheck />
      <a>Klara ({completed})</a></NavLink>
      </section>
    </>
  );
}

export default MainTodos 