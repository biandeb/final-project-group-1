import { create } from "zustand";

export const useSession = create((set) => ({
  user: null,
  isLoggedIn: false,
  login: (newUser) => set({ user: newUser, isLoggedIn: true }),
  logaut: () => set({ user: null, isLoggedIn: false }),
}));
