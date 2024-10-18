import { create } from 'zustand'

export const useStore = create((set) => ({
    navMap: "",
    mapNavigation: (screen: String) => set({ navMap: screen }),
}))
