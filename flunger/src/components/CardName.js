import React, { Component } from 'react';
import '../styles/Card.css';

class CardName extends Component {
    
    render() {
        const {name, names} = this.props;

        let cardName = (names || [name]).join(" // ");
        return <p>{cardName}</p>
    }
}
  
export default CardName;