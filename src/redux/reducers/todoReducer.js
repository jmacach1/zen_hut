/*
*   Reducer:
*   An arrow function that receives state and action
*   should return a new state
*/

const todoReducer = (state = [], action) => {
  if (action.type === "TODO_APP") {
    const copy = [...state];
    copy.push(action.payload);
    return copy;
  }

  return state;
}

export default todoReducer;