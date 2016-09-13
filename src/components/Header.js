import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state ={
      text: 'Job Inquiries'
    }
  }

  sendEmail() {
    window.open('mailto:pasdesujin@gmail.com?subject=Job Inquiries','_self');
  }

  handleMouseEnter() {
    this.setState({text:'pasdesujin@gmail.com'})
  }

  handleMouseLeave() {
    this.setState({text: 'Job Inquiries'})
  }

  render() {
    return(
      <nav className="navbar navbar-fixed-top navbar-inverse header">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">Sujin Lee</a>
          </div>
          <ul className="nav navbar-nav">
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#" onClick={this.sendEmail.bind(this)} onMouseEnter={this.handleMouseEnter.bind(this)} onMouseLeave={this.handleMouseLeave.bind(this)}>
                {this.state.text} <i className="fa fa-envelope-o fa-lg" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;