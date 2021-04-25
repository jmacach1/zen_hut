import React, { Component } from 'react';
import styles from './navbar.module.scss';
import Burger from '../burger/burger'

class NavBar extends Component {
  render() { 
    return (  
      <section className={styles.navbar}>
        <div>
          <Logo/>
        </div>
        <div className={styles.burger_container}>
          <Burger/>
        </div>
      </section>
    );
  }
}

function Logo() {
  return (
    <div className={styles.title}>
      <div className={styles.sprout_icon} >
        <img src="/sprout.svg" alt="sprout"/>
      </div>
      <div className={styles.title_text}>
        <h1>Zen Farms</h1>
      </div>
    </div>
  );
}
 
export default NavBar;