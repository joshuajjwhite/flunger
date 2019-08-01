import React, { useState, useEffect } from 'react';

import '../styles/SearchBar.css';

function SearchBar({handleSubmit}) {

    const [searchTerm, setSearchTerm] = useState("");

    function handleChange(event) {
        setSearchTerm(event.target.value);
    }

    return (
        <div className="search-wrapper">
            <form className="form" id="searchForm" 
                onSubmit={(event) => {
                    event.preventDefault()
                    handleSubmit(searchTerm)
                }}>
                <input
                    type="text"
                    className="search"
                    id="search"
                    placeholder="Search Term"
                    value={searchTerm}
                    onChange={handleChange}
                />
                <input className="button" type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default SearchBar;
