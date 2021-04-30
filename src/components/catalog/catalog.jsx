import React, { Component } from 'react';
import ProductService from '../../services/productService';
import Product from '../product/product';
import styles from './catalog.module.scss';

class Catalog extends Component {
  constructor(props) {
    super(props);
    this.ALL = "all";
    this.state = {  
      catalog: [],
      catagories: [],
      selected: ""
    }
  }

  componentDidMount() {
    const productService = new ProductService;
    const products = productService.getData();
    const catagories = new Set(products.map(product => product.category));
    
    this.setState({
      catalog: products,
      catagories : [...catagories, this.ALL],
      selected: this.ALL 
    });
  }

  selectCatagory = (e) => {
    this.setState({selected : e.target.dataset.catagory});
  }

  filterByCatagory() {    
    if (this.state.selected == this.ALL ) return [...this.state.catalog];
    return this.state.catalog.filter(product => product.category === this.state.selected);
  }

  render() {
    const productsToShow = this.filterByCatagory();
    console.log(productsToShow)
    return (
      <div>
        <div className={styles.filter_controls}>
          {this.state.catagories.map(catagory => (
            <button key={catagory} 
              className={styles.filter_btn}
              data-catagory={catagory} onClick={this.selectCatagory}>
              {catagory}
            </button>
          ))}
        </div>
        <div className={styles.catalog}>
          {productsToShow.map(product => (<Product key={product.id} product={product} />))};
        </div>
      </div> 
    );
  }
}
 
export default Catalog;

