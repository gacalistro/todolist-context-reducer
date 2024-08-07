export const addTodo = (state, description) => {
  const todo = {
    description,
    isChecked: false,
    id: Math.random() * Math.random() * 12097130,
  };

  const updatedList = [...state, todo];

  localStorage.setItem("todolist", JSON.stringify(updatedList));

  return updatedList;
};
