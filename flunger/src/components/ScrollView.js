import React, { useState, useEffect } from 'react';
import { cardSearch, testCardSearch } from '../js/Search.js';

import '../styles/ScrollView.css';

import Card from './Card.js';

function ScrollView() {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        (async () => {
            const cards = await testCardSearch();
            setCards(cards);
        })();
    }, []); 

    return (
        <div className="scrollable">
            {cards.map(card => <Card key={card.key} card={card}/>)}
        </div>
    );
}

export default ScrollView;