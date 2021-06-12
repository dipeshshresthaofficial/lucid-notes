import React from 'react';
import {MdSearch} from 'react-icons/md';

export default function SearchBar({handleSearchText}) {
    return (
        <div className="search-bar-container">
            <MdSearch className="search-icon" size="1.3em" />
            <input type="text" placeholder="Search..." onChange={(e) => handleSearchText(e.target.value)} />
        </div>
    )
}
