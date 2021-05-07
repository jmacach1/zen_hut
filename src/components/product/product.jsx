import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './product.module.scss';
import QuantityPicker from './../quantityPicker/quantityPicker';
import { cartActions } from '../../redux/actions';

class Product extends Component {
  constructor(props) {
    super(props);
    this.product = props.product;
    this.product.img_src = 'images/products/' + this.product.image;
    this.minimum = this.product.minimum || 1;
    this.state = {
      quantity: this.minimum,
      total: this.product.price * this.minimum
    }
  }

  render() { 
    return (
      <div id={this.product.id} className={styles.product}>
        <div className={styles.image}>
          <img src={this.product.img_src} alt={this.product.img_src}/>
        </div>

        <div className={styles.title}>
          <h2>{this.product.title}</h2>
        </div>

        <div className={styles.description}>
          <p>Discount :{this.product.discount}</p>
          <p>Stock: {this.product.stock}</p>
          <p>Minimum: {this.minimum} </p>
        </div>
        
        <div className={styles.price}>
          <h3>Price per Item: $ {this.product.price.toFixed(2)}</h3>
          <h3>Total: $ {this.state.total}</h3>
        </div>
        
        <div className={styles.picker}>
          <QuantityPicker onValueChange={this.handleQuantityChange} minimum={this.minimum}/>
        </div>

        <div>
          <button className={styles.checkout_btn} onClick={this.addItemToCart}> 🛒 Add</button>
          <button className={styles.checkout_btn} onClick={this.removeItemFromCart}>
            Remove 
          </button>
        </div>
      </div>
    );
  }

  addItemToCart = () => {
    this.product.quantity = this.state.quantity;
    this.product.total = this.state.total;
    this.props.addToCart(this.product);
  }

  removeItemFromCart = () => {
    this.props.removeFromCart(this.product);
  }

  clearCart = () => {
    this.props.clearCart();
  }

  handleQuantityChange = (quantity) => {
    const total = (this.product.price * quantity).toFixed(2)
    this.setState({ quantity, total });
  }
}
 
export default connect(null, cartActions )(Product);
