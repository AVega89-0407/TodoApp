import Navbar from "../components/Navbar";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

function SideBar({ todos, addTodo, removeTodo }) {
  return (
    <>
    <div>
    
      <Navbar todos={todos} />
      <TodoForm onAddTodo={addTodo} />
       <TodoList todosArr={todos} onRemove={removeTodo} />
      </div>
    </>
  );
}

export default SideBar;
