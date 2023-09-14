import axios from "axios";
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
        <Link
          href={"/"}
          className="w-max pl-7 pr-9 py-2 shadow-md bg-white dark:bg-dark-blue rounded-md flex items-center gap-3"
        >
          <IoIosArrowRoundBack
            className="text-black dark:text-white"
            size="2rem"
          />
          <span>Back</span>
        </Link>
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
          <article className="p-10">
            <h2 className="text-4xl font-bold">{countryById.name}</h2>
            <div className="mt-10"></div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Page;
