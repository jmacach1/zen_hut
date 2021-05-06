import { combineReducers } from "redux";
import todoReducer from './todoReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({ 
  todo: todoReducer, 
  cart: cartReducer 
});

export default rootReducer;