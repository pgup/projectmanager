import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

class TodoItem extends Component {

  render() {
    return (
      <li className="Todo">
        {this.props.todo.title}
        </li>
    );
  }
}

export default TodoItem;
