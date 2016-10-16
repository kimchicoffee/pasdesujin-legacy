import React, { Component } from 'react';
import { RegistrationForm, LoginForm } from 'react-stormpath';

class LoginPage extends Component {
  render() {
    return (
      <div className="container main">
        <div className="row">
          <div className="col-xs-12">
            <h3>Login</h3>
            <hr />
          </div>
        </div>
        <LoginForm />
        <div className="row">
          <div className="col-xs-12">
            <h3>SignUp</h3>
            <hr />
          </div>
        </div>
        <RegistrationForm />
      </div>
    );
  }
}

export default LoginPage;