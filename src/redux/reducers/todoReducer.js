/*
*   Reducer:
*   An arrow function that receives state and action
*   should return a new state
*/
import { todoActions } from '../actions';

const todoReducer = (state = [], action) => {
  
  let stateCopy;
  switch (action.type) {
    case todoActions.TODO_ADD:
      stateCopy = [...state];
      stateCopy.push(action.payload);
      return stateCopy;
    
    case todoActions.TODO_REMOVE: 
      stateCopy = [...state];
      stateCopy = stateCopy.filter(todo => todo !== action.payload);
      return stateCopy;

    case todoActions.TODO_CLEAR: 
      return [];
    
    default:
      return state;
  }
}

export default todoReducer;