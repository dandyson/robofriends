import React from 'react';

const SearchBox = ({ searchfield, searchChange}) => {
    return(
        <div className = 'pa2'>
            <input classname='pa3'
            type="search" 
            placeholder="Search Robots..." 
            onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox;
