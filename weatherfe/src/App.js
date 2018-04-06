import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ClimatesContainer from './components/ClimatesContainer'

class App extends Component {
  

  render() {
    return (
      <div className="App"> 
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to our climate news!</h1>
        </header>
          <ClimatesContainer />
      </div>
    );
  }
}

export default App;
