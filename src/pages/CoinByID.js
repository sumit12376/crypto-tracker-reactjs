import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Coindetail from "./Coindetail";

const CoinByID = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((response) => response.json())
      .then((response) => {
        setData(response);
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div>
      <Coindetail data={data} />
    </div>
  );
};

export default CoinByID;
