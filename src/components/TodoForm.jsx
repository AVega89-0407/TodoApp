import { useState } from 'react'

function TodoForm({ onAddTodo }) {
   const [newTodo,setNewTodo] = useState("")

  function handleSubmit(e) {
    e.preventDefault();

    if (!newTodo.trim()) return;

    onAddTodo(newTodo);
    setNewTodo("");
    
  }

    
  return (
    <>
    <form onSubmit={handleSubmit}>

      <input 
      value={newTodo} 
      onChange={(e) => setNewTodo(e.target.value)}
      placeholder="Skriv din uppgift här"
      type="text"
      />
      

    <button type="submit">Lägg till</button>

    </form>
    </>
  )
}

export default TodoForm