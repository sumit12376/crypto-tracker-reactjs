import React, { useState, useEffect } from 'react';
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { handleAdd, handleRemove } from '../store/watchlistSlice';
import { IoMdStarOutline, IoMdStar } from "react-icons/io";

const Card = ({ item, checker }) => {
  const dispatch = useDispatch();
  const watchlist = useSelector((store) => store.watchlist);
  const [isStarred, setIsStarred] = useState(false);

  useEffect(() => {
    setIsStarred(watchlist.some((i) => i.id === item.id));
  }, [watchlist, item.id]);

  const handleStarClick = () => {
    if (isStarred) {
      dispatch(handleRemove(item));
    } else {
      dispatch(handleAdd(item));
    }
    setIsStarred(!isStarred);
  };

  return (
    <div className="flex flex-col bg-gray-900 text-white w-full border border-gray-700 my-4 rounded-lg shadow-lg p-4 transition-transform transform hover:-translate-y-1 hover:shadow-xl hover:bg-gray-800 sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
      <div className="flex items-center gap-4">
        <abbr title="Click here to know more about this coin">
        <Link to={`/trending/${item.id}`}>

            <img
              src={checker === "top10" ? item.thumb : item.image}
              alt={item.name}
              className="w-16 h-16 object-cover rounded-full transition-transform transform hover:scale-110"
            />
          </Link>
        </abbr>
        <div className="flex flex-col flex-grow">
          <h2 className="text-xl font-bold text-teal-400">{item.name}</h2>
          <h3 className="text-lg font-semibold text-gray-400">{item.symbol}</h3>
        </div>
        <div
          onClick={handleStarClick}
          className={`text-3xl cursor-pointer transition-colors ${isStarred ? 'text-yellow-400' : 'text-gray-500'}`}
        >
          {isStarred ? <IoMdStar /> : <IoMdStarOutline />}
        </div>
      </div>

      <div className="flex items-center gap-4 mt-4">
        {!checker && (
          <h2 className="border rounded-full p-2 border-green-400 text-sm text-green-300 animate-pulse bg-gray-800">
            ${item.price_change_24h.toFixed(3)}
          </h2>
        )}
        <div className={`text-2xl border p-2 rounded-full ${item.price_change_24h > 0 ? 'border-green-400 text-green-400' : 'border-red-400 text-red-400'}`}>
          {item.price_change_24h > 0 ? <FaArrowTrendUp className="animate-bounce" /> : <FaArrowTrendDown className="animate-bounce" />}
        </div>
      </div>

      <h2 className="text-3xl font-bold text-teal-300 mt-4">
        ${checker === "top10" ? item.data.price.toFixed(2) : item.current_price.toFixed(2)}
      </h2>
      <div className="flex flex-col gap-1 mt-2 text-gray-400">
        <h3 className="text-sm">
          Market Cap: ${checker === "top10" ? item.data.market_cap : item.market_cap}
        </h3>
        <h3 className="text-sm">
          Total Volume: ${checker === "top10" ? item.data.total_volume : item.total_volume}
        </h3>
      </div>
    </div>
  );
};

export default Card;
