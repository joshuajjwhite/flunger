import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const mtg = require('mtgsdk');



class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
    };
  }

  componentDidMount() {
    mtg.card.where(
      {name: 'invent'}
      // {supertypes: 'Legendary', subtypes: 'spider' }
      // {name: 'Deadly', subtypes: 'spider'}
      )
      .then(cards => {
        this.setState({cards: cards})
        cards.forEach(card => console.log(card.name))
      })
  }
  
  render() {

    const {cards} = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {cards
          .map(card => {
            return (
              <div>
                <p>{card.names} {card.manaCost} ({card.cmc})</p>
                <p>{card.number}</p>
                <p>{card.type} ({card.power}/{card.toughness})</p>
                <img src={card.imageUrl} />
              </div>
            )
          })}
        </header>
      </div>
    );
  }
}

export default App;
