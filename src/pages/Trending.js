import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";

const Trending = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // API FETCH LOGIC
    const url =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setFilteredData(data); 
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const results = data.filter(coin =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(results);
  }, [searchTerm, data]);

  if (data.length === 0) {
    return <h1 className="text-4xl h-[90vh] font-semibold text-black">Loading...</h1>;
  } else {
    return (
      <div className="bg-gray-900 min-h-screen p-6">
        <div className="flex justify-center mb-6">
          <input 
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className=" w-1/2 p-3 border border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-400 transition-colors"
          />
        </div>
        <Cards data={filteredData} />
      </div>
    );
  }
};

export default Trending;
