"use client";

import React, { useEffect, useState } from "react";
import { CustomButton, SearcManufacturer } from "./";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => {
  return (
    <button
      className={`absolute right-2 z-[100] ${otherClasses}`}
      type="submit"
    >
      <Image
        src="/magnifying-glass.svg"
        alt="magnifying glass"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  );
};

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufacturer === "" && model === "") {
      return alert("Please fill the search bar");
    }
    updateSearchParam(model.toLowerCase(), manufacturer.toLowerCase());
  };

  const updateSearchParam = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }

    const newPathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathName);
  };

  return (
    <form onSubmit={handleSearch} className="searchbar">
      {manufacturer}
      <div className="searchbar__item">
        <SearcManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          className="absolute w-[20px] h-[20px] ml-4"
          src="/model-icon.png"
          alt="car model"
          width={25}
          height={25}
        />
        <input
          type="text"
          name="model"
          value={model}
          placeholder="tiguan"
          className="searchbar__input border"
          onChange={(e) => setModel(e.target.value)}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>

      <CustomButton className="ml-5 bg-blue-500 rounded-full py-2 px-3 text-white">
        Search
      </CustomButton>
    </form>
  );
};

export default SearchBar;
