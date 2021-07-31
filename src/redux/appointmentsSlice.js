/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import API from '../api/api';

export const postAppointments = createAsyncThunk(
  'appointments/postAppointments',
  async (
    {
      user_id, appointment_date, doctor_id, jwt,
    },
  ) => {
    console.log('appointmentDate', appointment_date);
    console.log('doctorId', doctor_id);
    console.log('user_id', user_id);
    const response = await fetch(`${API}/appointments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${jwt}`,
      },

      body: JSON.stringify({
        appointment_date,
        doctor_id,
        user_id,
      }),
    });
    console.log('response', response);
    const data = await response.json();
    if (!response.ok) throw new Error(data.failure);
    localStorage.setItem('token', data.jwt);
    console.log('appointmentData', data);

    return data;
  },
);

export const getAppointments = createAsyncThunk(
  'appointments/getAppointments',
  async ({ token, user_id }) => {
    const response = await fetch(`${API}/users/${user_id}/appointments`, {
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
    [getAppointments.pending]: (state) => {
      state.loading = true;
    },
    [getAppointments.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [getAppointments.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },

  },
});

export default appointmentsSlice.reducer;
