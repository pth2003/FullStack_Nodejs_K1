import React, { Component } from "react";

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  hanldIncrement = () => {
    // cap nhap state
    this.setState({ count: this.state.count + 1 });
  };
  hanldDescrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    console.log("Re-render");
    const { count } = this.state;
    return (
      <div>
        <h1>Count : {count} </h1>
        <button onClick={this.hanldIncrement}>+</button>
        <button onClick={this.hanldDescrement}>-</button>
      </div>
    );
  }
}

// state : hoạt động nội bộ comp
// khi state thay đổi => comp tự động cập nhập => re-render
// Không thay đổi trực tiếp state mà cần phải thông qua hàm có sẵn của react
