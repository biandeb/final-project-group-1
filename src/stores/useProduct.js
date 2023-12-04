import { create } from "zustand";

export const useProduct = create((set) => ({
  product: null,
  setProductIsEdit: (product) => set({ product }),
  clearProduct: () => set({ product: null }),
}));
