import { useNavigate } from "react-router-dom";

const CargoOrdersActive = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Navbar */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
        <button onClick={() => window.history.back()}>&lt;</button>
        <h1 className="text-lg font-bold">Cargo Orders</h1>
        <button>🔔</button>
      </div>

      {/* Tabs */}
      <div className="flex justify-around mt-4 text-sm">
        <button className="border-b-2 border-yellow-500 pb-1">Upcoming</button>
        <button className="text-gray-400">Completed</button>
        <button className="text-gray-400">Past</button>
      </div>

      {/* Orders List */}
      <div className="p-4 space-y-4">
        {/* Order Card 1 */}
        <div className="bg-gray-800 p-4 rounded-lg shadow flex justify-between items-center">
          <div>
            <p className="text-yellow-500 font-bold">Order #7804GNZ</p>
            <p className="text-sm">
              <strong>Pickup:</strong> New York, 25 Mortada street...
            </p>
            <p className="text-sm">
              <strong>Dropoff:</strong> New York, 1789 NJ-27...
            </p>
          </div>
          <button
            className="bg-yellow-500 text-black rounded px-4 py-2"
            onClick={() => navigate("/cargo-details/7804GNZ")}
          >
            Resume
          </button>
        </div>

        {/* Order Card 2 */}
        <div className="bg-gray-800 p-4 rounded-lg shadow flex justify-between items-center">
          <div>
            <p className="text-yellow-500 font-bold">Order #ASI890EY4</p>
            <p className="text-sm">
              <strong>Pickup:</strong> New York, 25 Mortada street...
            </p>
            <p className="text-sm">
              <strong>Dropoff:</strong> New York, 1789 NJ-27...
            </p>
          </div>
          <button
            className="bg-yellow-500 text-black rounded px-4 py-2"
            onClick={() => navigate("/cargo-details/ASI890EY4")}
          >
            Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default CargoOrdersActive;
