import TodoList from "../components/TodoList";


function AllTodos({ todos, onRemove, onToggle }) {

  return (
    <>

      <TodoList todosArr={todos}
        onRemove={onRemove}
        onToggle={onToggle}/>
      

      <p>Antal: {todos.length}</p>
    </>
  );
}

export default AllTodos;