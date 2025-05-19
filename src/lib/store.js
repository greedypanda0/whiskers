import { create } from "zustand";

const useStore = create((set) => ({
  metadata: {
    title: "Whiskers",
    description: "a writer app",
  },
  currentTab: "home",
  query: "",
  setQuery: (query) =>
    set(() => ({
      query: query,
    })),
  setCurrentTab: (tab) =>
    set(() => ({
      currentTab: tab,
    })),
  setMeta: (data) =>
    set((state) => ({
      metadata: { ...state.metadata, ...data },
    })),
}));

export default useStore;
