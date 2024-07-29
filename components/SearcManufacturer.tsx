import React, { Dispatch, SetStateAction } from "react";

type SearcManufacturerProps = {
  manufacturer: string;
  setManufacturer: Dispatch<SetStateAction<string>>;
};

const SearcManufacturer = ({
  manufacturer,
  setManufacturer,
}: SearcManufacturerProps) => {
  return <div></div>;
};

export default SearcManufacturer;
