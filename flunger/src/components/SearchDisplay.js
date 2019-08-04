import React, { useState, useEffect } from 'react';
import { cardSearch, testCardSearch } from '../js/Search.js';
import styled from 'styled-components';

import ScrollView from './ScrollView.js';
import SearchBar from './SearchBar';
import ViewContainer from './ViewContainer.js'

function SearchDisplay({handleCardSelect}) {

    const [cards, setCards] = useState([]);

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
        <ViewContainer>
            <SearchBar 
                handleSubmit={handleSearch}
            />
        
            <ScrollView 
                handleCardSelect={handleCardSelect} 
                cards={cards}
            />
        </ViewContainer>
    );
}

export default SearchDisplay;