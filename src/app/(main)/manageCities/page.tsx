"use client";
import React, { useState } from "react";
import Image from "next/image";
import FormInput from "@/app/component/AppInput/AppInput";
import CitySections from "@/app/component/PlaceSection/PlaceSection";
import logo from "../../../../public/images/coldbrew-single.png";
import { Cities, City } from "@/Types/types";

function ManageCities() {
  const citiesData: City[] = require("@/Data/cities");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const cities: Cities = citiesData.reduce(
    (acc: Cities, city: City) => {
      const cityName = city.name.trim();
      if (!cityName) return acc;
      const firstLetter = cityName[0].toUpperCase();
      if (/[A-Z]/.test(firstLetter)) {
        if (!acc[firstLetter]) {
          acc[firstLetter] = new Set<string>();
        }
        acc[firstLetter].add(cityName);
      }
      return acc;
    },
    Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ").reduce(
      (acc: Cities, letter: string) => {
        acc[letter] = new Set<string>();
        return acc;
      },
      {} as Cities
    )
  );

  const citiesArray = Object.fromEntries(
    Object.entries(cities).map(([letter, citySet]) => [
      letter,
      Array.from(citySet)
        .filter((city) =>
          city.toLowerCase().includes(searchTerm.toLowerCase().trim())
        )
        .sort(),
    ])
  ) as { [key: string]: string[] };

  return (
    <>
      <div className="mb-6 text-left">
        <h1 className="relative inline-block text-2xl font-semibold text-gray-700 sm:text-2xl md:text-3xl">
          Manage Cities
          <span className="block h-1 bg-[#BE5103] rounded mt-1 w-1/2 mx-auto" />
        </h1>
      </div>
      <div className="flex justify-start items-center">
        <div>
          <FormInput
            placeholder="Search City"
            variant="rounded"
            wrapperClassName="w-[400px]"
            leftIcon={<Image src={logo} alt="User" width={20} height={20} />}
            value={searchTerm}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchTerm(e.target.value)
            }
          />
        </div>
      </div>
      <div>
        <CitySections cities={citiesArray} />
      </div>
    </>
  );
}

export default ManageCities;
