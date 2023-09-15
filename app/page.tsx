import Countries from "@/components/countries";

const Home = async () => {
  // const data = await fetch(`/api/countries`);
  const countries = require("../data.json");
  return (
    <main className="bg-light-gray dark:bg-very-dark-blue-bg pt-16 flex flex-col grow">
      <Countries countries={countries} />
    </main>
  );
};

export default Home;
