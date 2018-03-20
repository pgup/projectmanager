import React, { Component } from 'react';
//import logo from './logo.svg';
//import App from './App.css';
import ProjectsItem from './ProjectsItem';

class Projects extends Component {


  deleteProject(id){
    this.props.onDelete(id);
  }

  render() {
    let projectItems;
    if(this.props.projects){
      projectItems = this.props.projects.map(project => {

        return (

          <ProjectsItem onDelete={this.deleteProject.bind(this)} key={project.title} project={project}/>

        );
      });
    }
    console.log(this.props);
    return (
      <div className="Projects">
      <h3>Latest projects</h3>
        {projectItems}
      </div>
    );
  }
}


export default Projects;
