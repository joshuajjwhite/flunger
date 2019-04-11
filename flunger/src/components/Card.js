import React, { Component } from 'react';
import '../styles/Card.css';
import '../styles/mana-symbols/css/mana-cost.css';

import Cost from './Cost';
import CardName from './CardName.js';
import PowerToughness from './PowerTough.js';

class Card extends Component {
    
    render() {
        const {card} = this.props;

        return (
            <div className="row card">
                <div className="card-image">
                    <img src={card.imageUrl} />
                </div>
                <div className="card-details">
                    <span className="row detail">num of prints: {card.numOfPrints}</span>
                    <div className="row">
                        <CardName className="detail" name={card.name} names={card.names} />
                        <Cost className="detail" manaCostString={card.manaCost} />
                        <span className="detail">({card.cmc})</span>
                    </div>

                    <div className="row">
                        <span className="detail">{card.type}</span> 
                        <PowerToughness className="detail" power={card.power} toughness={card.toughness} />
                    </div>
                </div>
            </div>
        );
    }
}
  
export default Card;