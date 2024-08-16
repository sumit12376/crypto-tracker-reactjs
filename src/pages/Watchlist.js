import React from "react";
import { useSelector } from "react-redux";
import Cards from "../components/Cards";

const Watchlist = () => {
  const watchlistdata = useSelector((store) => store.watchlist);

  console.log("Watchlist Data:", watchlistdata);

  return watchlistdata.length === 0 ? (
    <div>No data in watchlist</div>
  ) : (
    <div className="bg-gray-900">
      <Cards data={watchlistdata} />
    </div>
  );
};

export default Watchlist;
