import { ComboboxOption, Transition, ComboboxOptions } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/solid";

// ==================================================================================== //

type OptionsProps = {
  show: boolean;
  afterLeave: () => void;
  className: string;
  children: React.ReactNode;
};

const Options = ({ show, afterLeave, className, children }: OptionsProps) => {
  return (
    <Transition
      show={show}
      enter="transition ease-in duration-100"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition ease-in duration-100"
      leaveTo="opacity-0"
      afterLeave={afterLeave}
    >
      <div className="absolute w-full top-12 z-[11] bg-white">
        <ComboboxOptions className={className}>{children}</ComboboxOptions>
      </div>
    </Transition>
  );
};

// ==================================================================================== //

type OptionProps = {
  value: string;
  label?: string;
  children: React.ReactNode;
  handleClick?: () => void;
};

const Option = ({ value, label, children, handleClick }: OptionProps) => {
  return (
    <ComboboxOption
      className="search-manufacturer__option hover:cursor-pointer hover:bg-blue-200"
      key={value}
      value={value}
      onClick={handleClick}
    >
      {({ selected }) => (
        <div
          className={`py-2 pl-10 pr-4 flex justify-between ${
            selected && "bg-blue-500 text-white"
          }`}
        >
          {children}
          {selected && <CheckIcon className="size-5 text-white font-bold" />}
        </div>
      )}
    </ComboboxOption>
  );
};

// ==================================================================================== //

export default { Options, Option };
