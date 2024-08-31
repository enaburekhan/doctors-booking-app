/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import API from '../api/api';

export const getDoctors = createAsyncThunk(
  'doctors/getDoctors',
  async (_, { rejectedWithValue }) => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`${API}/doctors`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) throw new Error(response.statusText);
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  },

);

export const doctorsSlice = createSlice({
  name: 'doctors',
  initialState: {
    loading: false,
    error: null,
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDoctors.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getDoctors.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getDoctors.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      });
  },
});

export default doctorsSlice.reducer;

export const selectAllDoctors = (state) => state.doctors;
