import React from "react";

const Search = ({ searchHandler, setCurrentSearch }) => {
  const setKey = (e) => {
    setCurrentSearch(e.target.value);
  };
  return (
    <div>
      <div className="search">
        <input onChange={setKey} type="text" name="" id="" />
        <button onClick={searchHandler}>Search</button>
      </div>
    </div>
  );
};

export default Search;
