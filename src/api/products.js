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

// export const putProductsFn = async (data, isAvailable) => {
//   const token = sessionStorage.getItem('token');

//   if (isAvailable) {
//     const { id, isAvailable } = data;

//     const res = await fetch(`${API_URL}/products/${id}`, {
//       method: 'PUT',
//       body: JSON.stringify({ isAvailable }),
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//       },
//     });

    

//     const resData = await res.json();

//     if (!res.ok) {
//       throw new Error(resData.message || 'An error occurred changing product availability');
//     }
//   } else {
//     // Si isAvailable no está presente, asume que se debe actualizar todo el producto
//     const { id, ...updatedData } = data;

//     const res = await fetch(`${API_URL}/products/${id}`, {
//       method: 'PUT',
//       body: JSON.stringify(updatedData),
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     if (!res.ok) {
//       throw new Error('An error occurred while editing the product');
//     }
//   }
// };

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

    // Puedes retornar datos adicionales si es necesario
    return resData;
  } catch (error) {
    // Puedes manejar errores aquí
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

// export const productAvailableFn = async (productId, isAvailable) => {
//   console.log("toggle");
//   const token = sessionStorage.getItem('token');

//     // const res = await fetch(`${API_URL}/products/${data.id}`, {
//     //     method: 'PUT',
//     //     body: JSON.stringify({ ...data, isAvailable: true }),
//     //     headers: {
//     //       "Content-Type": "application/json",
//     //         Authorization: `Bearer ${token}`,
//     //     }
//     // })

//     const res = await fetch(`${API_URL}/products/${productId}`, {
//       method: 'PUT',
//       body: JSON.stringify({ isAvailable }),
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       }
//     });

//     const resData = await res.json();

//     if(!res.ok){
//         throw new Error(resData.message || 'An error occurred changing product availability')
//     }
// };
