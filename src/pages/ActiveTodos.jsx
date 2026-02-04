import Navigation from "../components/Navigation";
import TodoList from "../components/TodoList";

function ActiveTodos({ todos, removeTodo, onToggle }) {

    
      return (
        <>
        <Navigation />
          <TodoList 
        todosArr={todos}
        onRemove={removeTodo}
        onToggle={onToggle}/>
          
    
          <p>Antal: {todos.length}</p>
        </>
      );
      
}

export default ActiveTodos