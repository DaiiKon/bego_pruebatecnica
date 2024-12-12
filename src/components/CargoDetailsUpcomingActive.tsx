import { useParams } from "react-router-dom";

const CargoDetailsUpcomingActive = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const decodedOrderId = decodeURIComponent(orderId || "");

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Navbar */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
        <button onClick={() => window.history.back()}>&lt;</button>
        <h1 className="text-lg font-bold">Cargo Details</h1>
        <button>🔔</button>
      </div>

      {/* Contenido principal */}
      <div className="p-4">
        {/* Card principal */}
        <div className="bg-gray-800 p-4 rounded-lg shadow mb-6">
          <h2 className="text-yellow-500">Referencia A1180</h2>
          <p className="text-xl font-bold">Order {decodedOrderId}</p>
          <div className="mt-4 text-sm">
            <p>
              <strong>Pickup:</strong> New York, 25 Mortada street, Gainalkes...
            </p>
            <p>
              <strong>Dropoff:</strong> New York, 1789 NJ-27, Edison, 08817...
            </p>
            <p className="mt-2 text-green-400">Status: Accepted</p>
            <p className="text-red-400">Status: On hold</p>
          </div>
        </div>

        {/* Progreso del pedido */}
        <div className="bg-gray-800 p-4 rounded-lg shadow mb-6 flex flex-col items-center">
          <img
            src="/assets/avatar.png"
            alt="Avatar"
            className="w-16 h-16 rounded-full object-cover mb-4"
          />
          <h3 className="text-lg font-bold">10:30 PM</h3>
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex items-center">
              <span className="text-yellow-500 mr-2">✔</span> Created Order
            </div>
            <div className="flex items-center">
              <span className="text-yellow-500 mr-2">✔</span> Accepted Order
            </div>
            <div className="flex items-center">
              <span className="text-gray-500 mr-2">⏳</span> Pickup set up by William
            </div>
            <div className="flex items-center">
              <span className="text-gray-500 mr-2">⏳</span> Pickup Completed
            </div>
          </div>
        </div>

        {/* Datos adicionales */}
        <div className="bg-gray-800 p-4 rounded-lg shadow mt-6">
          <h3 className="font-bold mb-2">Pickup Data</h3>
          <p>Isidro Fabela 10, Valle Verde y Terminal,</p>
          <p>50140 Toluca de Lerdo, México</p>
          <p>14 de Octubre 2023 • 10:30</p>
          <p>+525567890346</p>
          <p>johndoe@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default CargoDetailsUpcomingActive;
