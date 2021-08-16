/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import API from '../api/api';

export const userAuth = createAsyncThunk(
  'user/userAuth',
  async ({
    username, password, age, endpoint,
  }) => {
    const response = await fetch(`${API}/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
        age,
      }),
    });
    const data = await response.json();
    if (response.status >= 400 && response.status < 600) {
      throw new Error(data.failure);
    }
    localStorage.setItem('token', data.jwt);
    return data;
  },
);

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    error: null,
    data: null,
  },
  reducers: {
    logout: () => ({
      loading: false,
      error: null,
      data: null,
    }),
  },
  extraReducers: {
    [userAuth.pending]: (state) => {
      state.loading = true;
    },
    [userAuth.rejected]: (state, action) => {
      state.loading = false;
      toast.error(action.error.message);
      state.error = action.error.message;
    },
    [userAuth.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
