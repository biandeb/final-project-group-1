import { create } from "zustand";

export const useTable = create((set) => ({
  tablenumberForOrder: null,
  setTableNumber: (tablenumber) => set({ tablenumberForOrder: tablenumber }),
  clearTableNumber: () => set({ tablenumberForOrder: null }),
}));
