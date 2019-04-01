import React, { Component } from 'react';
import Card from './components/Card.js';
// import './App.css';
import { cardSearch, testCardSearch } from './js/Search.js';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
    };
  }

  async componentDidMount() {
    const cards = await testCardSearch();
    // await cardSearch(
    //   {name: 'invert', contains: 'imageUrl'}
      //   // {name: 'reaper'}
      //   // {supertypes: 'Legendary', subtypes: 'wizard' }
      //   // {name: 'Deadly', subtypes: 'spider'}
    // );
  
    this.setState({cards: cards});
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
