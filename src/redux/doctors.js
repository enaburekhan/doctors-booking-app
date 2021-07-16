/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import API from '../api/api';

export const getDoctors = createAsyncThunk(
  'doctors/getDoctors',
  async (token) => {
    const response = await fetch(`${API}/doctors`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    return data.doctors;
  },
);

export const doctors = createSlice({
  name: 'doctors',
  initialState: {
    loading: false,
    error: null,
    data: [],
  },
  extraReducers: {
    [getDoctors.pending]: (state) => {
      state.loading = true;
    },
    [getDoctors.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [getDoctors.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
  },
});

export default doctors.reducer;
