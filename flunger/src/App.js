import React, { Component } from 'react';
import './App.css';
import { cardSearch, testCardSearch } from './js/Search.js';
import ScrollView from './components/ScrollView.js';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
    };
  }

  async componentDidMount() {
    const cards = await testCardSearch();
    this.setState({cards: cards});
  }

  render() {

    const {cards} = this.state;

    return (
      <div className="App">
        <header className="App-header"></header>
        <ScrollView className="Scroll-View" />
        <div className="display"></div>
      </div>
    );
  }
}

export default App;
