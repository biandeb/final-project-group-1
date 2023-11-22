import { create } from "zustand";

export const useOrder = create((set) => ({
  productsOrdered: [],
  setProductForOrder: (product) =>
    set((state) => ({
      productsOrdered: [...state.productsOrdered, product],
    })),
  clearProductOrder: () => set({ productsOrdered: [] }),
}));
