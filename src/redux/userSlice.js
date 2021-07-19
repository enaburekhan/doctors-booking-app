import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: '',
    age: '',
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
  },
  reducers: {
    // Reducers comes here
  },
  extraReducers: {
    // Extra reducer comes here
  },
});

export default userSlice.reducer;

export const userSelector = (state) => state.user;
