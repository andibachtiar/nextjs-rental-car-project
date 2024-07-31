"use client";

import { CarsType, getCarImageUrl } from "@/utils";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CursorArrowRaysIcon, EyeIcon } from "@heroicons/react/24/solid";
import { CarDetail, CustomButton } from "./";

type CarCardProps = {
  car: CarsType;
};

const CarCard = ({ car }: CarCardProps) => {
  const [showModal, setShowModal] = useState(false);
  const [url, setUrl] = useState("/hero.png");

  useEffect(() => {
    const getUrl = async () => {
      const getImage = await getCarImageUrl(car);
      setUrl(getImage.previewURL);
    };

    getUrl();
  }, []);

  return (
    <div className="car-card relative group">
      <div className="car-card__content grid">
        <h2 className="car-card__content-title text-blue-700">
          {car.make} {car.model}
        </h2>
        <h4 className="text-base font-bold text-gray-400">{car.class}</h4>
      </div>

      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">Rp</span>
        20.000
        <span className="self-end text-[14px] font-semibold"> / day</span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image src={url} alt="/" fill priority className="object-contain" />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex w-full justify-between group-hover:invisible">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              alt="steering wheel"
              width={20}
              height={20}
            />
            <p className="text-sm">
              {car.transmission == "a" ? "Automatic" : "Manual"}
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/tire.svg" alt="transmission" width={20} height={20} />
            <p className="text-sm">
              {typeof car.drive === "string" ? car.drive.toUpperCase() : "-"}
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/gas.svg"
              alt="mile per gallon"
              width={20}
              height={20}
            />
            <p className="text-sm">{car.city_mpg} MPG</p>
          </div>
        </div>
      </div>

      <div className="car-card__btn-container justify-center">
        <CustomButton
          className="w-11/12 text-center rounded-full bg-blue-500 text-white py-2 px-6 flex justify-center items-center gap-4"
          onClick={() => setShowModal(true)}
        >
          <CursorArrowRaysIcon className="size-5 text-white font-bold" />
          <span>See more!</span>
        </CustomButton>
      </div>

      <CarDetail
        car={car}
        show={showModal}
        closeModal={() => setShowModal(false)}
      />
    </div>
  );
};

export default CarCard;
