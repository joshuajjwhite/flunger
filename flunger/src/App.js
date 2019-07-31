import React, { Component } from 'react';
import './App.css';
import { cardSearch, testCardSearch } from './js/Search.js';
import ScrollView from './components/ScrollView.js';

import CardDisplay from './components/CardDisplay.js';
import SearchBar from './components/SearchBar';

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
        <div>
          <SearchBar />
          <ScrollView className="scroll-view" 
            onCardSelect={this.onCardSelect.bind(this)} />
        </div>
        <div className="display">
          {displayCard && <CardDisplay card={displayCard} />}
        </div>
      </div>
    );
  }
}

export default App;
