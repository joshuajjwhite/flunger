import React, { Component } from 'react';
import '../styles/Card.css';


function getManaClass(manaSymbolString) {

    const manaclass = "mana medium s" + manaSymbolString
        .replace(/[{}\/]/g, "")
        .toLowerCase();

    return manaclass
}

function of(manaSymbolString) {
    
    if (getManaClass(manaSymbolString) !== null) {
        return <span className={getManaClass(manaSymbolString)}></span>;
    }

    return <div>{manaSymbolString}</div>;
}
class CostSymbol extends Component {

    
    render() {
        const {manaSymbolString} = this.props;

        return of(manaSymbolString);
    }
  }
  
  export default CostSymbol;