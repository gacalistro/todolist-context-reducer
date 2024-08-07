import { useTodoContext } from "./context/todo-context";
import { InputTodo } from "./components/input-todo";
import { TodoItem } from "./components/todo-item";

export function App() {
  const { state } = useTodoContext();

  return (
    <>
      <header>
        <h1>Todolist</h1>

        <div>
          <span>
            {state.filter((todo) => todo.isChecked).length} / {state.length}
          </span>
          <span>concluídas</span>
        </div>
      </header>

      <main>
        <InputTodo />

        <ul>
          {state.map((todo) => (
            <TodoItem key={todo.id} {...todo} />
          ))}
        </ul>
      </main>
    </>
  );
}
