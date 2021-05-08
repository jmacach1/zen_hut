import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './shoppingCartIcon.module.scss';

function ShoppingCartIcon(props) {
  return (
    <div className={styles.ShoppingCartIcon}>
        <h1> 
          <Link style={{ textDecoration: 'none', color: 'white' }} to="/cart">
            🛒 {props.cart.length}
          </Link>
        </h1>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}
export default connect(mapStateToProps)(ShoppingCartIcon);