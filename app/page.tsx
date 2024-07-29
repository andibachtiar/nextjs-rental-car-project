import { CarCard, CustomFilter, SearchBar } from "@/components";
import Hero from "@/components/Hero";
import { CarsType, IsError, getCars, isError } from "@/utils";
import Image from "next/image";
import { isArray } from "util";

export default async function Home() {
  const cars: CarsType[] = await getCars("corolla");

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="min-h-[720px] mt-12 padding-x padding-y" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the car you like</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          {/* <div className="home__folter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div> */}
        </div>

        <section>
          {isError(cars) && (
            <div>
              <h2 className="text-black text-xl">Oops! No results</h2>
              <p>{cars.error}</p>
            </div>
          )}

          {Array.isArray(cars) && cars.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {cars.map((car, index) => {
                return <CarCard car={car} key={index} />;
              })}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
