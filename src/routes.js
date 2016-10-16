import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { LoginRoute } from 'react-stormpath';
import App from './components/App';
import About from './components/About';
import Projects from './components/Projects';
import LoginPage from './components/Login';

export default(
  <Route path='/' component={App}>
    <IndexRoute component={About} />
    <LoginRoute path='/login' component={LoginPage} />
    <Route path='/projects' component={Projects} />
  </Route>
);