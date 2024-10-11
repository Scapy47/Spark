import { create } from 'zustand'

const useStore = create((set) => ({
    navMap: "",
    mapNavigation: (screen) => set(state => ({ navMap: screen }))
}))
