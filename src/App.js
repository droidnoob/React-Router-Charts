import React, { Component } from 'react';
import logo from './logo.svg';
import logo2 from './logo2.svg';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Hello, {this.props.name==''?'World':this.props.name[1]} and save to reload.
        </p>
       <img src={logo2} className="App-logo" width="500px" height="500px"/>
      </div>
    );
  }
}

export default App;
