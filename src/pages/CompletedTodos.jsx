import TodoList from "../components/TodoList";
import Navigation from "../components/Navigation";

function CompletedTodos({ todos, removeTodo , onToggle }) {

    
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

export default CompletedTodos