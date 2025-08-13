// Template: Replace `College` with `Student`, `College`, or `Company`

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '@/api/axios-instance';
import type { CollegeType } from '@/types/college-types';
import { AxiosError } from 'axios';

interface CollegeState {
  entities: CollegeType[];
  loading: boolean;
  error: string | null;
}

const initialState: CollegeState = {
  entities: [],
  loading: false,
  error: null,
};

export const fetchEntities = createAsyncThunk('entities/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/api/entities');
    return response.data;
  } catch (error) {
  const err = error as AxiosError<{ message?: string }>;
  return thunkAPI.rejectWithValue(err.response?.data?.message || 'Failed to fetch');
  }
});

export const createCollege = createAsyncThunk('entities/create', async (data: Partial<CollegeType>, thunkAPI) => {
  try {
    const response = await axios.post('/api/entities', data);
    return response.data;
  } catch (error) {
  const err = error as AxiosError<{ message?: string }>;
  return thunkAPI.rejectWithValue(err.response?.data?.message  || 'Failed to create');
  }
});

export const updateCollege = createAsyncThunk(
  'entities/update',
  async ({ id, data }: { id: string; data: Partial<CollegeType> }, thunkAPI) => {
    try {
      const response = await axios.put(`/api/entities/${id}`, data);
      return response.data;
    } catch (error) {
  const err = error as AxiosError<{ message?: string }>;
  return thunkAPI.rejectWithValue(err.response?.data?.message  || 'Failed to update');
    }
  }
);

export const deleteCollege = createAsyncThunk('entities/delete', async (id: string, thunkAPI) => {
  try {
    await axios.delete(`/api/entities/${id}`);
    return id;
  } catch (error) {
  const err = error as AxiosError<{ message?: string }>;
  return thunkAPI.rejectWithValue(err.response?.data?.message  || 'Failed to delete');
  }
});

const CollegeSlice = createSlice({
  name: 'entities',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEntities.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEntities.fulfilled, (state, action) => {
        state.loading = false;
        state.entities = action.payload;
      })
      .addCase(fetchEntities.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(createCollege.fulfilled, (state, action) => {
        state.entities.push(action.payload);
      })
      .addCase(updateCollege.fulfilled, (state, action) => {
        const index = state.entities.findIndex((e) => e.id === action.payload.id);
        if (index !== -1) state.entities[index] = action.payload;
      })
      .addCase(deleteCollege.fulfilled, (state, action) => {
        state.entities = state.entities.filter((e) => e.id !== action.payload);
      });
  },
});

export default CollegeSlice.reducer;
