"use client";

import { ChangeEvent, useEffect, useState } from "react";
import CountryCard from "./country-card";
import { AiOutlineSearch } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";

type Props = {
  countries: any[];
};
const Countries = ({ countries }: Props) => {
  const [data, setData] = useState<any[]>(countries);
  const [dropDown, setDropDown] = useState<boolean>(false);
  const [region, setRegion] = useState<null | string>(null);

  const regions = countries?.reduce((acc: any[], country) => {
    if (acc.includes(country.region)) return acc;
    return [...acc, country.region];
  }, []);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const regex = new RegExp(e.target.value, "i");
    setData(countries.filter((country) => regex.test(country.name)));
  };

  const handleRegion = (region: string | null) => {
    setRegion(region);
  };

  useEffect(() => {
    if (region) {
      setData(countries.filter((country) => country.region === region));
    } else {
      setData(countries);
    }
  }, [region, countries]);

  return (
    <section className="min-h-screen">
      <div className="flex justify-between mx-auto p-2 w-[min(100%,1300px)] mb-8">
        <div className=" relative h-16 py-5 px-8 items-center flex gap-5 rounded-md overflow-hidden bg-white dark:bg-dark-blue">
          <AiOutlineSearch size="100% " />
          <input
            type="text"
            placeholder="Search for a country..."
            onChange={handleSearch}
            className="bg-transparent focus:border-none focus:outline-none"
          />
        </div>
        <button
          type="button"
          className="bg-white min-w-[200px] dark:bg-dark-blue flex items-center gap-3 justify-between rounded-md shadow-md px-5 relative"
          onClick={() => setDropDown(!dropDown)}
        >
          <span>{region ? region : "Filter by region"}</span>
          {dropDown && (
            <div className="absolute top-full left-0 w-full p-5 bg-white dark:bg-dark-blue rounded-md shadow-md mt-2 z-10 flex flex-col gap-2">
              <p
                className="text-regular text-left"
                onClick={() => handleRegion(null)}
              >
                All
              </p>
              {regions.map((region: any) => (
                <p
                  key={region}
                  className="text-regular text-left"
                  onClick={() => handleRegion(region)}
                >
                  {region}
                </p>
              ))}
            </div>
          )}
          <BsChevronDown />
        </button>
      </div>
      <div className="px-2 mx-auto w-[min(100%,1300px)] grid lg:grid-cols-4 gap-12">
        {data?.map((country: any) => (
          <CountryCard
            key={country.numericCode}
            id={String(country.alpha3Code)}
            flag={country.flags.png}
            name={country.name}
            region={country.region}
            capital={country.capital}
            population={country.population}
          />
        ))}
      </div>
    </section>
  );
};

export default Countries;
