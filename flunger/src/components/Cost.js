import React, { Component } from 'react';
import CostSymbol from './CostSymbol.js';
import '../styles/Card.css';

function splitIntoManaSymbols(manaCostString) {
    const manaSymbols = (manaCostString || "")
        .match(/{[0-9\/A-Za-z]+}/g);
    
    return manaSymbols || [];
}

class Cost extends Component {
    
    render() {
        const {manaCostString} = this.props;

        return (
            splitIntoManaSymbols(manaCostString)
                .map(manaSymbol => <CostSymbol manaSymbolString={manaSymbol} />)
        );
    }
  }
  
  export default Cost;