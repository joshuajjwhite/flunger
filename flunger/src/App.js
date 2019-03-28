import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const mtg = require('mtgsdk');



class App extends Component {
  
  componentDidMount() {
    mtg.card.where({subtypes: 'spider' })
      .then(cards =>
         cards.forEach(card => console.log(card.name)))
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
