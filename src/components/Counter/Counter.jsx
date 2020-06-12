import React, { Component } from "react";
import PropTypes from "prop-types";

import './Counter.scss';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.productQuantity };
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  increase(e) {
    this.setState(
      prevState => ({
        value: prevState.value + 1
      }),
      () => {
        this.props.updateQuantity(this.state.value);
      }
    );
    e.preventDefault();
  }

  decrease(e) {
    e.preventDefault();
    if (this.state.value <= 1) {
      return this.state.value;
    } else {
      this.setState(
        prevState => ({
          value: prevState.value - 1
        }),
        () => {
          this.props.updateQuantity(this.state.value);
        }
      );
    }
  }

  feed() {
    this.setState(
      {
        value: this.refs.feedQty.value
      },
      () => {
        this.props.updateQuantity(this.state.value);
      }
    );
  }

  resetQuantity() {
    this.setState({
      value: 1
    });
  }

  render() {
    return (
      <div className="step-input">
        <a href="/#" className="decrease" onClick={this.decrease}>
          –
        </a>
        <input
          ref="feedQty"
          type="number"
          className="quantity"
          value={this.state.value}
          onChange={this.feed.bind(this)}
        />
        <a href="/#" className="increase" onClick={this.increase}>
          +
        </a>
      </div>
    );
  }
}

Counter.propTypes = {
  value: PropTypes.number
};

export default Counter;
