import React, { Component } from 'react';
import styles from './about.module.scss';
import { connect } from 'react-redux';
import { todoActions } from '../../redux/actions';

class About extends Component {
  constructor(props) {
    super(props);
    this.SHOW_EMAIL = "Show Email";
    this.EMAIL = "namaste@zentable.com";
    this.state = {
      emailText: this.SHOW_EMAIL
    }
  }

  render() { 
    return ( 
      <div className={styles.about_page}>

        <section className={styles.splash}>
          <div className={styles.splash_content}>
            <h1>Zen Table</h1>

            <p>Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Quis commodo odio aenean sed adipiscing diam donec.</p>


            <button className={styles.splash_show_email_btn} onClick={this.showEmail}> 
              { this.state.emailText }
            </button>
          </div>
        </section>

        <section className={styles.info_text}>
          <p>
            Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Quis commodo odio aenean sed adipiscing diam donec. Commodo viverra maecenas accumsan lacus vel facilisis volutpat. Ornare lectus sit amet est. Adipiscing elit pellentesque habitant morbi. Cras sed felis eget velit aliquet sagittis id consectetur.
          </p>
          <button onClick={this.props.clearTodo()}> Clear Todo </button>
        </section>
      </div> 
    );
  }

  showEmail = () => {
    const emailText = this.state.emailText === this.SHOW_EMAIL ? this.EMAIL : this.SHOW_EMAIL;
    this.setState({ emailText });
  }
}

export default connect(null, todoActions)(About);