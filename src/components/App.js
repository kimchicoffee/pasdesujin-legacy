import React, { Component } from 'react';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Footer from './Footer';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <About />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;
