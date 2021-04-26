import React, { Component } from 'react';
import styles from './product.module.scss';
import QuantityPicker from './../quantityPicker/quantityPicker';

class Product extends Component {
  constructor(props) {
    super(props);
    this.product = props.product;
    this.product.img_src = 'images/products/' + this.product.image;
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
          <p>
            stock: {this.product.stock} 
          </p>
        </div>
        
        <div className={styles.description}>
          <p>
            discount :{this.product.discount} 
          </p>
        </div>
        
        <div className={styles.price}>
          <h3>$ {this.product.price}</h3>
        </div>
        
        <div className={styles.picker}>
          <QuantityPicker/>
        </div>
      </div>
    );
  }
}
 
export default Product;
