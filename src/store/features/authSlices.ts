// src/features/auth/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  userRole: string;
}

const initialState: AuthState = {
  isAuthenticated: false,
  userRole: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.isAuthenticated = true;
      state.userRole = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.userRole = '';
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
