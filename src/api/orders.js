const API_URL = import.meta.env.VITE_API_URL;

//traer ordenes de la DB
export const getOrdersFn = async () => {
  const res = await fetch(`${API_URL}/orders`);

  if (!res.ok) {
    throw new Error("An error occured while getting the orders");
  }

  const data = await res.json();
  return data;
};

//Fn para agregar una orden a la DB
export const postOrderFn = async (data) => {
  const res = await fetch(`${API_URL}/orders`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("An error occured while posting an order");
  }
};
