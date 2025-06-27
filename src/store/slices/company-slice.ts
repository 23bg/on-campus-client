// Template: Replace `Company` with `Student`, `College`, or `Company`

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '@/api/axios-instance';
import type { CompanyType } from '@/types/company-types';
import { AxiosError } from 'axios';

interface CompanyState {
  entities: CompanyType[];
  loading: boolean;
  error: string | null;
}

const initialState: CompanyState = {
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
  return thunkAPI.rejectWithValue(err.response?.data?.message  || 'Failed to fetch');
  }
});

export const createCompany = createAsyncThunk('entities/create', async (data: Partial<CompanyType>, thunkAPI) => {
  try {
    const response = await axios.post('/api/entities', data);
    return response.data;
  } catch (error) {
  const err = error as AxiosError<{ message?: string }>;
  return thunkAPI.rejectWithValue(err.response?.data?.message  || 'Failed to create');
  }
});

export const updateCompany = createAsyncThunk(
  'entities/update',
  async ({ id, data }: { id: string; data: Partial<CompanyType> }, thunkAPI) => {
    try {
      const response = await axios.put(`/api/entities/${id}`, data);
      return response.data;
    } catch (error) {
  const err = error as AxiosError<{ message?: string }>;
  return thunkAPI.rejectWithValue(err.response?.data?.message  || 'Failed to update');
    }
  }
);

export const deleteCompany = createAsyncThunk('entities/delete', async (id: string, thunkAPI) => {
  try {
    await axios.delete(`/api/entities/${id}`);
    return id;
  } catch (error) {
  const err = error as AxiosError<{ message?: string }>;
  return thunkAPI.rejectWithValue(err.response?.data?.message  || 'Failed to delete');
  }
});

const CompanySlice = createSlice({
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
      .addCase(createCompany.fulfilled, (state, action) => {
        state.entities.push(action.payload);
      })
      .addCase(updateCompany.fulfilled, (state, action) => {
        const index = state.entities.findIndex((e) => e.id === action.payload.id);
        if (index !== -1) state.entities[index] = action.payload;
      })
      .addCase(deleteCompany.fulfilled, (state, action) => {
        state.entities = state.entities.filter((e) => e.id !== action.payload);
      });
  },
});

export default CompanySlice.reducer;

// Usage:
// - Replace `/api/entities` with `/api/students`, `/api/colleges`, `/api/companies`
// - Replace `CompanyType` with respective types from your types module.
// - Rename file to `studentSlice.ts`, `collegeSlice.ts`, `companySlice.ts` accordingly.
