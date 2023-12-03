import { create } from "zustand";

let user = null;
let isLoggedIn = false;

export const useSession = create((set) => ({
  user,
  isLoggedIn,
  login: (newUser) => set({ user: newUser, isLoggedIn: true }),
  logout: () => set({ user: null, isLoggedIn: false }),
}));
