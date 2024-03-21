import React, { useState, ChangeEvent } from 'react';
import style from "./search-bar.module.css";
// import DOMPurify from 'dompurify';

import SearchIcon from "../../../assets/svg/searchIcon.svg?react";

const SearchBar: React.FC = function () {
    // const sanitizedSearchIconSVG = DOMPurify.sanitize(SearchIcon);


    // State to hold the search input value
    const [searchValue, setSearchValue] = useState<string>("");

    // Function to handle changes in the search input
    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
      setSearchValue(event.target.value);
    };
  
    return (
      <div className={style.search_bar_wrapper}>
        {/* Search icon */}
        <SearchIcon aria-hidden="true" />
        {/* <svg dangerouslySetInnerHTML={{ __html: sanitizedSearchIconSVG }} aria-hidden="true"/> */}

        {/* Search input field */}
        <input
          name='search'
          type='text'
          role='search'
          placeholder='Search chatter'
          className={style.search_bar_input}
          value={searchValue}
          onChange={handleSearchChange}
          aria-label='Search'
        />
      </div>
    );
}

export default SearchBar;
