
export default function doctorsReducer(
  state = {
    loading: false,
    all: [],    
  }, action) {
    switch (action.type) {
      case 'LOADING_DOCTOR_LISTS':
        return { ...state, loading: true } 
      case 'FETCH_DOCTOR_LISTS':
        return { ...state, loading: false, all: action.payload } 
      default:
        return state              
    }    
  }