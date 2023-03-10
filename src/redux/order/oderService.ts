import axios from "axios";
import { API_URL } from "utils/index";

// CREATE ORDER
export const createOrder = async (token: string, orderData: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const config1 = {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_WHATSAPP_TOKEN}`,
    },
  };

  const { data } = await axios.post(`${API_URL}/order`, orderData, config);
  // if (data._id) {
  //   const datas = {
  //     messaging_product: "whatsapp",
  //     to: "221775867968",
  //     text: {
  //       preview_url: true,
  //       body: `*${orderData.shippingAddress.firstname} ${orderData.shippingAddress.firstname} vient de passer une commande Numéro: ${data._id}*
  //       Numéro de téléphone: _${orderData.shippingAddress.phone}_
  //       Lien de la commande: http://localhost:3000/dashboard/order/${data._id}
  //       `,
  //     },
  //   };

  //   await axios.post(
  //     "https://graph.facebook.com/v15.0/106694318979992/messages",
  //     datas,
  //     config1
  //   );
  // }
  return data;
};

// GET ORDER
export const getOrderById = async (token: any, id: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.get(`${API_URL}/order/${id}`, config);

  return data;
};

// GET ALL ORDERS
export const getAllOrders = async (token: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.get(`${API_URL}/order`, config);
  return data;
};

// GET MY ORDERS
export const getMyOrders = async (token: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.get(`${API_URL}/order/myorders`, config);
  return data;
};

// DELETE PRODUCT
export const deleteOrder = async (id: string, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.delete(`${API_URL}/order/${id}`, config);

  return data;
};

// UPDATE INTO PAID
export const updatePaid = async (id: string, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  console.log(axios.defaults.headers);
  const { data } = await axios.put(`${API_URL}/order/${id}/paid`, {}, config);

  return data;
};
// UPDATE INTO PAID
export const updateDelivered = async (id: string, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.put(
    `${API_URL}/order/${id}/delivered`,
    {},
    config
  );

  return data;
};

const orderService = {
  createOrder,
  getOrderById,
  getMyOrders,
  getAllOrders,
  deleteOrder,
  updatePaid,
  updateDelivered,
};

export default orderService;
