import userReducer, { userAuth } from '../redux/userSlice';

const initialState = {
  loading: false,
  error: null,
  data: null,
};

test('returns initial state', () => {
  const actual = userReducer(undefined, {});
  expect(actual).toEqual(initialState);
});

test('userAuth.pending', () => {
  const nextState = userReducer(initialState, userAuth.pending());
  expect(nextState.data).toBe(initialState.data);
  expect(nextState.loading).toBe(true);
});

test('userAuth.fulfilled', () => {
  const mockAsyncPayload = { username: 'test_user', jwt: 'ewurllll.ewurllll.mnetyywwddd' };
  const nextState = userReducer(initialState, userAuth.fulfilled(mockAsyncPayload));
  expect(nextState.data).toBe(mockAsyncPayload);
  expect(nextState.loading).toBe(false);
});

test('userAuth.rejected', () => {
  const mockAsyncPayloadError = 'error';
  const nextState = userReducer(initialState, userAuth.rejected(mockAsyncPayloadError));
  expect(nextState.error).toBe(mockAsyncPayloadError);
  expect(nextState.loading).toBe(false);
});
