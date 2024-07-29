"use client";

import React, { useEffect, useState } from "react";
import { CustomButton, SearcManufacturer } from "./";
import { getCars } from "@/utils";

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const handleSearch = () => {};

  return (
    <form onSubmit={handleSearch} className="searchbar">
      {manufacturer}
      <div className="searchbar__item">
        <SearcManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
      {/* <CustomButton>search</CustomButton> */}
    </form>
  );
};

export default SearchBar;
