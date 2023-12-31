import { create } from "zustand";
import { Anime } from "./app/info/[id]/page";
import { persist, createJSONStorage, devtools } from "zustand/middleware";

interface recentState {
  page: number;
  increase: (by: number) => void;
  decrease: (by: number) => void;
}
interface AnimeState {
  currentAnime: any;
  setCurrentAnime: (newAnime: Anime) => void;
}

interface qualityState {
  currentQuality: any;
  setCurrentQuality: (currentQuality: any) => void;
}

export const recentPageStore = create<recentState>()((set) => ({
  page: 1,
  increase: (by) => set((state) => ({ page: state.page + by })),
  decrease: (by) => set((state) => ({ page: state.page - by })),
}));

export const animeStore = create<AnimeState>()(
  devtools(
    persist(
      (set) => ({
        currentAnime: "",
        setCurrentAnime: (newAnime) => set({ currentAnime: newAnime }),
      }),
      {
        name: "bear-storage",
      }
    )
  )
);

export const qualityStore = create<qualityState>((set) => ({
  currentQuality: "",
  setCurrentQuality: (by) => set((state) => ({ currentQuality: by })),
}));
