import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import Board from './Components/Board'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
          <Board/>

      </div>
    );
  }
}

export default App;
