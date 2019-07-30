import React, { Component } from 'react';
import './App.css';
import { cardSearch, testCardSearch } from './js/Search.js';
import ScrollView from './components/ScrollView.js';

import Card from './components/Card.js';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      displayCard: null,
    };
  }

  onCardSelect(card) {
    this.setState({displayCard: card});
  }

  render() {

    const {displayCard} = this.state;

    return (
      <div className="App">
        <header className="App-header"></header>
        <ScrollView className="Scroll-View" 
          onCardSelect={this.onCardSelect.bind(this)} />
        <div className="display">
          {displayCard && <Card key={displayCard.key} card={displayCard} />}
        </div>
      </div>
    );
  }
}

export default App;
