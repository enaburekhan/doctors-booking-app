import doctorsReducer, { getDoctors } from '../redux/doctorsSlice';
import doctorReducer, { getDoctor } from '../redux/doctorSlice';

const initialState = {
  loading: false,
  error: null,
  data: null,
};

test('returns initial state', () => {
  const actual = doctorsReducer(undefined, {});
  expect(actual).toEqual(initialState);
});

test('getDoctors.pending', () => {
  const nextState = doctorsReducer(initialState, getDoctors.pending);
  expect(nextState.data).toBe(initialState.data);
  expect(nextState.loading).toBe(true);
});

test('getDoctors.fulfilled', () => {
  const mockAsyncPayload = { doctors: { name: 'Dr Osamu Akpede' } };
  const nextState = doctorsReducer(initialState, getDoctors.fulfilled(mockAsyncPayload));
  expect(nextState.data).toBe(mockAsyncPayload);
  expect(nextState.loading).toBe(false);
});

test('getDoctors.rejected', () => {
  const mockAsyncPayloadError = 'error';
  const nextState = doctorsReducer(
    initialState, getDoctors.rejected(mockAsyncPayloadError),
  );
  expect(nextState.error).toBe(mockAsyncPayloadError);
  expect(nextState.loading).toBe(false);
});

test('getDoctor.pending', () => {
  const nextState = doctorReducer(initialState, getDoctor.pending());
  expect(nextState.data).toBe(initialState.data);
  expect(nextState.loading).toBe(true);
});

test('getDoctor.fulfilled', () => {
  const mockAsyncPayload = { doctor: { name: 'Dr Osamu Akpede' } };
  const nextState = doctorReducer(initialState, getDoctor.fulfilled(mockAsyncPayload));
  expect(nextState.data).toBe(mockAsyncPayload);
  expect(nextState.loading).toBe(false);
});

test('getDoctor.rejected', () => {
  const mockAsyncPayloadError = 'error';
  const nextState = doctorReducer(
    initialState, getDoctor.rejected(mockAsyncPayloadError),
  );
  expect(nextState.error).toBe(mockAsyncPayloadError);
  expect(nextState.loading).toBe(false);
});
