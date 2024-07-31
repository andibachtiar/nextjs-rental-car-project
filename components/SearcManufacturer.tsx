"use client";

import { Combobox, ComboboxButton, ComboboxInput } from "@headlessui/react";
import Image from "next/image";
import { manufacturers } from "@/constants";

import { Dispatch, SetStateAction, useRef, useState } from "react";
import useClickOutside from "@/hooks/clickOutsideHook";
import CustomCombobox from "./CustomCombobox";

type SearcManufacturerProps = {
  manufacturer: string;
  setManufacturer: Dispatch<React.SetStateAction<string>>;
};

const SearcManufacturer = ({
  manufacturer,
  setManufacturer,
}: SearcManufacturerProps) => {
  const [query, setQuery] = useState("");
  const [carManufacturers, setCarManufacturers] = useState(manufacturers);
  const [showOption, setShowOption] = useState(false);

  const inputRef = useRef(null);

  useClickOutside(inputRef, () => {
    setShowOption(false);
    setCarManufacturers(manufacturers);
  });

  const filterManufacturer = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== "") {
      const filteredManufacturer = carManufacturers.filter((manufacturer) =>
        manufacturer.toLowerCase().includes(query.toLowerCase())
      );
      setCarManufacturers(filteredManufacturer);
      setQuery(e.target.value);
      setShowOption(true);
    }
  };

  return (
    <div className="search-manufacturer relative">
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full">
          <ComboboxButton className="absolute top-[14px] left-[14px]">
            <Image src="/car-logo.svg" alt="car-logo" width={20} height={20} />
          </ComboboxButton>

          <ComboboxInput
            ref={inputRef}
            className="search-manufacturer__input border relative"
            placeholder="search your car..."
            displayValue={(manufacturer: string) => manufacturer}
            onChange={filterManufacturer}
            onClick={() => setShowOption(true)}
          />

          <CustomCombobox.Options
            show={showOption}
            afterLeave={() => setQuery("")}
            className="border rounded-xl overflow-auto max-h-96"
          >
            {carManufacturers.map((manufacturer, index) => {
              return (
                <CustomCombobox.Option value={manufacturer} key={index}>
                  {manufacturer}
                </CustomCombobox.Option>
              );
            })}
          </CustomCombobox.Options>
        </div>
      </Combobox>
    </div>
  );
};

export default SearcManufacturer;
