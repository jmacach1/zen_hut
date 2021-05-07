import React, { Component } from 'react';
import styles from './cartPage.module.scss';
import CartItem from './cartItem/cartItem';
import { connect } from 'react-redux';

class CartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
      <div className={styles.cartPage}>
        <div className={styles.cart_item_list}>
          {this.props.cart.map(item => <CartItem item={item}/>)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps, null)(CartPage);