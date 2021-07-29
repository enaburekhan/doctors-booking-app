import { configureStore } from '@reduxjs/toolkit';
import doctorsReducer from './doctorsSlice';
import appointmentsReducer from './appointmentsSlice';
import userReducer from './userSlice';
import typeReducer from './typeSlice';
import doctorReducer from './doctorSlice';

export default configureStore({
  reducer: {
    doctors: doctorsReducer,
    appointments: appointmentsReducer,
    user: userReducer,
    type: typeReducer,
    doctor: doctorReducer,

  },
});
