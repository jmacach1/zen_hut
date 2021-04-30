import React, { Component } from 'react';
import styles from './product.module.scss';
import QuantityPicker from './../quantityPicker/quantityPicker';

class Product extends Component {
  constructor(props) {
    super(props);
    this.product = props.product;
    this.product.img_src = 'images/products/' + this.product.image;
    this.minimum = this.product.minimum || 1;
    this.state = {
      quantity: this.minimum
    }
  }

  render() { 
    // console.log(this.product.title, this.props.minimum, this.minimum);
    const total = (this.product.price * this.state.quantity).toFixed(2);
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
          <p>Minimum: {this.product.minimum} </p>
        </div>
        
        <div className={styles.price}>
          <h3>Price per Item: $ {this.product.price.toFixed(2)}</h3>
          <h3>Total: $ {total}</h3>
        </div>
        
        <div className={styles.picker}>
          <QuantityPicker onValueChange={this.handleQuantityChange} minimum={this.minimum}/>
        </div>

        <div>
          <button className={styles.checkout_btn}> 🛒 Add</button>
        </div>
      </div>
    );
  }

  handleQuantityChange = (quantity) => {
    this.setState({ quantity : quantity });
  }
}
 
export default Product;
