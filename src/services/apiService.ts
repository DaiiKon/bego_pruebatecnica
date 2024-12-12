import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://129bc152-6319-4e38-b755-534a4ee46195.mock.pstmn.io/orders",
    headers: {
      "Content-Type": "application/json",
    },
  });

// Obtener pedidos próximos
export const getUpcomingOrders = async () => {
    const response = await apiClient.get("/upcoming");
    return response.data; };

// Obtener todos los pedidos
export const getAllOrders = async () => {
  const response = await apiClient.get("");
  return response.data;
};
