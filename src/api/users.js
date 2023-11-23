const API_URL = import.meta.env.VITE_API_URL;

export const postUserFn = async (data) => {
  const response = await fetch(`${API_URL}/users`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Ocurrio un error al intentar registrar un usuario");
  }
  return data;
};
