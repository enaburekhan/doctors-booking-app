import { configureStore } from '@reduxjs/toolkit';
import doctorsReducer from './doctorsSlice';

export default configureStore({
  reducer: {
    doctors: doctorsReducer,
  },
});
