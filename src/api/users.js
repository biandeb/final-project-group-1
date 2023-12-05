const API_URL = import.meta.env.VITE_API_URL;

export const postUserFn = async (data) => {
  const response = await fetch(`${API_URL}/users`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("An error occurred while registering an user");
  }
  return data;
};


export const getUsersFn = async () => {
  const res = await fetch(`${API_URL}/users`);

  if (!res.ok) {
    throw new Error("An error occurred while getting users");
  }
  const data = await res.json();

  return data;
};

export const getUserByIdFn = async (id) => {
  const res = await fetch(`${API_URL}/users/${id}`);

  if (!res.ok) {
    throw new Error("An error occurred while getting the user");
  }

  const data = await res.json();
  return data;
};

export const putUserFn = async (data) => {
  const res = await fetch(`${API_URL}/users/${data.id}`, {
    method: "PUT",
    body: JSON.stringify({ ...data, id: undefined }),
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  });

  if (!res.ok) {
    throw new Error("An error occurred while editing an user");
  }

  const apiData = await res.json();
  
  return apiData;
};

export const putPasswordFn = async (data) => {
  console.log(data)
  const res = await fetch(`${API_URL}/users/put-password/${data.user.id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  });

  if (!res.ok) {
    throw new Error("An error occurred while reseting the password");
  }

  const newApidata = await res.json();
  
  return newApidata;
};

