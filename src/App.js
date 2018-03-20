import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import './App.css';
import uuid from 'uuid';
import $ from 'jquery';
import Todos  from './Components/Todos'

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: [],
      todos:[]
    }
  }

getTodos(){
$.ajax({
  url: 'https://jsonplaceholder.typicode.com/todos',
  dataType: 'json',
  cache: false,
  success: function(data){
    this.setState({todos: data}, function(){
      console.log(this.state);
    });
  }.bind(this),
  error: function(xhr, status,err){
    console.log(err);
  }
});
}

getProjects(){
  this.setState({projects:[
     {
       id: uuid.v4(),
        title: 'Business Websites',
        category: 'Web Design'
      },
      {
          id: uuid.v4(),
        title: 'Social App',
        category: 'Mobile Development'
      },
      {
          id: uuid.v4(),
        title: 'Ecommerce Shopping Cart',
        category: 'Web Development'
      }
  ]});
}

componentWillMount(){
  this.getProjects();
  this.getTodos();
}
componentDidMount(){
    this.getTodos();
}


        handleAddProject(project){
            //add it to the state of the main component on tup
            let projects = this.state.projects;
            projects.push(project);
              // than reset it.
            this.setState({projects:projects});
          }

          handleDeleteProject(id){
            let projects = this.state.projects;
            let index = projects.findIndex(x => x.id === id);
            projects.splice(index,1);
            // than reset it.
          this.setState({projects:projects});
            }

  render() {
    // passing the state project[]
    //on tup too project.js <imported Project
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
        <hr/>
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
