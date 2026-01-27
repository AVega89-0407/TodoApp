import { useState } from 'react'
import TodoList from "../components/TodoList";

function TodoForm() {
  const [todos,setTodos] = useState([])


  const [newTodo,setNewTodo] = useState("")

  function handleClickTodo(e) {
    e.preventDefault();
    setTodos([...todos, newTodo]);
    setNewTodo("");

  }

    function handleRemoveTodo(indexToRemove) {  
    setTodos(todos.filter((_, index) => index !== indexToRemove));
  }

//   function handleCountTodos() {
//     return todos.length;
//   }

    
  return (
    <>
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

    </>
  )
}

export default TodoForm