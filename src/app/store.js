import { configureStore } from '@reduxjs/toolkit'
import strSlice from '../features/counter/strSlice'

export default configureStore({
  reducer: {
    hash: strSlice
  }
})
