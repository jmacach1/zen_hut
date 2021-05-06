import { cartActions } from '../actions';

const cartReducer = (state = [], action) => {
  
  let itemPayload = action.payload;

  switch (action.type) {
    case cartActions.CART_ADD:
      const cart = [...state].filter(item => item.title !== itemPayload.title);
      cart.push(itemPayload);
      return cart;
    
    case cartActions.CART_REMOVE:
      return [...state].filter(item => item.title !== itemPayload.title);

    case cartActions.CART_CLEAR: 
      return [];
    
    default:
      return state;
  }
}


export default cartReducer;