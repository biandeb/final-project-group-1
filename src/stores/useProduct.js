import { create } from "zustand";

export const useProduct = create((set) => ({
  blog: null,
  setProductIsEdit: (product) => set({ product }),
  clearProduct: () => set({ product: null }),
}));
