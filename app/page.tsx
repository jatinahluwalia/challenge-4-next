import Countries from "@/components/countries";
import axios from "axios";

const Home = async () => {
  const data = await axios.get(`http://localhost:4000/api`);
  const countries = data.data;
  return (
    <main className="bg-light-gray dark:bg-very-dark-blue-bg pt-16">
      <Countries countries={countries} />
    </main>
  );
};

export default Home;
