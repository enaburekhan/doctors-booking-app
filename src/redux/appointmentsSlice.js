/* eslint-disable no-param-reassign */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import API from '../api/api';

export const postAppointments = createAsyncThunk(
  'appointments/postAppointments',
  async ({ appointmentDate, doctorId, userId }) => {
    const response = await fetch(`${API}/appointments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        appointmentDate,
        doctorId,
        userId,
      }),
    });
    const data = await response.json();
    console.log('appointmentsData', data);
    if (!response.ok) throw new Error(data.failure);
    localStorage.setItem('token', data.jwt);

    return data;
  },
);

export const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState: {
    loading: false,
    error: null,
    data: [],
  },
  extraReducers: {
    [postAppointments.pending]: (state) => {
      state.loading = true;
    },
    [postAppointments.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [postAppointments.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },

  },
});

export default appointmentsSlice.reducer;
