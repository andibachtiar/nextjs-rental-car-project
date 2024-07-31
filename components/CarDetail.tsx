import { CarsType } from "@/utils";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { Fragment } from "react";

type CarDetailProps = {
  show: boolean;
  car: CarsType;
  closeModal: () => void;
};

const CarDetail = ({ show, closeModal, car }: CarDetailProps) => {
  return (
    <>
      <Transition appear show={show} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="fixed inset-0 bg-black bg-opacity-25"
              onClick={closeModal}
            />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-100"
                enterFrom="opacity-0 scale-75"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-100"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-75"
              >
                <DialogPanel className="relative w-full min-h-96 max-w-2xl max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 shadow-xl text-left">
                  <button
                    type="button"
                    className="group w-6 h-6 border-2  flex justify-center items-center absolute top-3 right-3 z-[1000] bg-white rounded-full border-red-500"
                  >
                    <XMarkIcon
                      className="size-3 text-red-500"
                      onClick={closeModal}
                    />
                  </button>

                  <div className="flex flex-1 flex-col gap-3">
                    <div className="relative w-full h-60 bg-pattern bg-cover bg-center rounded-lg">
                      <Image
                        src="/hero.png"
                        alt="/"
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col gap-2 p-4">
                    <h2 className="font-semibold text-xl capitalize">
                      {car.make} {car.model}
                    </h2>

                    <div className="mt-3 flex flex-wrap flex-col gap-4">
                      {Object.entries(car).map(([key, value]) => {
                        return (
                          <div className="flex justify-between" key={key}>
                            <span className="capitalize text-gray-500">
                              {key.replace("_", " ")}
                            </span>
                            <span className="font-semibold capitalize text-gray-700">
                              {value}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetail;
