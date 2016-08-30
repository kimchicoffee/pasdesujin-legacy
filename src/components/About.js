import React from 'react';

const About = () => (
  <div className="container about">
    <div className="row text-center">
      <img className="img-circle" src="https://s.gravatar.com/avatar/7230064ba76d93c707c3f61ad141e4bf?s=200" alt="Sujin Lee" />
      <h3 >Sujin Lee</h3>
      <a href="https://github.com/pasdesujin" className="icons">
        <i className="fa fa-github-square fa-2x" aria-hidden="true"></i>
      </a>
      <a href="https://www.linkedin.com/in/pasdesujin" className="icons">
        <i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
      </a>
      <a href="https://medium.com/@pasdesujin" className="icons">
        <i className="fa fa-medium fa-2x" aria-hidden="true"></i>
      </a>
      <p>
        I am a full-stack software engineer specializing in JavaScript. My experience includes working on technologies such as React and Angular for the front-end, as well as Node/Express, MySQL, and MongoDB on the back-end. I enjoy working with teams in fast paced environments and solving technical challenges
      </p>
    </div>
  </div>
)

export default About;