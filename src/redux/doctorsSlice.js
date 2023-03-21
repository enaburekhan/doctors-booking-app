/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
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
    return data;
  }
);

export const doctorsSlice = createSlice({
  name: 'doctors',
  initialState: {
    loading: false,
    error: null,
    data: null,
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

export default doctorsSlice.reducer;

export const selectAllDoctors = (state) => state.doctors;
