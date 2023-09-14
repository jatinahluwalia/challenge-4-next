import BackButton from "@/components/back-button";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";

const Page = async ({ params }: { params: { id: string } }) => {
  const countryById = require("../../../data.json").find(
    (country: any) => country.alpha3Code === params.id
  );
  return (
    <main className="bg-light-gray dark:bg-very-dark-blue-bg grow">
      <section className="w-[min(1600px,100%)] mx-auto mt-14 flex flex-col gap-20">
        <BackButton />
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="relative">
            <Image
              src={countryById.flags.png}
              alt={countryById.name}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto shadow-md"
            />
          </div>
          <article className="p-10 flex flex-col">
            <h2 className="text-4xl font-bold">{countryById.name}</h2>
            <div className="mt-10 grid lg:grid-cols-2 lg:grid-rows-5 gap-2.5 grid-flow-col">
              <p className="text-regular">
                Native Name:{" "}
                <span className="text-dark-gray">
                  {" "}
                  {countryById.nativeName}
                </span>
              </p>
              <p className="text-regular">
                Population:{" "}
                <span className="text-dark-gray">
                  {" "}
                  {countryById.population}
                </span>
              </p>
              <p className="text-regular">
                Region:{" "}
                <span className="text-dark-gray"> {countryById.region} </span>
              </p>
              <p className="text-regular">
                Sub Region:{" "}
                <span className="text-dark-gray"> {countryById.subRegion}</span>
              </p>
              <p className="text-regular">
                Capital:{" "}
                <span className="text-dark-gray"> {countryById.capital} </span>
              </p>
              <p className="text-regular">
                Top Level Domain:{" "}
                <span className="text-dark-gray">
                  {" "}
                  {countryById.topLevelDomain}
                </span>
              </p>
              <p className="text-regular">
                Currencies:{" "}
                <span className="text-dark-gray">
                  {" "}
                  {countryById.currencies
                    .map((currency: any) => currency.name)
                    .join(", ")}
                </span>
              </p>
              <p className="text-regular">
                Languages:{" "}
                <span className="text-dark-gray">
                  {" "}
                  {countryById.languages
                    .map((language: any) => language.name)
                    .join(", ")}
                </span>
              </p>
            </div>
            {countryById.borders && (
              <div className="mt-auto">
                <div className="text-xl font-semibold grid grid-flow-col items-center gap-4">
                  <span>Border Countries: </span>
                  <div className="flex flex-wrap gap-3">
                    {countryById.borders.map((border: any) => (
                      <Link
                        href={`/country/${border}`}
                        key={border}
                        className="bg-dark-blue rounded-md px-4 py-2 shadow-md"
                      >
                        {border}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </article>
        </div>
      </section>
    </main>
  );
};

export default Page;
