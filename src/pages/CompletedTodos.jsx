import { useState } from "react";
import TodoList from "../components/TodoList";
import TodoHeader from "../components/TodoHeader";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function CompletedTodos() {
      const navigate = useNavigate();
    
      const [todos,setTodos] = useState([
        "Träffa kompis",
        "Kalas",
        "Aw"
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
    
      return (
        <>
        <button onClick={() => navigate('/')}>Back</button>
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
        <Navbar />
        </>
      );
}

export default CompletedTodos