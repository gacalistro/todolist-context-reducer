export function initList() {
  return JSON.parse(localStorage.getItem("todolist")) ?? [];
}
