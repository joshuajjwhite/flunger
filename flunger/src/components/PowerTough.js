import React, { Component } from 'react';
import '../styles/Card.css';

class PowerTough extends Component {
    
    render() {
        const {power, toughness, className} = this.props;

        const ptValue = power && toughness ? `(${power}/${toughness})` : ""; 
        return <span className={className}>{ptValue}</span>
    }
}
  
export default PowerTough;