import { create } from "zustand";

export const useOrder = create((set) => ({
  productsOrdered: [],
  setProductForOrder: (product) =>
    set((state) => ({
      productsOrdered: [...state.productsOrdered, product],
    })),
  setAmount: (productId, newQuantity) =>
    set((state) => {
      const updatedOrder = state.productsOrdered.map((item) =>
        item.id === productId ? { ...item, amount: newQuantity } : item,
      );
      return { productsOrdered: updatedOrder };
    }),
  updateExistingProduct: (productId, count) =>
    set((state) => {
      const updatedOrder = state.productsOrdered.map((item) =>
        item.id === productId ? { ...item, amount: count } : item,
      );
      
      return { productsOrdered: updatedOrder };
    }),
  deleteProductFromOrder: (productId) =>
    set((state) => ({
      productsOrdered: state.productsOrdered.filter(
        (item) => item.id !== productId,
      ),
    })),
  clearProductOrder: () => set({ productsOrdered: [] }),
}));
