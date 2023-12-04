import { create } from "zustand";

export const useUser = create((set) => ({
  userId: null,
  setUserToEdit: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));
