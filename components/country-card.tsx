import Image from "next/image";
import Link from "next/link";

type Props = {
  flag: string;
  id: string;
  name: string;
  region: string;
  capital: string;
  population: string;
};

const CountryCard = ({
  flag,
  name,
  region,
  capital,
  population,
  id,
}: Props) => {
  return (
    <Link href={`/country/${id}`}>
      <article className="rounded-md shadow-md overflow-hidden bg-white dark:bg-dark-blue">
        <div className="relative">
          <Image
            src={flag}
            alt={name}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full aspect-video object-fill"
          />
        </div>
        <div className="p-8 mb-5">
          <h2 className="font-bold lg:text-regular mb-5 text-2xl lg:text-xl">
            {name}
          </h2>
          <p className="lg:text-small text-normal">
            <span>Population: </span>{" "}
            <span className="text-very-dark-blue-text font-regular dark:text-white dark:opacity-80">
              {" "}
              {population}{" "}
            </span>
          </p>
          <p className="lg:text-small text-normal">
            <span>Region: </span>
            <span className="text-very-dark-blue-text font-regular dark:text-white dark:opacity-80">
              {" "}
              {region}{" "}
            </span>
          </p>
          <p className="lg:text-small text-normal">
            <span>Capital: </span>{" "}
            <span className="text-very-dark-blue-text font-regular dark:text-white dark:opacity-80">
              {" "}
              {capital}{" "}
            </span>
          </p>
        </div>
      </article>
    </Link>
  );
};

export default CountryCard;
