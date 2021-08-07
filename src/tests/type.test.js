import typeReducer, { changeType } from '../redux/typeSlice';

const initialState = '';

test('returns initial state', () => {
  const actual = typeReducer(undefined, {});
  expect(actual).toEqual(initialState);
});

test('changeType', () => {
  const nextState = typeReducer(initialState, changeType('access'));
  expect(nextState).toBe('access');
});
