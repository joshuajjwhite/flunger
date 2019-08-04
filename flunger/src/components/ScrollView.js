import React, { useState } from 'react';
import styled from 'styled-components';

import '../styles/ScrollView.css';

import Card from './Card.js';

const StyledListItem = styled.li`
    background-color: ${props => props.selected ? "var(--active)" : "var(--bg-color)"};
    padding: 5px;
    border-bottom: 1px solid var(--active);
`

const StyledList = styled.ul`
    background-color: var(--bg-color);
    list-style-type: none;
    margin: 0;
    padding: 0;
`

function ScrollView({cards, handleCardSelect}) {

    const [selected, setSelected] = useState(null);

    return (
        
            <StyledList>
                {cards.map((card, idx) =>
                    <StyledListItem 
                        key={card.key}
                        selected={selected && (selected.key === card.key)} 
                        onClick={() => {
                            setSelected(card);
                            handleCardSelect(card);
                        }}
                    >
                        <Card card={card} />
                    </StyledListItem>
                )}
            </StyledList>
        
    );
}

export default React.memo(ScrollView);