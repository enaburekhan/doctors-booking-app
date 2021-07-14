import { FETCH_DOCTORS_FAILURE, FETCH_DOCTORS_REQUEST, FETCH_DOCTORS_SUCCESS } from '../actions';

const InitialState = {
  doctors: {},
  isLoading: false,
};

const doctorsReducer = (state = InitialState, action) => {
  switch (action.type) {
    case FETCH_DOCTORS_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_DOCTORS_SUCCESS:
      return { ...state, isLoading: false, doctors: action.payload };
    case FETCH_DOCTORS_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

export default doctorsReducer;
