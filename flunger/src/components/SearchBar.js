import React, { useState, useEffect } from 'react';

import '../styles/SearchBar.css';

function SearchBar({onSubmit}) {

    return (
        <div className="search-wrapper">
            {/* <form className="form" id="searchForm"> */}
                <input
                    type="text"
                    className="search"
                    id="search"
                    placeholder="Search Term"
                />
                <button className="button is-info" onClick={onSubmit}>
                    Search
                </button>
            {/* </form> */}
        </div>
    );
}

export default SearchBar;
