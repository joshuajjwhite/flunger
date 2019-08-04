import React from 'react';
import styled from 'styled-components';

import Cost from './Cost';
import CardName from './CardName.js';
import PowerToughness from './PowerTough.js';

import styles from '../styles/CardDisplay.module.css';
import ViewContainer from './ViewContainer';

const CardDetes = (card) => (
    <div className={"row card"}>
    <div className={styles.cardImage}>
        <img src={card.imageUrl} />
    </div>

    <div className={styles.cardDetails}>
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
            (card.sets ? card.sets : []).reduce(
                (str, print)=> str = str + print + ", "
            , "")
            }
        </div> 
        
        <div className="label">P/T: </div>
        <PowerToughness className="detail" power={card.power} 
        toughness={card.toughness} />
    </div>       
    </div>
);

const FullWidth = styled(ViewContainer)`
    width:100%;
    background-color: var(--primary)
`

function CardDisplay({card}) {

    return (
        <FullWidth>
            {!card ? null : <CardDetes card={card} />}
        </FullWidth>
    )
}

export default CardDisplay;