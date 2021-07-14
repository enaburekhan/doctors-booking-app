import { FETCH_DOCTORS_FAILURE, FETCH_DOCTORS_REQUEST, FETCH_DOCTORS_SUCCESS } from "../actions"


const initial_state = {
  doctors: {},
  isLoading: false    
}  

export default doctorsReducer = (initial_state, action) => {
    switch (action.type) {
      case FETCH_DOCTORS_REQUEST:
        return { ...state, isLoading: true } 
      case FETCH_DOCTORS_SUCCESS:
        return { ...state, isLoading: false, doctors: action.payload }
      case FETCH_DOCTORS_FAILURE:
        return { ...state, isLoading: false, error: action.payload }   
      default:
        return state              
    }    
  }