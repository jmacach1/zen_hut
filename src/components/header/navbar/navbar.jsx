import React from 'react';
import styles from './navbar.module.scss';
import Burger from './burger/burger'
import Logo from './logo/logo'
import ShoppingCart from './ShoppingCart/shoppingCart';

function NavBar() {
  return (  
    <header className={styles.navbar}>
      <div>
        <Logo/>
      </div>
      <div>
        <ShoppingCart/>
      </div>
      <div className={styles.burger_container}>
        <Burger/>
      </div>
    </header>
  );
}
 
export default NavBar;