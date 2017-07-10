import React, { Component } from 'react';
import { getSenators } from '../services/index';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: 'UT'
    }
    console.log('this.props: ', this.props);
  }
  componentWillMount() {
    this.props.getSenators(this.state.state)
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
function mapStateToProps(state) {
    return {
        senator: state.senators.all,
    }
}
export default connect(mapStateToProps, {getSenators})(App);
