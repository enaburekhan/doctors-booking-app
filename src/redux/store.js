import { configureStore } from '@reduxjs/toolkit';
import doctorsReducer from './doctorsSlice';
import appointmentsReducer from './appointmentsSlice';

export default configureStore({
  reducer: {
    doctors: doctorsReducer,
    appointments: appointmentsReducer,

  },
});
