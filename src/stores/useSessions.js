import { jwtDecode } from "jwt-decode";
import Swal from "sweetalert2";
import { create } from "zustand";


const token = sessionStorage.getItem("token");


let initialState = {
  user: null,
  isLoggedIn: false,
};

if (token) {
  try {
    const decodedToken = jwtDecode(token);
    initialState = {
      user: decodedToken.user,
      isLoggedIn: true,
    };
  } catch (e) {
    Swal.fire({
      title: "Error",
      text: "Sign in again",
      icon: "error",
    });
    sessionStorage.removeItem("token");
  }
}


export const useSession = create((set) => ({
  ...initialState,
  login: (newUser) => {
    set({ user: newUser, isLoggedIn: true });
    sessionStorage.setItem("token",);
  },
  logout: () => {
    set({ user: null, isLoggedIn: false });
    sessionStorage.removeItem("token");
  },
}));
