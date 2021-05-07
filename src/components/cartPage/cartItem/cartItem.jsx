import React from 'react';
import { cartActions } from '../../../redux/actions';
import { useDispatch } from 'react-redux';
import styles from './cartItem.module.scss';

function CartItem(props) {
  const dispatch = useDispatch();
  const removeItemFromCart = () => {
    dispatch(cartActions.removeFromCart(props.item));
  }


  return (
    <div className={styles.cart_item}>
      <div className={styles.cart_item_img_div}>
        <img src={props.item.img_src} alt={"image of" + props.item.title}/>
      </div>
      <div className={styles.cart_item_info_div}>
        <h3>{props.item.title}</h3>
        <p>Quantity: {props.item.quantity}</p>
        <p>Price per Item: $ {Number(props.item.price).toFixed(2)}</p>
        <p>Total: ${Number(props.item.total).toFixed(2)}</p>

        <div className={styles.cart_item_button_div}>
          <button onClick={removeItemFromCart}>Remove</button>
        </div>
      </div>
    </div>
  )
}

export default CartItem;