import { CarCard, CustomFilter, SearchBar } from "@/components";
import Hero from "@/components/Hero";
import { CarsType, getCars, getCarsProps, isError } from "@/utils";

type PageProps = {
  searchParams: getCarsProps;
};

export default async function Home({ searchParams }: PageProps) {
  const cars: CarsType[] = await getCars({
    model: searchParams.model,
    limit: searchParams.limit,
    manufacturer: searchParams.manufacturer,
    year: searchParams.year,
  });

  console.log(searchParams);

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
        </div>

        {/* {getCarImageUrl(cars[0])} */}

        <section className="mt-10">
          {isError(cars) && (
            <div>
              <h2 className="text-black text-xl">Oops! No results</h2>
              <p>{cars.error}</p>
            </div>
          )}

          {Array.isArray(cars) && cars.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6">
              {cars.map((car, index) => {
                return <CarCard car={car} key={index} />;
              })}
            </div>
          ) : (
            <div>Opps.. Car not Found</div>
          )}
        </section>
      </div>
    </main>
  );
}
