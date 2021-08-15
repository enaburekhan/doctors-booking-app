import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import doctorsReducer from './doctorsSlice';
import appointmentsReducer from './appointmentsSlice';
import userReducer from './userSlice';
import typeReducer from './typeSlice';
import doctorReducer from './doctorSlice';

const reducers = combineReducers({
  doctors: doctorsReducer,
  appointments: appointmentsReducer,
  user: userReducer,
  type: typeReducer,
  doctor: doctorReducer,
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export default store;
