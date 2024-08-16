import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for routing

const Home = function ({ data }) {
  const [example, setExample] = useState(0);
  console.log("Hello from function");

  return (
    <div className="h-screen font-sans bg-gray-200">
      <div className="bg-blue-800 text-white py-12 h-full flex items-center">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Track the Latest in Cryptocurrency</h1>
          <p className="text-xl mb-6">Get real-time updates on your favorite crypto assets.</p>
          <Link to="/trending" className="bg-yellow-500 text-blue-800 py-2 px-4 rounded hover:bg-yellow-600">
            Explore Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
