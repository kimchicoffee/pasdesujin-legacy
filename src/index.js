import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>{routes}</Router>,
  document.getElementById('root')
);
