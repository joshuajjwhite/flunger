import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
background-color: var(--primary);
display: grid;
grid-template-columns: 80% 20%;
grid-template-rows: 100%;
`

const StyledInput = styled.input`
margin: 5px;
padding: 0px 0px 0px 5px;
border: none;
border-radius: .1rem;
height: 30px;
`

const StyledInputSubmit = styled(StyledInput)`
margin: 5px 5px 5px 0px;
padding: 0px;
background-color: var(--secondary);
`

function SearchBar({handleSubmit}) {

    const [searchTerm, setSearchTerm] = useState("");

    function handleChange(event) {
        setSearchTerm(event.target.value);
    }

    return (
        <div className="search-wrapper">
            <StyledForm onSubmit={(event) => {
                    event.preventDefault()
                    handleSubmit(searchTerm)
                }}>
                <StyledInput
                    type="text"
                    id="search"
                    placeholder="Search Term"
                    value={searchTerm}
                    onChange={handleChange}
                />
                <StyledInputSubmit type="submit" value="Search" />
            </StyledForm>
        </div>
    );
}

export default SearchBar;
