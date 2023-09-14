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
          <h2 className="font-bold text-regular mb-5">{name}</h2>
          <p className="text-small">
            Population: <span className="text-dark-gray"> {population} </span>
          </p>
          <p className="text-small">
            Region: <span className="text-dark-gray"> {region} </span>
          </p>
          <p className="text-small">
            Capital: <span className="text-dark-gray"> {capital} </span>
          </p>
        </div>
      </article>
    </Link>
  );
};

export default CountryCard;
