/* eslint-disable no-param-reassign */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import API from '../api/api';

export const postAppointments = createAsyncThunk(
  'appointments/postAppointments',
  async (
    {
      userId, token, appointmentDate, doctorId,
    },
  ) => {
    console.log('appointmentDate', appointmentDate);
    console.log('doctorId', doctorId);
    console.log('userId', userId);
    console.log('token', token);
    const response = await fetch(`${API}/users/${userId}/appointments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,

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
    console.log('localstorageData', data);

    return data;
  },
);

// export const getAppointments = createAsyncThunk(
//   'appointments/getAppointments',
//   async (id) => {
//     console.log('getId', id);
//     const response = await fetch(
//       `${API}/users/${id}/appointments`,
//       {
//         method: 'GET',
//         headers: {
//           // Authorization: `Bearer ${token}`,
//           'Content-Type': 'application/json',
//           Accept: 'application/json',
//         },
//       },
//     );
//     if (!response.ok) throw new Error(response.statusText);
//     const data = await response.json();
//     console.log('modify data', data);
//     return data;
//   },
// );

export const getAppointments = createAsyncThunk(
  'appointments/getAppointments',
  async ({ token, id }) => {
    const response = await fetch(`${API}/users/${id}/appointments`, {
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
