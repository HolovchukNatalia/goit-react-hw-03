import React from "react";
import css from "./style/SearchBox.module.css";

const SearchBox = ({ value, onFilter }) => {
  return (
    <div className={css.searchBlock}>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
        title="Enter contact"
      />
    </div>
  );
};

export default SearchBox;
