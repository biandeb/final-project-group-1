const API_URL = import.meta.env.VITE_API_URL;

export const getProductsFn = async () => {
  const res = await fetch(`${API_URL}/products`);

  if (!res.ok) {
    throw new Error("Ocurrio un error al traer los blogs");
  }

  const data = await res.json();
  return data;
};

export const postProductsFn = async (data) => {
  const res = await fetch(`${API_URL}/products`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });
  if (!res.ok) {
    throw new Error("Ocurrio un error al cargar un  los product");
  }

};
