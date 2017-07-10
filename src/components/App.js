import React, { Component } from 'react';
import Senators from './Senators/Senators';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Who is my Senator or Representative?</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <Senators/>
        </div>
      </div>
    );
  }
}

export default App;
