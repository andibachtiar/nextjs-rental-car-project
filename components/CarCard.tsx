"use client";

import { CarsType } from "@/utils";
import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";

type CarCardProps = {
  car: CarsType;
};

const CarCard = ({ car }: CarCardProps) => {
  return (
    <div className="car-card group hover:cursor-pointer">
      <div className="car-card__content">
        <h2 className="car-card__content-title text-blue-700">
          {car.make} {car.model}
        </h2>

        {/* <h3 className="text-xl font-bold">{car.year}</h3> */}
      </div>

      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">Rp</span>
        20.000
        <span className="self-end text-[14px] font-semibold"> / day</span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src="/hero.png"
          alt="/"
          fill
          priority
          className="object-contain"
        />
      </div>

      <CustomButton className="rounded-full w-full bg-blue-500 text-white py-2 px-3">
        Book now!
      </CustomButton>
    </div>
  );
};

export default CarCard;
