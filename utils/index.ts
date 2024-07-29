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

export const getCars = async (model: string) => {
  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=${model}`;

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
