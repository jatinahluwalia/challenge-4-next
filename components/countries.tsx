"use client";

import { ChangeEvent, useState } from "react";
import CountryCard from "./country-card";
import { AiOutlineSearch } from "react-icons/ai";

type Props = {
  countries: any[];
};
const Countries = ({ countries }: Props) => {
  const [data, setData] = useState<any[]>(countries);

  const regions = countries?.reduce((acc: any[], country) => {
    if (acc.includes(country.region)) return acc;
    return [...acc, country.region];
  }, []);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const regex = new RegExp(e.target.value, "i");
    setData(countries.filter((country) => regex.test(country.name)));
  };

  return (
    <section className="min-h-screen">
      <div className="flex justify-between mx-auto p-2 w-[min(100%,1600px)] mb-8">
        <div className=" relative h-16 py-5 px-8 items-center flex gap-5 rounded-md overflow-hidden bg-white dark:bg-dark-blue">
          <AiOutlineSearch size="100% " />
          <input
            type="text"
            placeholder="Search for a country..."
            onChange={handleSearch}
            className="bg-transparent focus:border-none focus:outline-none"
          />
        </div>
      </div>
      <div className="px-2 mx-auto w-[min(100%,1600px)] grid lg:grid-cols-4 gap-12">
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
