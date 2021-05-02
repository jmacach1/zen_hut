import React, { Component } from 'react';
import styles from './about.module.scss';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {  
    }
  }

  render() { 
    return ( 
      <div className={styles.about_page}>

        <section className={styles.splash}>
          <div className={styles.splash_inner}>
            <h1>Zen Table</h1>
          </div>
        </section>

        <section className={styles.info_text}>

        </section>
      </div> 
    );
  }
}

export default About;