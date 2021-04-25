import React, { Component } from 'react';
import styles from './product.module.scss';
import QuantityPicker from './../quantityPicker/quantityPicker';

class Product extends Component {

  // id: "5f40a6baac77a903d8f682c6",
  // price: 12.32,
  // stock: 13,
  // title: "Cabbage",
  // image: "img-1.jpg",
  // discount: 5,
  // category: "Vegetable",

  constructor(props) {
    super(props);
    this.product = props.product;
    console.log(this.product);
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
