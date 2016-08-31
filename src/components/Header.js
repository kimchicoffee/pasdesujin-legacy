import React from 'react';

const Header = () => {
  const sendEmail = () => {
    window.open('mailto:pasdesujin@gmail.com?subject=Job Inquiries','_self');
  };

  return(
  <nav className="navbar navbar-inverse navbar-static-top">
    <div className="container">
      <div className="navbar-header">
        <a className="navbar-brand" href="/">Sujin Lee</a>
      </div>
      <ul className="nav navbar-nav navbar-right">
        <li>
          <a href="#" onClick={sendEmail}>
            Job Inquiries <i className="fa fa-envelope-o fa-lg" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </div>
  </nav>
  );
}

export default Header;