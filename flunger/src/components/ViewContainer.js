import styled from 'styled-components';

const ViewContainer = styled.div`
height: 100%;
overflow-y: auto;
overflow-x: hidden;
background-color: var(--bg-color);

display: flex;
flex-direction: column;
--image-width: 95px;
`

export default ViewContainer;