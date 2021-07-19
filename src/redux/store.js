import { configureStore } from '@reduxjs/toolkit';
import doctorsReducer from './doctorsSlice';
import userReducer from './userSlice';

export default configureStore({
  reducer: {
    doctors: doctorsReducer,
    users: userReducer,
  },
});
