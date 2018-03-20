import React, { Component } from 'react';
//import logo from './logo.svg';
//import App from './App.css';
import TodoItem from './TodoItem';

class Todos extends Component {

  render() {
    let TodoItems;
    if(this.props.todos){
      TodoItems = this.props.todos.map(todo => {
        //console.log(project);
        return (
          // the todo we are passing is from above map todo
          <TodoItem key={todo.title} todo={todo}/>

        );
      });
    }
  //  console.log(this.props);
    return (
      <div className="Todos">
      <h3>Latest List</h3>
        {TodoItems}
      </div>
    );
  }
}


export default Todos;
