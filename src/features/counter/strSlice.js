import { createSlice } from '@reduxjs/toolkit'

export const strSlice = createSlice({
  name: 'hash',
  initialState: {
    value: {}
  },
  reducers: {
    addItem: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value[action.payload] = (state.value[action.payload] || 0) + 1
    },
    removeItem: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value[action.payload] -= 1
    }
  }
})

// Action creators are generated for each case reducer function
export const { addItem, removeItem } = strSlice.actions

export default strSlice.reducer
