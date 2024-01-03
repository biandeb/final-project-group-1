const API_URL = import.meta.env.VITE_API_URL;

export const getOrdersFn = async () => {
  const res = await fetch(`${API_URL}/orders`);

  if (!res.ok) {
    throw new Error("An error occurred while getting the orders");
  }

  const data = await res.json();
  return data;
};

export const postOrderFn = async (data) => {
  const res = await fetch(`${API_URL}/orders`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("An error occurred while posting an order");
  }
};
