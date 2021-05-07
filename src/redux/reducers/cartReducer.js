import { cartActions } from '../actions';

const cartReducer = (state = [], action) => {
  
  let itemPayload = action.payload;

  switch (action.type) {
    case cartActions.CART_ADD:
      const itemInList = findItemInListById(state, itemPayload);
      if (itemInList === undefined) {
        return [...state, itemPayload]
      }
      itemInList.quantity += itemPayload.quantity;
      itemInList.total = Number(itemInList.total) + Number(itemPayload.total);
      return [...state]
    
    case cartActions.CART_REMOVE:
      return [...state].filter(item => item.title !== itemPayload.title);

    case cartActions.CART_CLEAR: 
      return [];
    
    default:
      return state;
  }
}

function findItemInListById(list, item){
  for (let i of list) {
    if (i.id === item.id) return i;
  }
  return undefined;
}


export default cartReducer;