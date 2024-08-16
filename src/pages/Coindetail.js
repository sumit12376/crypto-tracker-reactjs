import React from 'react';

function Coindetail({ data }) {
  if (!data) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-lg font-semibold">Loading...</div>
      </div>
    );
  }

  return (
    <div className="w-full mx-auto p-8 bg-white shadow-2xl rounded-xl">
      <div className="flex items-center mb-6">
        <img 
          src={data.image.large} 
          alt={`${data.name} logo`} 
          className="w-24 h-24 mr-6 rounded-full border-2 border-gray-300"
        />
        <h1 className="text-4xl font-extrabold text-gray-900">{data.name}</h1>
      </div>
      <p className="text-lg text-gray-700 mb-4 break-words">{data.description.en}</p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
          <p className="text-xl font-semibold text-gray-800">Symbol:</p>
          <p className="text-lg text-gray-600">{data.symbol.toUpperCase()}</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
          <p className="text-xl font-semibold text-gray-800">Current Price:</p>
          <p className="text-lg text-green-600">${data.market_data.current_price.usd}</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
          <p className="text-xl font-semibold text-gray-800">Market Cap:</p>
          <p className="text-lg text-gray-600">${data.market_data.market_cap.usd}</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
          <p className="text-xl font-semibold text-gray-800">Hash Algorithm:</p>
          <p className="text-lg text-gray-600">{data.hashing_algorithm}</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
          <p className="text-xl font-semibold text-gray-800">Price Change (24H):</p>
          <p className="text-lg text-gray-600">${data.market_data.price_change_24h.toFixed(2)}</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
          <p className="text-xl font-semibold text-gray-800">Price Change Percentage (24H):</p>
          <p className="text-lg text-gray-600">{data.market_data.price_change_percentage_24h.toFixed(2)}%</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
          <p className="text-xl font-semibold text-gray-800">All-Time High:</p>
          <p className="text-lg text-red-600">${data.market_data.ath.usd}</p>
        </div>
      </div>
      <button 
        onClick={() => alert('Buy feature is under development.')} 
        className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
      >
        Buy Now
      </button>
    </div>
  );
}

export default Coindetail;
