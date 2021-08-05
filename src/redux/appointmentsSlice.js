/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import API from '../api/api';

export const postAppointments = createAsyncThunk(
  'appointments/postAppointments',
  async (
    {
      user_id, appointment_date, doctor_id,
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
  // reducers: {
  //   addAppointments: (state, action) => {
  //     state.data.push(action.payload);
  //   },
  // },
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
      state.data.push(action.payload);
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

// export const { addAppointments } = appointmentsSlice.actions;

export default appointmentsSlice.reducer;
