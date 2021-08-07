import appointmentsReducer, { postAppointments, getAppointments } from '../redux/appointmentsSlice';

const initialState = {
  loading: false,
  error: null,
  data: [],
};

test('returns initial state', () => {
  const actual = appointmentsReducer(undefined, {});
  expect(actual).toEqual(initialState);
});

test('postAppointments.pending', () => {
  const nextState = appointmentsReducer(initialState, postAppointments.pending);
  expect(nextState.data).toBe(initialState.data);
  expect(nextState.loading).toBe(true);
});

test('postAppointments.fulfilled', () => {
  const mockAsyncPayload = { appointments: { appointmentDate: '06/08/2021' } };
  const nextState = appointmentsReducer(initialState, postAppointments.fulfilled(mockAsyncPayload));
  expect(nextState.loading).toBe(false);
});

test('postAppointments.rejected', () => {
  const mockAsyncPayloadError = 'error';
  const nextState = appointmentsReducer(
    initialState, postAppointments.rejected(mockAsyncPayloadError),
  );
  expect(nextState.error).toBe(mockAsyncPayloadError);
  expect(nextState.loading).toBe(false);
});

test('getAppointments.pending', () => {
  const nextState = appointmentsReducer(initialState, getAppointments.pending());
  expect(nextState.data).toBe(initialState.data);
  expect(nextState.loading).toBe(true);
});

test('getAppointments.fulfilled', () => {
  const mockAsyncPayload = { appointments: { appointmentDate: '06/08/2021' } };
  const nextState = appointmentsReducer(initialState, getAppointments.fulfilled(mockAsyncPayload));
  expect(nextState.data).toBe(mockAsyncPayload);
  expect(nextState.loading).toBe(false);
});

test('getAppointments.rejected', () => {
  const mockAsyncPayloadError = 'error';
  const nextState = appointmentsReducer(
    initialState, getAppointments.rejected(mockAsyncPayloadError),
  );
  expect(nextState.error).toBe(mockAsyncPayloadError);
  expect(nextState.loading).toBe(false);
});
