import React from 'react';

const Project = (props) => (
  <div className="row project">
    <div className="col-md-6">
      <img src={props.project.image} alt="project screenshot" className="img-responsive" />
    </div>
    <div className="col-md-6">
      <h4>{props.project.name}</h4>
      <p>{props.project.description}</p>
      <p>Role: {props.project.role}</p>
      <p>Stack: {props.project.stack}</p>
      <a href={props.project.url} role="button" className="btn btn-lg btn-primary">Visit</a>
    </div>
  </div>
)

export default Project;