/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import API from '../api/api';

export const getDoctor = createAsyncThunk(
  'doctor/getDoctor',
  async (id, token) => {
    const response = await fetch(`${API}/doctors/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    return data;
  },
);

export const doctorSlice = createSlice({
  name: 'doctor',
  initialState: {
    loading: false,
    error: null,
    data: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getDoctor.pending, (state) => {
        state.loading = true;
      })
      .addCase(getDoctor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getDoctor.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      });
  },

});

export default doctorSlice.reducer;
