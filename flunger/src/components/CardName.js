import React, { Component } from 'react';
import '../styles/Card.css';

class CardName extends Component {
    
    render() {
        const {name, names, className} = this.props;

        let cardName = (names || [name]).join(" // ");
        return <span className={className}>{cardName}</span>
    }
}
  
export default CardName;