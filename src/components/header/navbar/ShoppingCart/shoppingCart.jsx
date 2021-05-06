import React from 'react';
import { connect } from 'react-redux';

function ShoppingCart(props) {
  console.log(props.cart);
  return (
    <div className={"cart"}>
      <h1>  🛒 Items : {props.cart.length}</h1>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}
export default connect(mapStateToProps,null)(ShoppingCart);