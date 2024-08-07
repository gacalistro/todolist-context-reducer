import { addTodo } from "./add-todo";
import { initList } from "./init-list";
import { toggleTodo } from "./toggle-todo";

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return addTodo(state, action.description);
    case "toggle":
      return toggleTodo(state, action.id);
    case "init":
      return initList();
  }
};
