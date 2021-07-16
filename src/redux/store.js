import { configureStore } from '@reduxjs/toolkit';
import doctorsReducer from './doctors';

export default configureStore({
  reducer: {
    doctors: doctorsReducer,
  },
});
