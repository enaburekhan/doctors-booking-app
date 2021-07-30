/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import API from '../api/api';

export const postAppointments = createAsyncThunk(
  'appointments/postAppointments',
  async (
    {
      userId, appointmentDate, doctorId, jwt,
    },
  ) => {
    console.log('appointmentDate', appointmentDate);
    console.log('doctorId', doctorId);
    console.log('userId', userId);
    fetch(`${API}/users/${userId}/appointments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${jwt}`,
      },

      body: JSON.stringify({
        appointmentDate,
        doctorId,
        userId,
      }),
    }).then((data) => {
      console.log('Success:', data);
      localStorage.setItem('token', data.jwt);
    }).catch((error) => {
      // request just fail
      throw new Error('Error:', error);
    });
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
