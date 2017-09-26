import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Skill from '../components/Skill'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Marc Harrison Professional Resume</h2>
        </div>
        <p className="App-intro">
          Current Skills
        </p>

          <Skill/>
      </div>
    );
  }
}

export default App;
