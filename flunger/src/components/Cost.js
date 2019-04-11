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
        const {manaCostString, className} = this.props;
        let costKey = 0;

        return (
            <div className={className}>
                {splitIntoManaSymbols(manaCostString)
                    .map((manaSymbol, index) => <CostSymbol key={index} manaSymbolString={manaSymbol} />)
                }
            </div>
        );
    }
  }
  
  export default Cost;