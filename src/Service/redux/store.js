import { configureStore } from '@reduxjs/toolkit'
import NavigationReducer from './Navigation'

export const store = configureStore({
  reducer: {
    Navigation: NavigationReducer
  },
})