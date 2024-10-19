import { useEffect, useState } from "react";
import chucknorris from "../assets/images/chucknorris.jpg";

export const Facts = () => {
  const [fact, setFact] = useState({});

  useEffect(() => {
    async function fetchfact() {
      const res = await fetch("https://api.chucknorris.io/jokes/random");
      const data = await res.json();
      setFact(data);
    }
    fetchfact();
  }, []);

  return (
    <main>
      <span className="h-80 w-3/4 mt-28 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-full md:w-48 md:rounded-none md:rounded-s-lg"
          src={chucknorris}
          alt="Chuck Norris"
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Chuck Norris Facts
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {fact.value}
          </p>
        </div>
      </span>
    </main>
  );
};
