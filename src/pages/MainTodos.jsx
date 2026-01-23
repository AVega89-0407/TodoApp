import { useState } from "react";
import TodoList from "../components/TodoList";
import Calender from '../components/Calender';
import { useNavigate } from "react-router-dom";
import TodoHeader from "../components/TodoHeader";

function MainTodos() {
    const navigate = useNavigate();

  const [todos,setTodos] = useState([])


  const [newTodo,setNewTodo] = useState("")

  function handleClickTodo() {
    setTodos([...todos, newTodo]);
    setNewTodo("");

  }

    function handleRemoveTodo(indexToRemove) {  
    setTodos(todos.filter((_, index) => index !== indexToRemove));
  }

//   function handleCountTodos() {
//     return todos.length;
//   }

  function handleShowAll() {


    navigate('/alltodos', {
        state: {
        todos
        }
    })    
  }

  function handleShowActive() {
    return todos.length;
  }

  function handleShowCompleted() {
    return todos.length;
  }

  return (
    <>
    <TodoHeader />

    <Calender />

      <form>
      <input 
      value={newTodo} 
      onChange={(e) => setNewTodo(e.target.value)}
      placeholder="Skriv in din todo här"
      type="text"
      />
      

    <button onClick={handleClickTodo}>Lägg till</button>
    </form>  

      <TodoList todosArr={todos} onRemove={handleRemoveTodo}/>
      

      {/* <p>Antal: {handleCountTodos()}</p> */}

      <button>Alla ({handleShowAll()})</button>
      <button>Aktiva ({handleShowActive()})</button>
      <button>Avklarade ({handleShowCompleted()})</button>
    </>
  );
}

export default MainTodos 