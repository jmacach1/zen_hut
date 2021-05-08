import React, { Component } from 'react';
import styles from './cartPage.module.scss';
import CartItem from './cartItem/cartItem';
import { connect } from 'react-redux';

class CartPage extends Component {
  constructor(props) {
    super(props);
    this.state = { }
  }

  render() {
    if (this.props.cart.length === 0) {
      return (
        <div className={styles.cartPage}>
          <div className={styles.empty_cart_div}>
            <h3>Your cart is empty</h3>
          </div>
        </div>
      );
    }

    const itemTotals = this.props.cart.map(item => item.total);
    const cartTotal = itemTotals.reduce((cartTotal, itemTotal) => cartTotal + itemTotal, 0);
    return (  
      <div className={styles.cartPage}>
        <div className={styles.cart_item_list}>
          {this.props.cart.map(item => <CartItem key={item.id} item={item}/>)}
        </div>
        <div className={styles.cart_item_total}>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price (Item)</th>
                <th>Total (Item)</th>
              </tr>
            </thead>
            <tbody>
              {this.props.cart.map(item => (
                <tr>
                  <td>{item.title}</td>
                  <td>{item.quantity}</td>
                  <td>${Number(item.price).toFixed(2)}</td>
                  <td>${Number(item.total).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr> 
                <td></td>
                <td></td>
                <td>
                  <h3>Total</h3>
                </td>
                <td>
                  <h3>$ {cartTotal.toFixed(2)}</h3>
                </td>
              </tr>
            </tfoot>
          </table>
          <div>
            
          </div>
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