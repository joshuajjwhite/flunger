import React, { useState, useEffect } from 'react';
import { cardSearch, testCardSearch } from '../js/Search.js';

import ScrollView from './ScrollView.js';
import SearchBar from './SearchBar';

function SearchDisplay({onCardSelect}) {

    const [cards, setCards] = useState([]);
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        (async () => {
            const cards = await testCardSearch();
            setCards(cards);
        })();
    }, []);

    async function handleSearch(searchTerm) {
        const searchCards = await cardSearch({name: searchTerm});
        setCards(searchCards)
    };

    return (
        <div>
            <SearchBar 
                handleSubmit={handleSearch}
            />
            <ScrollView 
                onCardSelect={onCardSelect} 
                cards={cards}
            />
        </div>
    );
}

export default SearchDisplay;