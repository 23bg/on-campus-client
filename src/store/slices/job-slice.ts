import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '@/api/axios-instance';
import { AxiosError } from 'axios';
import  JobType  from '@/types';

interface JobState {
  jobs: JobType[];
  loading: boolean;
  error: string | null;
}

const initialState: JobState = {
  jobs: [],
  loading: false,
  error: null,
};

// Async Thunks
export const fetchJobs = createAsyncThunk<JobType[], void, { rejectValue: string | undefined }>(
  'jobs/fetchAll',
  async (_: any, thunkAPI: { rejectWithValue: (arg0: string | undefined) => any; }) => {
    try {
      const response = await axios.get('/api/jobs');
      return response.data;
    } catch (error) {
      const err = error as AxiosError<{ message?: string }>;
      return thunkAPI.rejectWithValue(err.response?.data?.message);
    }
  }
);

// export const createJob = createAsyncThunk('jobs/create', async (data: Partial<JobType>, thunkAPI) => {
//   try {
//     const response = await axios.post('/api/jobs', data);
//     return response.data;
//   } catch (error) {
//     const err = error as AxiosError<{ message?: string }>;
//     return thunkAPI.rejectWithValue(err.response?.data?.message);
//   }
// });

// export const updateJob = createAsyncThunk(
//   'jobs/update',
//   async ({ id, data }: { id: string; data: Partial<JobType> }, thunkAPI) => {
//     try {
//       const response = await axios.put(`/api/jobs/${id}`, data);
//       return response.data;
//     } catch (error) {
//       const err = error as AxiosError<{ message?: string }>;
//       return thunkAPI.rejectWithValue(err.response?.data?.message);
//     }
//   }
// );

// export const deleteJob = createAsyncThunk('jobs/delete', async (id: string, thunkAPI) => {
//   try {
//     await axios.delete(`/api/jobs/${id}`);
//     return id;
//   } catch (error) {
//     const err = error as AxiosError<{ message?: string }>;
//     return thunkAPI.rejectWithValue(err.response?.data?.message);
//   }
// });

// Slice
const jobSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {},
  extraReducers: (builder :any) => {
    builder
      .addCase(fetchJobs.pending, (state :any) => {
        state.loading = true;
        state.error = null;
      })
      
  },
});

export default jobSlice.reducer;
