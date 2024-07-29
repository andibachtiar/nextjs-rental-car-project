"use client";

import Image from "next/image";
import CustomButton from "./CustomButton";
import { MouseEventHandler } from "react";

const Hero = () => {
  const handleScroll: MouseEventHandler<HTMLButtonElement> = () => {
    console.log("oke");
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, Book, or rent a car - quickly and easily!
        </h1>

        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process
        </p>

        <CustomButton
          type="button"
          onClick={handleScroll}
          className="mt-10 py-3 px-4 text-white bg-blue-600 rounded-full"
        >
          Explore Cars!
        </CustomButton>
      </div>

      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
