import React, { Component } from 'react';
import ProductService from '../../services/productService';
import Product from '../product/product';
import styles from './catalog.module.scss';
import { connect } from 'react-redux';
import { cartActions } from '../../redux/actions';

class Catalog extends Component {
  constructor(props) {
    super(props);
    this.ALL = "all";
    this.state = {  
      catalog: [],
      catagories: [],
      selected: this.ALL
    }
  }

  async componentDidMount() {
    const productService = new ProductService();
    const catalog = productService.getData();
    
    // const catalog = await productService.getCatalog();
    
    const catagories = new Set(catalog.map(product => product.category));
    
    this.setState({
      catalog: catalog,
      catagories : [...catagories, this.ALL]
    });
  }

  selectCatagory = (e) => {
    this.setState({selected : e.target.dataset.catagory});
  }

  filterByCatagory() {    
    if (this.state.selected === this.ALL ) return [...this.state.catalog];
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
 
export default connect(null, cartActions)(Catalog);

