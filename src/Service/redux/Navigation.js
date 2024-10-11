import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "home"
}

export const Navigation = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    home(state){
        state.value = "home"
    }
  },
})

export const { home } = Navigation.actions

export default Navigation.reducer