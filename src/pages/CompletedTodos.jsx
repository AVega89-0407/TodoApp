import TodoList from "../components/TodoList";
import TodoHeader from "../components/TodoHeader";
import Navigation from "../components/Navigation";

function CompletedTodos({ todos, onRemove, onToggle }) {

    
      return (
        <>
        <TodoHeader />
        <Navigation />
    
          <TodoList         
        todosArr={todos}
        onRemove={onRemove}
        onToggle={onToggle}/>
          
    
          <p>Antal: {todos.length}</p>
        </>
      );
}

export default CompletedTodos