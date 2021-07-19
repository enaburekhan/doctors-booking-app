/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import API from '../api/api';

const initialState = [];

export const getDoctors = createAsyncThunk(
  'doctors/getDoctors',
  async (token) => {
    const response = await fetch(`${API}/doctors`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log('responses', response);
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    console.log(data);
    return data.doctors;
  },
);

export const doctorsSlice = createSlice({
  name: 'doctors',
  initialState,
  reducers: {},
  extraReducers: {
    [getDoctors.fulfilled]: (state, action) => action.payload,
  },

});

export default doctorsSlice.reducer;
