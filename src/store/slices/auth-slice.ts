// src/features/auth/authSlice.ts
import { MainRole, MemberSubRole } from '@/types/role-types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '@/api/axios-instance';
import { API_ENDPOINTS } from '@/routes/api-end-points';

interface AuthState {
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  mainRole: MainRole | null;
  subRole?: MemberSubRole;
  email?: string;
  username?: string;
  token?: string;
}

const initialState: AuthState = {
  isAuthenticated: false,
  loading: false,
  error: null,
  mainRole: null,
  subRole: MemberSubRole.NONE,
};


export const loginMember = createAsyncThunk(
  'auth/loginUser',
  async (
    {
      email,
      password,
      role,
    }: { email: string; password: string; role: MainRole },
    thunkAPI
  ) => {
    try {
      const response = await api.post(API_ENDPOINTS.AUTH.LOGIN, {
        email,
        password,
        role,
      });

      return {
        token: response.data.token,
        email,
        mainRole: role,
        subRole: response.data.subRole as MemberSubRole,
        username: response.data.username,
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data?.msg || 'Login failed');
    }
  }
);
export const loginStudent = createAsyncThunk(
  'auth/loginUser',
  async (
    {
      email,
      password,
      role,
    }: { email: string; password: string; role: MainRole },
    thunkAPI
  ) => {
    try {
      const response = await api.post(API_ENDPOINTS.AUTH.LOGIN, {
        email,
        password,
        role,
      });

      return {
        token: response.data.token,
        email,
        mainRole: role,
        subRole: response.data.subRole as MemberSubRole,
        username: response.data.username,
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data?.msg || 'Login failed');
    }
  }
);

export const signUpStudent = createAsyncThunk(
  'auth/loginUser',
  async (
    {
      email,
      password,
      role,
    }: { email: string; password: string; role: MainRole },
    thunkAPI
  ) => {
    try {
      const response = await api.post(API_ENDPOINTS.AUTH.LOGIN, {
        email,
        password,
        role,
      });

      return {
        token: response.data.token,
        email,
        mainRole: role,
        subRole: response.data.subRole as MemberSubRole,
        username: response.data.username,
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data?.msg || 'Login failed');
    }
  }
);
export const verificationStudent = createAsyncThunk(
  'auth/loginUser',
  async (
    {
      email,
      password,
      role,
    }: { email: string; password: string; role: MainRole },
    thunkAPI
  ) => {
    try {
      const response = await api.post(API_ENDPOINTS.AUTH.LOGIN, {
        email,
        password,
        role,
      });

      return {
        token: response.data.token,
        email,
        mainRole: role,
        subRole: response.data.subRole as MemberSubRole,
        username: response.data.username,
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data?.msg || 'Login failed');
    }
  }
);
export const verificationMember = createAsyncThunk(
  'auth/loginUser',
  async (
    {
      email,
      password,
      role,
    }: { email: string; password: string; role: MainRole },
    thunkAPI
  ) => {
    try {
      const response = await api.post(API_ENDPOINTS.AUTH.LOGIN, {
        email,
        password,
        role,
      });

      return {
        token: response.data.token,
        email,
        mainRole: role,
        subRole: response.data.subRole as MemberSubRole,
        username: response.data.username,
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data?.msg || 'Login failed');
    }
  }
);
export const forgetPasswordMember = createAsyncThunk(
  'auth/loginUser',
  async (
    {
      email,
      password,
      role,
    }: { email: string; password: string; role: MainRole },
    thunkAPI
  ) => {
    try {
      const response = await api.post(API_ENDPOINTS.AUTH.LOGIN, {
        email,
        password,
        role,
      });

      return {
        token: response.data.token,
        email,
        mainRole: role,
        subRole: response.data.subRole as MemberSubRole,
        username: response.data.username,
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data?.msg || 'Login failed');
    }
  }
);
export const forgetPasswordStudent = createAsyncThunk(
  'auth/loginUser',
  async (
    {
      email,
      password,
      role,
    }: { email: string; password: string; role: MainRole },
    thunkAPI
  ) => {
    try {
      const response = await api.post(API_ENDPOINTS.AUTH.LOGIN, {
        email,
        password,
        role,
      });

      return {
        token: response.data.token,
        email,
        mainRole: role,
        subRole: response.data.subRole as MemberSubRole,
        username: response.data.username,
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data?.msg || 'Login failed');
    }
  }
);
export const logOut = createAsyncThunk(
  'auth/loginUser',
  async (
    {
      email,
      password,
      role,
    }: { email: string; password: string; role: MainRole },
    thunkAPI
  ) => {
    try {
      const response = await api.post(API_ENDPOINTS.AUTH.LOGIN, {
        email,
        password,
        role,
      });

      return {
        token: response.data.token,
        email,
        mainRole: role,
        subRole: response.data.subRole as MemberSubRole,
        username: response.data.username,
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data?.msg || 'Login failed');
    }
  }
);




const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = undefined;
      state.mainRole = null;
      state.subRole = MemberSubRole.NONE;
      state.email = undefined;
      state.username = undefined;
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginMember.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginMember.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.token = action.payload.token;
        state.email = action.payload.email;
        state.username = action.payload.username;
        state.mainRole = action.payload.mainRole;
        state.subRole = action.payload.subRole;
        localStorage.setItem('token', action.payload.token);
      })
      .addCase(loginMember.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
