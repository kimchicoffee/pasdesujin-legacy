import React, { Component } from 'react';
import Header from './Header';
import About from './About';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <About />
      </div>
    );
  }
}

export default App;
