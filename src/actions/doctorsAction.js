import { FETCH_DOCTORS_FAILURE, FETCH_DOCTORS_REQUEST, FETCH_DOCTORS_SUCCESS } from '.';
import API from '../api/api';

const fetchDoctors = () => (dispatch) => {
  dispatch({ type: FETCH_DOCTORS_REQUEST });

  fetch(`${API}/doctors`, null)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res.statusText);
    })
    .then((doctors) => {
      console.log(doctors);
      return dispatch({
        type: FETCH_DOCTORS_SUCCESS,
        payload: doctors,
      });
    })
    .catch((error) => dispatch({
      type: FETCH_DOCTORS_FAILURE,
      payload: error,
    }));
};

export default fetchDoctors;
