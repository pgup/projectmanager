import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import uuid from 'uuid';
import ProjectsItem from './ProjectsItem'

class AddProjects extends Component {
  constructor(){
    super();
    this.state = {
      newProject:{}
    }
  }


  static defaultProps ={
    categories:['Web Design','Web Development','Mobil Development']
  }



handleSubmit(e){
  if(this.refs.title.value === ''){
    alert('Title is required');
  } else {
    this.setState({newProject:{
       id: uuid.v4(),
      title: this.refs.title.value,
      category: this.refs.category.value
    }}, function() {

      this.props.addProject(this.state.newProject)

    });

  }

  e.preventDefault();
}


  render() {

    let categoriesOptions = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>
    });
    return (
      <div>
        <h3>Add Project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title</label><br/>
            <input type="text" ref="title"/>
          </div>
          <div>
            <label>category</label><br/>
            <select ref="category">
            {categoriesOptions}
            </select>
          </div>
          <br/>
          <input type="submit" value="Submit"/>
          <br/>
        </form>
      </div>
    );
  }
}

export default AddProjects;
