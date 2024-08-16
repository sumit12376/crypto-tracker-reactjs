import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";

const Top10 = () => {
  const [data, setData] = useState([]);
console.log(data)
  useEffect(() => {
    const url = "https://api.coingecko.com/api/v3/search/trending/?precision=3";

    fetch(url).then((response) =>
      response.json().then((data) => setData(data))
    );
  }, []);

  return data.length === 0 ? (
    <h1 className="text-center text-2xl font-bold mt-10">Loading...</h1>
  ) : (
    <div className="bg-gray-900">
      <Cards data={data.coins} checker={"top10"} />
    </div>
  );
};

export default Top10;
