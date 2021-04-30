import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './burger.module.scss';

class Burger extends Component {
  componentDidMount() {
    this.menu =  document.getElementById(styles.menu_div);
    this.burgerIcon = document.getElementById(styles.burger_icon);
  }

  openMenu = () => {
    this.menu.classList.toggle(styles.open);
    this.burgerIcon.classList.toggle(styles.change);
  }

  render() { 
    return ( 
      <div  className={styles.burger}>
        <div id={styles.burger_icon} className={styles.burger_icon} onClick={this.openMenu}>
          <div className={styles.bar1}/>
          <div className={styles.bar2}/>
          <div className={styles.bar3}/>
        </div>
        <div id={styles.menu_div} className={styles.menu_div}>
          <nav className={styles.nav}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/catalog">Catalog</Link>
            <Link to="/todo">Todo</Link>
          </nav>
        </div>
      </div> 
    );
  }
}
 
export default Burger;
