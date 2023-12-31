import { jwtDecode } from "jwt-decode";
import Swal from "sweetalert2";
import { create } from "zustand";

let user = null;
let isLoggedIn = false;

const token = sessionStorage.getItem("token");
if (token) {
  try {
    user = jwtDecode(token).user;
    isLoggedIn = true;
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
  user: null,
  isLoggedIn: false,
  login: (newUser) => set({ user: newUser, isLoggedIn: true }),
  logout: () => set({ user: null, isLoggedIn: false }),
}));
