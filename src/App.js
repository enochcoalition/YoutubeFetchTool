import React, { Component } from 'react';
import logo from './EnochTree.png';
import './App.css';
import Youtube from './Youtube';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
           <h2>This is a Youtube Fetch Tool</h2>
           <p>This allows you fetch youtube videos from the web with a click of the button below.
             <p>Try it out :) and shoot me an email with some feedback. My First React App!</p>
           </p>
          </div>
          <Youtube />
          </div>
    );
  }
}

export default App;
