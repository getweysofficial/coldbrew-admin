"use client";
import React from "react";
import AppButton from "@/app/component/AppButton/AppButton";
import logo from "../../../../public/images/coldbrew-single.png";
import FormInput from "@/app/component/AppInput/AppInput";
import Image from "next/image";
import CitySections from "@/app/component/PlaceSection/PlaceSection";
import { cities } from "@/Data/dummyData";

function ManageAreas() {
  return (
    <>
      <div className="mb-6 text-left">
        <h1 className="relative inline-block text-2xl font-semibold text-gray-700 sm:text-2xl md:text-3xl">
          Manage Areas
          <span className="block h-1 bg-[#BE5103] rounded mt-1 w-1/2 mx-auto" />
        </h1>
      </div>
      <div className="flex justify-end items-center">
        {/* <div className="">
          <FormInput
            placeholder="Search City"
            variant="rounded"
            wrapperClassName="w-[400px]"
            leftIcon={<Image src={logo} alt="User" width={20} height={20} />}
          />
        </div> */}
        <div>
          <AppButton
            label="View All"
            onClick={() => console.log("Add City")}
            className="px-5 text-sm"
          />
        </div>
      </div>
      {/* <CitySections /> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {/* United States Section */}
        <div className="mb-6 sm:mb-8 px-2 sm:px-4 py-4 sm:py-6">
          <h2 className="text-xl sm:text-2xl font-extrabold font-hero text-primary mb-4 text-start mx-4">
            United States
          </h2>
          <div className="space-y-4 max-w-lg mx-auto w-full">
            {cities.unitedStates.map((city) => (
              <div key={city.id} className="border-b-2  pb-4">
                <button
                  // onClick={() => handleLocationSelect(city.id)}
                  className="w-full relative h-14 sm:h-16 rounded-xl overflow-hidden border-2 border-primary"
                >
                  <Image
                    src={city.image || "/placeholder.svg"}
                    alt={`${city.name} skyline`}
                    fill
                    className="object-cover"
                    priority={city.id === "washington-dc"}
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center px-3 sm:px-4">
                    <span className="text-white text-base sm:text-xl font-bold font-hero">
                      {city.name}{" "}
                      <span className="text-primary font-hero">
                        | {city.state}
                      </span>
                    </span>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Canada Section */}
        <div className="mb-6 sm:mb-8 px-2 sm:px-4 py-4 sm:py-6">
          <h2 className="text-xl sm:text-2xl font-extrabold font-hero text-primary mb-4 text-start mx-4">
            Canada
          </h2>
          <div className="space-y-4 max-w-lg mx-auto w-full">
            {cities.canada.map((city) => (
              <div key={city.id} className="border-b-2 pb-4">
                <button
                  // onClick={() => handleLocationSelect(city.id)}
                  className="w-full relative h-14 sm:h-16 rounded-xl overflow-hidden border-2 border-primary"
                >
                  <Image
                    src={city.image || "/placeholder.svg"}
                    alt={`${city.name} skyline`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center px-3 sm:px-4">
                    <span className="text-white text-base sm:text-xl font-bold">
                      {city.name}{" "}
                      <span className="text-primary">| {city.state}</span>
                    </span>
                  </div>
                </button>
              </div>
            ))}
          </div>

          {/* <div className="flex justify-center items-center mt-10 sm:mt-16 md:mt-20">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28">
              <Image
                src={coldbrew}
                alt="ColdBrew"
                fill
                className="object-contain"
              />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default ManageAreas;
