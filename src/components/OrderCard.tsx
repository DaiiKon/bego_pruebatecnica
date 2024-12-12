import React from "react";
import { useNavigate } from "react-router-dom";

interface OrderCardProps {
  orderId: string;
  type: string;
  status: string;
  pickupLocation: string;
  dropoffLocation: string;
  pickupTime: string;
  dropoffTime: string;
  countdown: string;
  avatar: string;
}

const OrderCard: React.FC<OrderCardProps> = ({
  orderId,
  type,
  status,
  pickupLocation,
  dropoffLocation,
  pickupTime,
  dropoffTime,
  countdown,
  avatar,
}) => {
  const navigate = useNavigate();

  const handleResumeClick = () => {
    // Redirige a la página de detalles con los datos del pedido
    navigate(`/cargo-details/${orderId}`, {
      state: {
        orderId,
        type,
        status,
        pickupLocation,
        dropoffLocation,
        pickupTime,
        dropoffTime,
        countdown,
      },
    });
  };

  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow flex flex-col space-y-4">
      <div className="flex items-start space-x-4">
        {/* Avatar */}
        <img
          src={avatar}
          alt="Avatar"
          className="w-12 h-12 rounded-full object-cover"
        />

        {/* Detalles del pedido */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-4">
            <div>
              <span className="font-bold">{type}</span>
              <span className="text-sm text-gray-400 ml-2">{status}</span>
            </div>
            <span className="text-yellow-500">{orderId}</span>
          </div>
          <div className="text-sm">
            <p>
              <strong>Pickup:</strong> {pickupLocation} at {pickupTime}
            </p>
            <p>
              <strong>Dropoff:</strong> {dropoffLocation} at {dropoffTime}
            </p>
          </div>
          <div className="mt-2 text-yellow-400">
            Start pickup in: {countdown}
          </div>
        </div>
      </div>

      {/* Botón Resume */}
      <button
        className="w-full bg-yellow-500 text-black rounded py-2 flex items-center justify-center space-x-2"
        onClick={handleResumeClick}
      >
        <span>Resume</span>
        <span role="img" aria-label="eye">
          👁️
        </span>
      </button>
    </div>
  );
};

export default OrderCard;
