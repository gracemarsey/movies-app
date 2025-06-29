import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface CounterState {
  username?: string;
  setUsername: (username: string) => void;
  searches: string[];
  addSearch: (search: string) => void;
  removeSearch: (search: string) => void;
}

export const useCounterStore = create<CounterState>()(
  persist(
    (set) => ({
      username: undefined,
      setUsername: (username: string) => set({ username }),
      searches: [],
      addSearch: (search: string) =>
        set((state) => ({
          searches: [...state.searches, search],
        })),
      removeSearch: (search: string) =>
        set((state) => ({
          searches: state.searches.filter((s) => s !== search),
        })),
    }),
    {
      name: 'counter-storage', // unique name for your storage item
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    },
  ),
);
