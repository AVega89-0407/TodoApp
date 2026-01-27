import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
      const [todos,setTodos] = useState([])
    
    
      const [newTodo,setNewTodo] = useState("")
    
//       function handleClickTodo() {
//         setTodos([...todos, newTodo]);
//         setNewTodo("");
    
//       }

      
//   function handleCountTodos() {
//     return todos.length;
//   }

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
    <section className="navlinks">
        <NavLink to="/alltodos"><button>Alla ({handleShowAll()})</button></NavLink>
      <NavLink to="/activetodos"><button>Aktiva ({handleShowActive()})</button></NavLink>
      <NavLink to="/completedtodos"><button>Avklarade ({handleShowCompleted()})</button></NavLink>
      </section>
    </>
  )
}

export default Navbar