import Countries from "@/components/countries";
import axios from "axios";

const Home = async () => {
  // const data = await fetch(`/api/countries`);
  const countries = require("../data.json");
  return (
    <main className="bg-light-gray dark:bg-very-dark-blue-bg pt-16">
      <Countries countries={countries} />
    </main>
  );
};

export default Home;
