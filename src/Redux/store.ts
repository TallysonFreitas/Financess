import { configureStore } from '@reduxjs/toolkit'
import ValoresSlice from './Reducers/ValoresSlice'

const store = configureStore({
  reducer: { valores: ValoresSlice }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
