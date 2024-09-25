import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import coinReducer from './slots/coinSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    coin: coinReducer,
  }
});

export default store;