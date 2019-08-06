import React from 'react';
import styled from 'styled-components';

import Cost from './Cost';
import CardName from './CardName.js';
import PowerToughness from './PowerTough.js';

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: repeat(7, auto [row-start]);

    * {
        padding: 5px;
    }
`

const StyledLabel = styled.div`
    text-align: right;
`

const StyledRow = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`

const CardDetails = ({card}) => (
    <StyledRow>
        <div>
            <img src={card.imageUrl} />
        </div>

        <StyledGrid>
            <StyledLabel>Card Name: </StyledLabel>
            <CardName name={card.name} names={card.names} />
            
            <StyledLabel>Mana Cost: </StyledLabel>
            <Cost manaCostString={card.manaCost} />
            
            <StyledLabel >CMC: </StyledLabel>
            <div>({card.cmc})</div>
            
            <StyledLabel >Types: </StyledLabel>
            <div>{card.type}</div> 
            
            <StyledLabel>Card Text: </StyledLabel>
            <div>{card.text}</div> 
            
            <StyledLabel>Expansion: </StyledLabel>
            <div>{
                (card.sets ? card.sets : []).reduce(
                    (str, print)=> str = str + print + ", "
                , "")
                }
            </div> 
            
            <StyledLabel>P/T: </StyledLabel>
            <PowerToughness power={card.power} toughness={card.toughness} />
        </StyledGrid>       
    </StyledRow>
);

export default CardDetails;