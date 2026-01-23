function TodoItem({ text, done, onRemove }) {

  return (
    <li>
      <input type="checkbox" />
      <span className="checkMark"></span>
      {done ? " (klar)" : ""}
      {text}
      <button onClick={onRemove}>X</button>
    </li>
  );
}

export default TodoItem; 