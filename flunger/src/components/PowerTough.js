import React, { Component } from 'react';
import '../styles/Card.css';

class PowerTough extends Component {
    
    render() {
        const {power, toughness} = this.props;

        const ptValue = power && toughness ? `(${power}/${toughness})` : ""; 
        return <p>{ptValue}</p>
    }
}
  
export default PowerTough;