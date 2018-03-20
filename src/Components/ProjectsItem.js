import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

class ProjectItem extends Component {
  deleteProject(){
    this.props.onDelete();
  }

  render() {
    return (
      <li className="Project">
        {this.props.project.title} -
        {this.props.project.category}
        <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>X</a>
      </li>
    );
  }
}


export default ProjectItem;
