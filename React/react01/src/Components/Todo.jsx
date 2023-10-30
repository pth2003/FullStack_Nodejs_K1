import React, { Component } from "react";
import "../assets/style.css";
export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todoList: [],
      form: {
        doName: "",
        prior: "0",
      },
      msg: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { doName, prior } = this.state.form;

    if (doName !== "") {
      const todo = {
        id: this.state.todoList.length + 1,
        name: doName,
        isCompleted: false,
        prior,
      };
      this.setState({
        todoList: [...this.state.todoList, todo],
        form: {
          doName: "",
          prior: "",
        },
      });
    }
  };
  handleChange = (e) => {
    // Update du lieu vao state
    // const data = { ...this.state.form };
    // data[e.target.name] = e.target.value;
    // this.setState({ form: data });
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
  handleCompleted = (id, status) => {
    // const status = e.target.checked;
    this.setState({
      todoList: this.state.todoList.map((todo) => {
        if (id === todo.id) {
          todo.isCompleted = status;
        }
        return todo;
      }),
    });
    // console.log(this);
  };
  render() {
    const { todoList, form } = this.state;
    const { doName, prior } = form;
    return (
      <div>
        <div className="Todo">
          {todoList.map(({ id, name, isCompleted, prior }) => {
            return (
              <div key={id} className={`${isCompleted ? "completed" : ""} `}>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    this.handleCompleted(id, e.target.checked);
                  }}
                />
                <span>{name}</span>
                <small style={{ fontStyle: "italic", marginLeft: "5px" }}>
                  {+prior === 0 ? "Khong uu tien" : "Uu tien"}
                </small>
              </div>
            );
          })}
        </div>
        <hr />
        <form action="" onSubmit={this.handleSubmit}>
          <select name="prior" onChange={this.handleChange} value={prior}>
            <option value="0">Khong uu tien</option>
            <option value="1">Uu tien</option>
          </select>
          <input
            type="text"
            name="doName"
            placeholder="Name..."
            onChange={this.handleChange}
            value={doName}
          />
        </form>
      </div>
    );
  }
}
