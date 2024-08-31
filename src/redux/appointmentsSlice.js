/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import API from '../api/api';

export const postAppointments = createAsyncThunk(
  'appointments/postAppointments',
  async (
    {
      appointment_date, doctor_id, user_id,
    },
  ) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API}/appointments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify({
        appointment_date,
        doctor_id,
        user_id,
      }),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.failure);

    return data;
  },
);

export const getAppointments = createAsyncThunk(
  'appointments/getAppointments',
  async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API}/appointments`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
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
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(postAppointments.pending, (state) => {
        state.loading = true;
      })
      .addCase(postAppointments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(postAppointments.fulfilled, (state, action) => {
        state.loading = false;
        state.data.push(action.payload);
      })
      .addCase(getAppointments.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAppointments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getAppointments.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      });
  },
});

export default appointmentsSlice.reducer;
