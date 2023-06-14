"use client";

import { useState } from "react";

import { SearchMake } from ".";

const SearchBar = () => {
  const [make, setmake] = useState("");

  const handleSearch = () => {};
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchMake />
      </div>
    </form>
  );
};

export default SearchBar;
