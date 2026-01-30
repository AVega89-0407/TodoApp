import TodoItem from "./TodoItem";

function TodoList({ todosArr }) {

  return (
    <ul>
      {todosArr.map((todo, index) => {

       return (
       <TodoItem 
       key={index} 
       text={todo.text} 
       />
       )
      })}
    </ul>
  );
}

export default TodoList;