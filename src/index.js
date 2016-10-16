import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import ReactStormpath, {Router} from 'react-stormpath';
import routes from './routes';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

//sets up the SDK for stormpath
ReactStormpath.init();

ReactDOM.render(
  <Router history={browserHistory}>{routes}</Router>,
  document.getElementById('root')
);
