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
    console.log('doctorsData', data);
    return data;
  },
);

const initialState = [];

export const doctorsSlice = createSlice({
  name: 'doctors',
  initialState,
  // reducers: {
  //   listDoctors(state, action) {
  //     state.push(action.payload);
  //   },
  // },
  extraReducers: {
    [getDoctors.fulfilled]: (state, action) => action.payload,
  },

});

export const { listDoctors } = doctorsSlice.actions;

export default doctorsSlice.reducer;
