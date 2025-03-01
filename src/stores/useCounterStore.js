import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCounterStore = create(
  persist(
    (set) => (
      {
        count: 0,
        increment: () => {
          set((state) => ({ count: state.count + 1 }));
        },
        decrement: () => {
          set((state) => ({
            count: state.count - 1,
          }));
        },
        resetCount: () => {
          set(() => ({
            count: 0,
          }));
        },
      },
      {
        name: "set-counter",
        getStorage: () => localStorage,
      }
    )
  )
);
