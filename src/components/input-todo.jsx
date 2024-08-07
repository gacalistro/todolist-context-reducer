import { useState } from "react";
import { PlusCircle } from "lucide-react";
import { useTodoContext } from "../context/todo-context";

export function InputTodo() {
  const [todoInput, setTodoInput] = useState("");

  const { dispatch } = useTodoContext();

  const addTodo = (event) => {
    event.preventDefault();

    if (todoInput.trim().length > 0) {
      dispatch({ type: "add", description: todoInput });
      setTodoInput("");
    }
  };

  return (
    <form onSubmit={addTodo}>
      <input
        type="text"
        placeholder="defina uma tarefa para hoje.."
        onChange={(event) => setTodoInput(event.target.value)}
        value={todoInput}
      />
      <button type="submit">
        <PlusCircle />
      </button>
    </form>
  );
}
