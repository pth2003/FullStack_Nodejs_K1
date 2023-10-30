import React, { Component } from "react";
import Products from "./Products";

export default class Category extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }
  handlleToggle = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    return (
      <div>
        {this.state.show && <Products />}
        <button onClick={this.handlleToggle}>Toggle</button>
      </div>
    );
  }
}
