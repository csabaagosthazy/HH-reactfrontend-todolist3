import React, { Component } from "react";
import "./App.css";

class toDoList3 extends Component {
  state = {
    desc: "",
    date: "",
    todos: [],
    style: { border: "1px solid black" }
  };

  inputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  addTodo = e => {
    e.preventDefault();
    let todo = {
      desc: this.state.desc,
      date: this.state.date,
      id: this.state.todos.length
    };
    this.setState({
      todos: [...this.state.todos, todo]
    });
  };

  handleDelete = i => {
    console.log(i);
    const todos = this.state.todos.filter(todo => todo.id !== i);
    console.log(todos);
    this.setState({ todos: todos });
  };

  render() {
    return (
      <div>
        <div className="App" style={this.state.style}>
          <h2 align="left">Add todos</h2>
          <form onSubmit={this.addTodo}>
            <label>Description: </label>
            <input
              id="desc"
              type="text"
              name="desc"
              onChange={this.inputChange}
            />
            <label>Date:</label>
            <input
              id="date"
              type="date"
              name="date"
              onChange={this.inputChange}
            />
            <input type="submit" value="Add" />
          </form>
        </div>
        <div>
          <table align="center">
            <tbody>
              <tr>
                <th>Description</th>
                <th>Date</th>
              </tr>
              {this.state.todos.map(todo => (
                <tr key={todo.id}>
                  <td>{todo.desc}</td>
                  <td>{todo.date}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => this.handleDelete(todo.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default toDoList3;
