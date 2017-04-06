import React, { Component } from 'react';
import Header from './Parts/Header';
import About from './About/About';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Header />
        <About />
      </div>
    );
  }
}

export default App;
