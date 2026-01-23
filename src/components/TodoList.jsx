import TodoItem from "./TodoItem";

function TodoList({ todosArr, onRemove }) {

  return (
    <ul>
      {todosArr.map((todo, index) => {

       return (
       <TodoItem 
       key={index} 
       text={todo} 
       onRemove={() => onRemove(index)}

       />
       )
      })}
    </ul>
  );
}

export default TodoList;