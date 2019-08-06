import React from 'react';
import styled from 'styled-components';

import ViewContainer from './ViewContainer';
import CardDetails from './CardDetails';

const FullWidth = styled(ViewContainer)`
    width:100%;
    background-color: var(--primary);
    padding: 5px;
`
function CardDisplay({card}) {

    return (
        <FullWidth>
            {!card ? null : <CardDetails card={card} />}
        </FullWidth>
    )
}

export default CardDisplay;