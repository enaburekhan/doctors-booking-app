import { createSlice } from '@reduxjs/toolkit';

export const typeSlice = createSlice({
  name: 'type',
  initialState: '',
  reducers: {
    changeType: (_state, action) => action.payload,
  },
});

export const { changeType } = typeSlice.actions;

export default typeSlice.reducer;
