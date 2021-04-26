import React, { Component } from 'react';
import ProductService from '../../services/productService';
import Product from '../product/product';
import styles from './catalog.module.scss';

class Catalog extends Component {
  state = {  
    catalog: []
  }

  componentDidMount() {
    const productService = new ProductService;
    const products = productService.getData();
    this.setState({
      catalog: products
    });
  }

  render() {
    return ( 
      <div className={styles.catalog}>
        {this.state.catalog.map(product => (<Product product={product} />))};
      </div>
    );
  }
}
 
export default Catalog;