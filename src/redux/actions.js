/**
 * Action:
 * An arrow fn that returns an object
 * object should contain a type and payload (optional)
 */

/* * todo actions * */
const TODO_ADD = "TODO_ADD";
const TODO_REMOVE = "TODO_REMOVE";
const TODO_CLEAR = "TODO_CLEAR";

const addTodo = (todoText) => {
  return {
    type: TODO_ADD,
    payload: todoText
  }
}

const removeTodo = (todoText) => {
  return {
    type: TODO_REMOVE,
    payload: todoText
  }
}

const clearTodo = () => {
  return {
    type: TODO_CLEAR
  }
}

export const todoActions = {
  TODO_ADD,
  TODO_REMOVE,
  TODO_CLEAR,
  addTodo,
  removeTodo,
  clearTodo 
}

/* * cart actions * */

const CART_ADD = "CART_ADD";
const CART_REMOVE = "CART_REMOVE";
const CART_CLEAR = "CART_CLEAR";

const addToCart = (item) => {
  return {
    type: CART_ADD,
    payload: item
  }
}

const removeFromCart = (item) => {
  return {
    type: CART_REMOVE,
    payload: item
  }
}

const clearCart = () => {
  return {
    type: CART_CLEAR
  }
}

export const cartActions = {
  CART_ADD, CART_REMOVE, CART_CLEAR, addToCart, removeFromCart, clearCart
}

