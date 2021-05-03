/**
 * Action:
 * An arrow fn that returns an object
 * object should contain a type and payload (optional)
 */

export const addTodo = (todoText) => {
  return {
    type: "TODO_ADD",
    payload: todoText
  }
}