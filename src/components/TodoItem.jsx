function TodoItem({ text, onRemove }) {

  return (
    <li>
      <input type="checkbox" />
      {text}
      <button onClick={onRemove}>X</button>
    </li>
  );
}

export default TodoItem; 