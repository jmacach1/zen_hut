import React, { Component } from "react";
import styles from "./quantityPicker.module.scss";

class QuantityPicker extends Component {
  state = {
    quantity: this.props.minimum,
  }

  increase = () => {
    const current = this.state.quantity;
    const final = current + 1;
    this.setState({ quantity: final });
    this.props.onValueChange(final);
  }

  decrease = () => {
    const current = this.state.quantity;
    const final = current - 1;
    if (final < this.props.minimum) return;
    this.setState({ quantity: final });
    this.props.onValueChange(final);
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
