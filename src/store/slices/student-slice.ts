// Template: Replace `Student` with `Student`, `College`, or `Company`

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '@/api/axios-instance';
import { StudentType } from '@/types/student-types';
import { AxiosError } from 'axios';


interface StudentState {
  entities: StudentType[];
  loading: boolean;
  error: string | null;
}

const initialState: StudentState = {
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

export const createStudent = createAsyncThunk('entities/create', async (data: Partial<StudentType>, thunkAPI) => {
  try {
    const response = await axios.post('/api/entities', data);
    return response.data;
  } catch (error) {
  const err = error as AxiosError<{ message?: string }>;
  return thunkAPI.rejectWithValue(err.response?.data?.message  || 'Failed to create');
  }
});

export const updateStudent = createAsyncThunk(
  'entities/update',
  async ({ id, data }: { id: string; data: Partial<StudentType> }, thunkAPI) => {
    try {
      const response = await axios.put(`/api/entities/${id}`, data);
      return response.data;
    } catch (error) {
  const err = error as AxiosError<{ message?: string }>;
  return thunkAPI.rejectWithValue(err.response?.data?.message || 'Failed to update');
    }
  }
);

export const deleteStudent = createAsyncThunk('entities/delete', async (id: string, thunkAPI) => {
  try {
    await axios.delete(`/api/entities/${id}`);
    return id;
  } catch (error) {
  const err = error as AxiosError<{ message?: string }>;
  return thunkAPI.rejectWithValue(err.response?.data?.message  || 'Failed to delete');
  }
});

const StudentSlice = createSlice({
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
      .addCase(createStudent.fulfilled, (state, action) => {
        state.entities.push(action.payload);
      })
      .addCase(updateStudent.fulfilled, (state, action) => {
        const index = state.entities.findIndex((e) => e.id === action.payload.id);
        if (index !== -1) state.entities[index] = action.payload;
      })
      .addCase(deleteStudent.fulfilled, (state, action) => {
        state.entities = state.entities.filter((e) => e.id !== action.payload);
      });
  },
});

export default StudentSlice.reducer;
