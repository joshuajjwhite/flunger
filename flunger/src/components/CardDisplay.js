import React, { useState, useEffect } from 'react';

import Cost from './Cost';
import CardName from './CardName.js';
import PowerToughness from './PowerTough.js';

import '../styles/CardDisplay.css';

function CardDisplay({card}) {

    const details = {
        "Card Name": <CardName className="detail" name={card.name} names={card.names} />,
        "Mana Cost": <Cost className="detail" manaCostString={card.manaCost} />,
        "CMC": card.cmc,
        "Types": card.type,
        "Card Text": card.text,
        "Expansion": card.sets.reduce(
            (str, print)=> str = str + print + ", "
        , ""),
        "P/T": <PowerToughness className="detail" power={card.power} 
        toughness={card.toughness} />,
    }

    return (
        <div className={"row card"}>
            <div className="card-image">
                <img src={card.imageUrl} />
            </div>

            <div className="card-details">
                <div className="label">Card Name: </div>
                <CardName className="detail" name={card.name} names={card.names} />
                
                <div className="label">Mana Cost: </div>
                <Cost className="detail" manaCostString={card.manaCost} />
                
                <div className="label">CMC: </div>
                <div className="detail">({card.cmc})</div>
                
                <div className="label">Types: </div>
                <div className="detail">{card.type}</div> 
                
                <div className="label">Card Text: </div>
                <div className="detail">{card.text}</div> 
                
                <div className="label">Expansion: </div>
                <div className="detail">{
                    card.sets.reduce(
                        (str, print)=> str = str + print + ", "
                    , "")
                    }</div> 
                
                <div className="label">P/T: </div>
                <PowerToughness className="detail" power={card.power} 
                toughness={card.toughness} />
            </div>
        </div>
    );
}

export default CardDisplay;