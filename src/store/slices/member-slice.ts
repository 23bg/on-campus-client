// src/store/slices/memberSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '@/api/axios-instance';
import MemberTypes from '@/types';



interface MemberState {
  members: MemberTypes[];
  loading: boolean;
  error: string | null;
}

const initialState: MemberState = {
  members: [],
  loading: false,
  error: null,
};

// Async Thunks
export const fetchMembers = createAsyncThunk('members/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/api/members');
    return response.data;
  } catch (error) {
  const err = error as AxiosError<{ message?: string }>;
  return thunkAPI.rejectWithValue(err.response?.data?.message 
    return thunkAPI.rejectWithValue(error.response?.data?.message || 'Failed to fetch members');
  }
});

export const createMember = createAsyncThunk('members/create', async (data: Partial<Member>, thunkAPI) => {
  try {
    const response = await axios.post('/api/members', data);
    return response.data;
  } catch (error) {
  const err = error as AxiosError<{ message?: string }>;
  return thunkAPI.rejectWithValue(err.response?.data?.message 
    return thunkAPI.rejectWithValue(error.response?.data?.message || 'Failed to create member');
  }
});

export const updateMember = createAsyncThunk('members/update', async ({ id, data }: { id: string, data: Partial<Member> }, thunkAPI) => {
  try {
    const response = await axios.put(`/api/members/${id}`, data);
    return response.data;
  } catch (error) {
  const err = error as AxiosError<{ message?: string }>;
  return thunkAPI.rejectWithValue(err.response?.data?.message 
    return thunkAPI.rejectWithValue(error.response?.data?.message || 'Failed to update member');
  }
});

export const deleteMember = createAsyncThunk('members/delete', async (id: string, thunkAPI) => {
  try {
    await axios.delete(`/api/members/${id}`);
    return id;
  } catch (error) {
  const err = error as AxiosError<{ message?: string }>;
  return thunkAPI.rejectWithValue(err.response?.data?.message 
    return thunkAPI.rejectWithValue(error.response?.data?.message || 'Failed to delete member');
  }
});

// Slice
const memberSlice = createSlice({
  name: 'members',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMembers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMembers.fulfilled, (state, action) => {
        state.loading = false;
        state.members = action.payload;
      })
      .addCase(fetchMembers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(createMember.fulfilled, (state, action) => {
        state.members.push(action.payload);
      })
      .addCase(updateMember.fulfilled, (state, action) => {
        const index = state.members.findIndex((m) => m.id === action.payload.id);
        if (index !== -1) state.members[index] = action.payload;
      })
      .addCase(deleteMember.fulfilled, (state, action) => {
        state.members = state.members.filter((m) => m.id !== action.payload);
      });
  },
});

export default memberSlice.reducer;
