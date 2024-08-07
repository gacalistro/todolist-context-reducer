import { CheckCircle, Circle } from "lucide-react";
import { useTodoContext } from "../context/todo-context";

export function TodoItem({ id, description, isChecked }) {
  const { dispatch } = useTodoContext();

  const handleToggleTodo = () => {
    dispatch({ type: "toggle", id });
  };

  return (
    <li onClick={handleToggleTodo}>
      <span>{description}</span>
      {isChecked ? <CheckCircle /> : <Circle />}
    </li>
  );
}
