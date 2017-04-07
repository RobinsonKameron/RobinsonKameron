import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Header from './Parts/Header';
import About from './About/About';
import Projects from './Projects/Projects';
import Who from './Parts/Who';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render () {
    return (
      <Router>
        <div className='App'>
          <Header />
          <Switch>
            <Route exact path='/' component={About} />
            <Route path='/who' component={Who} />
            <Route path='/projects' component={Projects} />
            <Route component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
