import { CustomFilter, SearchBar } from "@/components";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the car you like</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__folter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>
        {/* <CarCatalogue /> */}
      </div>
    </main>
  );
}
