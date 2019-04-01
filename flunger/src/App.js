import React, { Component } from 'react';
import Card from './components/Card.js'
// import './App.css';

const mtg = require('mtgsdk');



class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
    };
  }

  componentDidMount() {
    console.log(mtg)
    mtg.card.where(
      {name: 'invert'}
      // {name: 'reaper'}
      // {supertypes: 'Legendary', subtypes: 'wizard' }
      // {name: 'Deadly', subtypes: 'spider'}
      )
      .then(cards => {
        this.setState({cards: cards})
        // cards.forEach(card => console.log(card.name))
      })
  }
  
  render() {

    const {cards} = this.state;

    return (
      <div className="App">
        <header className="App-header">
          {cards.map(card => <Card key={card.name+card.set} card={card}/>)}
        </header>
      </div>
    );
  }
}

export default App;
