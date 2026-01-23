import { useState } from "react";
import TodoList from "../components/TodoList";
import TodoHeader from "../components/TodoHeader";

function AllTodos() {

  const [todos,setTodos] = useState([
    "lära mig React",
    "åka å handla",
    "lära oss props"
  ])


  const [newTodo,setNewTodo] = useState("")

  function handleClickTodo() {
    setTodos([...todos, newTodo]);
    setNewTodo("");

  }

    function handleRemoveTodo(indexToRemove) {  
    setTodos(todos.filter((_, index) => index !== indexToRemove));
  }

  function handleCountTodos() {
    return todos.length;
  }

  function handleShowAll() {
    return todos.length;    
  }

  function handleShowActive() {
    return todos.length;
  }

  function handleShowCompleted() {
    return todos.length;
  }

  return (
    <>
    <button onClick={() => navigate(-1)}>Back</button>
    <TodoHeader />
    

      <input 
      value={newTodo} 
      onChange={(e) => setNewTodo(e.target.value)}
      placeholder="Skriv in din todo här"
      type="text"
      />

    <button onClick={handleClickTodo}>Lägg till</button>

      <TodoList todosArr={todos} onRemove={handleRemoveTodo}/>
      

      <p>Antal: {handleCountTodos()}</p>


      <button>Alla ({handleShowAll()})</button>
      <button>Aktiva ({handleShowActive()})</button>
      <button>Avklarade ({handleShowCompleted()})</button>
    </>
  );
}

export default AllTodos;