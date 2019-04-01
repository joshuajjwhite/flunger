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
                    <div className="row">
                        <CardName name={card.name} names={card.names} />
                        <Cost manaCostString={card.manaCost} />
                        <div><p>({card.cmc})</p></div>
                    </div>

                    <div className="row">
                        <p>{card.type}</p> 
                        <PowerToughness power={card.power} toughness={card.toughness} />
                    </div>
                </div>
            </div>
        );
    }
}
  
export default Card;