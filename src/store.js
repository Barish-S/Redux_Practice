import { configureStore } from '@reduxjs/toolkit'
import userReducer from './Reducer/userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
})

export default store;