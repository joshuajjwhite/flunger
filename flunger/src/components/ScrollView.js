import React, { useState, useEffect } from 'react';
import { cardSearch, testCardSearch } from '../js/Search.js';

import '../styles/ScrollView.css';

import Card from './Card.js';

function ScrollView(props) {

    const [selected, setSelected] = useState(null);

    function onCardSelect(card) {
        setSelected(card)
        props.onCardSelect(card)
    }

    return (
        <div className="scrollable">
            {props.cards.map(card => 
                <Card 
                    className={selected && (selected.key === card.key) ? "selected" : ""}
                    key={card.key} 
                    card={card}
                    onCardSelect={onCardSelect.bind(this, card)}
                />)}
        </div>
    );
}

export default ScrollView;