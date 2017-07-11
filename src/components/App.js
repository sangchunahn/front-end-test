import React, { Component } from 'react';
import Representatives from './Representatives/Representatives';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Who's my Representative?</h2>
        </div>
        <div>
          <Representatives/>
        </div>
      </div>
    );
  }
}

export default App;
