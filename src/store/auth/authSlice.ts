import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from '../../types/types';

const initialState: AuthState = {
  token: null,
  user: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      localStorage.setItem('authToken', action.payload);
    },
    logout: (state) => {
      state.token = null;
      localStorage.removeItem('authToken');
    },
    rehydrateToken: (state) => {
      const token = localStorage.getItem('authToken');
      if (token) {
        state.token = token;
      }
    }
  }
});

export const { loginSuccess, logout, rehydrateToken } = authSlice.actions;

export default authSlice.reducer;