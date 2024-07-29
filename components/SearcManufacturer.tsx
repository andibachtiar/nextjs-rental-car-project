"use client";

import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Transition,
} from "@headlessui/react";
import Image from "next/image";
import { manufacturers } from "@/constants";

import {
  Dispatch,
  Fragment,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import useClickOutside from "@/hooks/clickOutsideHook";

type SearcManufacturerProps = {
  manufacturer: string;
  setManufacturer: Dispatch<SetStateAction<string>>;
};

const SearcManufacturer = ({
  manufacturer,
  setManufacturer,
}: SearcManufacturerProps) => {
  let filteredManufacturers: string[] = manufacturers;
  let isShow: boolean = false;

  const ref = useRef(null);

  const [query, setQuery] = useState("");
  const [showOption, setShowOption] = useState(false);

  useClickOutside(ref, setShowOption);

  if (query !== "") {
    filteredManufacturers = filteredManufacturers.filter((manufacturer) =>
      manufacturer.toLowerCase().includes(query.toLowerCase())
    );
    setShowOption(true);
  }

  return (
    <div className="search-manufacturer relative">
      <Combobox>
        <div className="relative w-full">
          <ComboboxButton className="absolute top-[14px] left-[14px]">
            <Image src="/car-logo.svg" alt="car-logo" width={20} height={20} />
          </ComboboxButton>

          <ComboboxInput
            ref={ref}
            className="search-manufacturer__input border relative"
            placeholder="search your car..."
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
            onClick={() => setShowOption(!showOption)}
          />

          <Transition
            show={showOption}
            enter="transition ease-in duration-100"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-in duration-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <div className="absolute w-full top-12 bg-white">
              <ComboboxOptions className="border rounded-xl overflow-auto max-h-72">
                {filteredManufacturers.map((manufacturer, index) => {
                  return (
                    <ComboboxOption
                      className="search-manufacturer__option hover:cursor-pointer hover:bg-gray-100"
                      key={`${index}-${manufacturer}`}
                      value={manufacturer}
                      onClick={() => setManufacturer(manufacturer)}
                    >
                      {({ focus, selected }) => (
                        <div
                          className={`py-2 pl-10 pr-4 ${
                            selected && "bg-gray-300"
                          }`}
                        >
                          {manufacturer}
                          {selected && "oke"}
                        </div>
                      )}
                    </ComboboxOption>
                  );
                })}
              </ComboboxOptions>
            </div>
          </Transition>
          {/* <ComboboxOptions>
            {manufacturers.map((manufacturer, index) => {
              return (
                <ComboboxOption
                  key={`${index}-${manufacturer}`}
                  value={manufacturer}
                  as={Fragment}
                >
                  {manufacturer}
                </ComboboxOption>
              );
            })}
          </ComboboxOptions> */}
        </div>
      </Combobox>
    </div>
  );
};

export default SearcManufacturer;
