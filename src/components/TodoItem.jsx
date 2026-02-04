import { FaTrashCan } from "react-icons/fa6";

function TodoItem({ text, completed, onRemove, onToggle }) {

  return (
     <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={onToggle}
      />
      <span style={{ textDecoration: completed ? "line-through" : "none" }}>
        {text}
      </span>
      <button onClick={onRemove}><FaTrashCan /></button>
    </li>
  );
}

export default TodoItem; 