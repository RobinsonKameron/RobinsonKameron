import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Header from './Parts/Header';
import About from './About/About';
import Projects from './Projects/Projects';
import Who from './Parts/Who';
import './App.css';

class App extends Component {
  render () {
    return (
      <Router>
        <div className='App'>
          <Header />

          <Switch>
            <Route exact path='/' component={null} render={() => (<Redirect to='/about' /> )} />
            <Route exact path='/about' component={About} />
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
