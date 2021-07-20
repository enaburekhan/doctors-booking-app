import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const signupUser = createAsyncThunk(
  'users/signupUser', 
  async ({ username, password, age }, thunkAPI) => {
    try{
      const res = await fetch(
        'https://enab-doctors-appointment.herokuapp.com/api/v1/users',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'    
          },
          body: JSON.stringify({
            username,
            password, 
            age,   
          }),   
        }   
      );
      let data = await res.json();
      console.log('data', data);
      
      if(res.status === 200){
        localStorage.setItem('token', data.token);
        return { ...data, username: username, age: age };   
      }else {
         return thunkAPI.rejectWithValue(data);   
      }
    }catch (e) {
        console.log('Error', e.res.data);
        return thunkAPI.rejectWithValue(e.res.data);   
     }    
  }   
)

export const loginUser = createAsyncThunk(
  'users/login',
  async ({ username, password }, thunkAPI) => {
    try {
      const res = await fetch(
        'https://enab-doctors-appointment.herokuapp.com/api/v1/authentications',  
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',    
          },
          body: JSON.stringify({
            username,
            password,    
          }),    
        } 
      );
      let data = await res.json();
      console.log('res', data);
      if(res.status === 200) {
        localStorage.setItem('token', data.token);
        return data    
      } else {
        return thunkAPI.rejectWithValue(data);  
      }    
    } catch (e) {
       console.log('Error', e.res.data)
       thunkAPI.rejectWithValue(e.res.data)  
    }    
  }   
);

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: '',
    age: '',
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
  },
  reducers: {
    // Reducers comes here
  },
  extraReducers: {
    [signupUser.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.username = payload.user.username;
      state.password = payload.user.password;
      state.age = payload.user.age;    
    },
    [signupUser.pending]: (state) => {
      state.isFetching = true;
    },
    [signupUser.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;    
    },
    [loginUser.fulfilled]: (state, { payload }) => {
       state.username = payload.username;
       state.password = payload.password;
       state.isFetching = false;
       state.isSuccess = true;
       return state;   
    },
    [loginUser.rejected]: (state, { payload }) => {
      console.log('payload', payload);
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;    
    },
    [loginUser.pending]: (state) => {
      state.isFetching = true;    
    },
  },
});

export default userSlice.reducer;

export const userSelector = (state) => state.user;
