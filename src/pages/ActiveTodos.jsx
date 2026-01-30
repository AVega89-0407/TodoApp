import TodoHeader from "../components/TodoHeader";
import TodoList from "../components/TodoList";

function ActiveTodos({ todos, onRemove, onToggle }) {

    
      return (
        <>
        <TodoHeader />
          <TodoList 
        todosArr={todos}
        onRemove={onRemove}
        onToggle={onToggle}/>
          
    
          <p>Antal: {todos.length}</p>
        </>
      );
      
}

export default ActiveTodos