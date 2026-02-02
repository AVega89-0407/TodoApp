import Navigation from "../components/Navigation";
import TodoHeader from "../components/TodoHeader";
import TodoList from "../components/TodoList";

function ActiveTodos({ todos, onRemove, onToggle }) {

    
      return (
        <>
        <Navigation />
          <TodoList 
        todosArr={todos}
        onRemove={onRemove}
        onToggle={onToggle}/>
          
    
          <p>Antal: {todos.length}</p>
        </>
      );
      
}

export default ActiveTodos