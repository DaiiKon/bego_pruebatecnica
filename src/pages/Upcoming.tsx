import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import OrderCard from "../components/OrderCard";
import { getUpcomingOrders } from "../services/apiService";
import Avatar from "../assets/avatar.png"; 

// Definición de la interfaz para los pedidos
interface Order {
  id: string;
  type: string;
  status: string;
  pickup: string;
  dropoff: string;
  pickupTime: string;
  dropoffTime: string;
  countdown?: string; 
}

// Función para calcular el tiempo restante basado en pickupTime
const calculateCountdown = (pickupTime: string) => {
  const pickupDate = new Date(pickupTime);
  const now = new Date();
  const difference = pickupDate.getTime() - now.getTime();

  if (difference <= 0) {
    return "Ready for pickup";
  }

  const hours = Math.floor(difference / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  return `${hours}h ${minutes}m`;
};

const Upcoming = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getUpcomingOrders();
        console.log("API Response:", data);

        // Verifica si `result` existe y es un array
        if (!Array.isArray(data.result)) {
          throw new Error("Unexpected API response: result is not an array");
        }

        // Agrega el campo `countdown` calculado
        const ordersWithCountdown = data.result.map((order: Order) => ({
          ...order,
          countdown: calculateCountdown(order.pickupTime),
        }));

        setOrders(ordersWithCountdown);
      } catch (err) {
        console.error("Error fetching orders:", err);
        setError("Failed to fetch orders. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <div className="text-white text-center mt-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center mt-4">{error}</div>;
  }

  if (orders.length === 0) {
    return <div className="text-white text-center mt-4">No orders found.</div>;
  }

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Navbar */}
      <Navbar />
      <div className="p-4">
        {/* Barra de búsqueda */}
        <SearchBar />
        <div className="mt-6 space-y-4">
          {/* Mapeo de pedidos */}
          {orders.map((order) => (
            <OrderCard
              key={order.id}
              orderId={order.id}
              type={order.type}
              status={order.status}
              pickupLocation={order.pickup}
              dropoffLocation={order.dropoff}
              pickupTime={order.pickupTime}
              dropoffTime={order.dropoffTime}
              countdown={order.countdown || "N/A"} // Pasamos el countdown
              avatar={Avatar} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
