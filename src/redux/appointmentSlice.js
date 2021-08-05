/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import API from '../api/api';

export const getAppointment = createAsyncThunk(
  'appointment/getAppointment',
  async (id) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API}/appointments/${id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    console.log('getAppointment', data);
    return data;
  },
);

export const appointmentSlice = createSlice({
  name: 'appointment',
  initialState: {
    loading: false,
    error: null,
    data: [],
  },
  extraReducers: {
    [getAppointment.pending]: (state) => {
      state.loading = true;
    },
    [getAppointment.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [getAppointment.fulfilled]: (state, action) => {
      state.loading = false;
      state.data.filter((item) => item.id !== action.payload);
    },

  },
});

export default appointmentSlice.reducer;
