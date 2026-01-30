function TodoItem({ text, completed, onRemove }) {

  return (
     <li>
      <input
        type="checkbox"
        checked={completed}
      />
      <span style={{ textDecoration: completed ? "line-through" : "none" }}>
        {text}
      </span>
      <button onClick={onRemove}>X</button>
    </li>
  );
}

export default TodoItem; 