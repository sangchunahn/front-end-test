import React, { Component } from 'react';
import Senators from './Senators/Senators';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Who's my Representative?</h2>
        </div>
        <div>
          <Senators/>
        </div>
      </div>
    );
  }
}

export default App;
