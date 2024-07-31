export type CarsType = {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
};

export interface IsError {
  error: string;
}

export function isError(object: any) {
  return "error" in object;
}

export type getCarsProps = {
  manufacturer: string;
  model: string;
  limit?: number;
  year?: number;
};

export const getCars = async (props: getCarsProps) => {
  const url = new URL("https://cars-by-api-ninjas.p.rapidapi.com/v1/cars");
  url.searchParams.append("model", props.model);
  url.searchParams.append("make", props.manufacturer.toLowerCase());

  props.limit
    ? url.searchParams.append("limit", props.limit.toString())
    : url.searchParams.append("limit", "10");

  props.year
    ? url.searchParams.append("year", props.year.toString())
    : url.searchParams.append("year", "2024");

  const headers = {
    "x-rapidapi-key": "0b556a6083msh5b2bca4bf736b6bp1b5765jsn91516180f6ea",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com?model=corolla",
  };

  try {
    const response = await fetch(url, { headers });
    const data = await response.json();
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export const getCarImageUrl = async (car: CarsType, angle?: string) => {
  const url = new URL("https://pixabay.com/api/");
  const { make, year, model } = car;

  url.searchParams.append("key", "45185091-abf63a6e2c43da9da2e547fc3");
  url.searchParams.append("image_type", "photo");
  url.searchParams.append("per_page", "3");
  url.searchParams.append("q", `red flower`);

  try {
    const response = await fetch(url.toString());
    const data = await response.json();

    return data.hits[0];
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};
