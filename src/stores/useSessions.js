import { jwtDecode } from "jwt-decode";
import Swal from "sweetalert2";
import { create } from "zustand";

let user = null;
let isLoggedIn = false;

const token = sessionStorage.getItem('token');
if (token) {
  try {
    user = jwtDecode(token).user;
    isLoggedIn = true;
  } catch (e) {
    Swal.fire({
      title: 'Error',
      text: 'Inicie sesión nuevamente',
      icon: 'error',
    });
    sessionStorage.removeItem('token');
  }
}


export const useSession = create((set) => ({
  user,
  isLoggedIn,
  login: (newUser) => set({ user: newUser, isLoggedIn: true }),
  logout: () => {
    sessionStorage.removeItem('token');
    set({ user: null, isLoggedIn: false })
  },
}));