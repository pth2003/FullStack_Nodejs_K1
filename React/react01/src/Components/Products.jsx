import React, { Component } from "react";

export default class Products extends Component {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
    console.log("1 . khoi tao");
  }
  componentDidMount = () => {
    console.log("3. componentDidMount");
  };
  componentDidUpdate = (prevProps, prevState) => {
    console.log("4. componentDidUpdate");
    console.log(prevProps, prevState);
  };
  componentWillUnmount = () => {
    console.log("5. componentWillUnmount ");
  };
  handleClick = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };
  render() {
    console.log("2.render");
    return (
      <div>
        <h1> Products</h1>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}
