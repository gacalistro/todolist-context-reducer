import { createContext, useContext, useReducer } from "react";
import { initList } from "../reducer/init-list";
import { todoReducer } from "../reducer/todo-reducer";

const TodoContext = createContext({});

export const TodoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, [], initList);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);
