import React, { useState, useCallback } from 'react';
import StyleWrapper from './components/StyleWrapper.js'
import './App.css';

import CardDisplay from './components/CardDisplay.js';
import SearchDisplay from './components/SearchDisplay';

function App(props) {

  const [displayCard, setDisplayCard] = useState(null)

  return (
    <StyleWrapper className="App">
      <header className="App-header"></header>
      <SearchDisplay handleCardSelect={setDisplayCard}/>
      <CardDisplay card={displayCard} />
    </StyleWrapper>
  );
}

export default App;
