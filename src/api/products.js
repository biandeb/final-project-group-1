const API_URL = import.meta.env.VITE_API_URL;

export const getProductsFn = async () => {
  const res = await fetch(`${API_URL}/products`);

  if (!res.ok) {
    throw new Error("An error occurred while getting the products");
  }

  const data = await res.json();
  return data;
};

// export const getProducts = async () => {
//   const res = await fetch(`${API_URL}/products`);

//   if (!res.ok) {
//     throw new Error('An error occurred while getting the products');
//   }

//   const data = await res.json();
//   return data;
// };

export const postProductsFn = async (data) => {
  const res = await fetch(`${API_URL}/products`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });
  if (!res.ok) {
    throw new Error("An error occurred while loading the product");
  }
};

export const putProductsFn = async (data) => {
  const res = await fetch(`${API_URL}/products/${data.id}`, {
    method: "put",
    body: JSON.stringify({ ...data, id: undefined }),
    headers: { "Content-Type": "application/json" },
  });
  if (!res.ok) {
    throw new Error("Ocurrio un error al cargar los product");
  }
};

export const deleteProductFn = async (productId) => {
  const res = await fetch(`${API_URL}/products/${productId}`, {
    method: "DELETE",
  });
  if (!res.ok) {
    throw new Error("Ocurrió un error al eliminar el producto");
  }
};

export const toggleProductAvailabilityFn = () => {
  console.log("toggle");
};
