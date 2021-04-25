import React, { Component } from "react";
import styles from "./quantityPicker.module.scss";

class QuantityPicker extends Component {
  state = {
    quantity: 1,
  }

  increase = () => {
    const current = this.state.quantity;
    this.setState({ quantity: current + 1 });
  }

  decrease = () => {
    const current = this.state.quantity;
    const final = current > 0 ? current - 1 : 0;
    this.setState({ quantity: final });
  }

  render() {
    return (
      <div className={styles.quantityPicker}>
        <button onClick={this.increase}>+</button>
        <label>{this.state.quantity}</label>
        <button onClick={this.decrease}>-</button>
      </div>
    );
  }
}

export default QuantityPicker;
