import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex flex-col md:flex-row border-b shadow-lg bg-gray-800 text-white">
      <div className="flex justify-between items-center p-4 md:px-8">
        <NavLink to={"/"}>
          <h1 className=" text-3xl font-black cursor-pointer">
            Crypto<span className="text-blue-400">Tracker</span>
          </h1>
        </NavLink>
  
      </div>
      <nav className="flex flex-col md:flex-row font-bold text-lg md:text-xl gap-4 md:gap-8 bg-gray-700 md:bg-transparent">
        <NavLink
          to={"/top10"}
          className={({ isActive }) =>
            isActive
              ? "p-4 bg-blue-600 rounded underline"
              : "p-4 hover:bg-gray-600 rounded"
          }
        >
          Top10
        </NavLink>
        <NavLink
          to={"/trending"}
          className={({ isActive }) =>
            isActive
              ? "p-4 bg-blue-600 rounded underline"
              : "p-4 hover:bg-gray-600 rounded"
          }
        >
          Trending
        </NavLink>
        <NavLink
          to={"/watchlist"}
          className={({ isActive }) =>
            isActive
              ? "p-4 bg-blue-600 rounded underline "
              : "p-4 hover:bg-gray-600 rounded"
          }
        >
          Watchlist
        </NavLink>
   
      </nav>
    </div>
  );
}

export default Navbar;
