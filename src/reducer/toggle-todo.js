export const toggleTodo = (state, id) => {
  const updatedList = state.map((todo) => {
    if (todo.id === id) {
      return { ...todo, isChecked: !todo.isChecked };
    }
    return todo;
  });

  localStorage.setItem("todolist", JSON.stringify(updatedList));

  return updatedList;
};
