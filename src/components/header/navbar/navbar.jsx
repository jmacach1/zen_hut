import React from 'react';
import styles from './navbar.module.scss';
import Burger from './burger/burger'
import Logo from './logo/logo'
import ShoppingCartIcon from './shoppingCartIcon/shoppingCartIcon';

function NavBar() {
  return (  
    <header className={styles.navbar}>
      <div>
        <Logo/>
      </div>
      <div>
        <ShoppingCartIcon/>
      </div>
      <div className={styles.burger_container}>
        <Burger/>
      </div>
    </header>
  );
}
 
export default NavBar;