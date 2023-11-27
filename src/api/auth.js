const API_URL = import.meta.env.VITE_API_URL;

export const postLoginFn = async (formData) => {
  const response = await fetch(`${API_URL}/users`);

  if(!response.ok){
    throw new Error("ocurrio un error al loguearse")
  }

  const users = await response.json();

  const foundUser = users.find((item) => item.email === formData.email && item.password === formData.password);


  if(!foundUser){
    throw new Error("Usuario o contraseña incorrecto")
  }

  return {...foundUser, password: undefined}
};
