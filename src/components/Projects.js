import React from 'react';
import Project from './Project';
import projectInfo from '../projectInfo';

const Projects = () => (
  <div className="container">
    <h3 className="text-center">Projects</h3>
      { projectInfo.map((project, i) =>
        <Project project={project} key={i}/>
      )}
  </div>
)

export default Projects;