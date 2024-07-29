"use client";

import React, { useState } from "react";
import { CustomButton, SearcManufacturer } from "./";

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const handleSearch = () => {};

  return (
    <form onSubmit={handleSearch} className="searchbar">
      <div className="searchbar__item">
        <SearcManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
      <input type="text" />
      {/* <CustomButton>search</CustomButton> */}
    </form>
  );
};

export default SearchBar;
