const API_URL = import.meta.env.VITE_API_URL;

export const getProductsFn = async () => {
  const res = await fetch(`${API_URL}/products`);

  if (!res.ok) {
    throw new Error("An error occurred while getting the products");
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
    throw new Error("An error occurred while loading the product");
  }
};

export const putProductsFn = async (data, isAvailable) => {
  console.log(data, isAvailable)
  const token = sessionStorage.getItem('token');
  const { id, ...restData } = data;

  try {
    const res = await fetch(`${API_URL}/products/${id}`, {
      method: 'PUT',
      body: JSON.stringify(isAvailable ? { isAvailable } : restData),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    const resData = await res.json();

    if (!res.ok) {
      throw new Error(resData.message || 'An error occurred while editing the product');
    }

    return resData;
  } catch (error) {

    throw new Error('An error occurred while processing the request');
  }
};

export const deleteProductFn = async (productId) => {
  const token = sessionStorage.getItem('token');

    const res = await fetch(`${API_URL}/products/${productId}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })

    const resData = await res.json();

    if(!res.ok){
        throw new Error(resData.message || 'An error occurred deleting the product')
    }
};
