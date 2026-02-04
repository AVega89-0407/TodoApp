import TodoItem from "./TodoItem";

function TodoList({ todosArr, onRemove, onToggle }) {
  return (
    <ul>
      {todosArr.map(todo => (
        <TodoItem 
          key={todo.id} 
          text={todo.text} 
          completed={todo.completed}
          onRemove={() => onRemove(todo.id)}
          onToggle={() => onToggle(todo.id)}
        />
      ))}
    </ul>
  );
}

export default TodoList;