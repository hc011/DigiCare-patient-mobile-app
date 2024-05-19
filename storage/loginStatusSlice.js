import { createSlice } from '@reduxjs/toolkit';

const loginStatusSlice = createSlice({
  name: 'isLoggedIn',
  initialState: false, 
  reducers: {
    setLoginStatus(state, action) {
        return {...state, isLoggedIn: action.payload};;
    },
  },
});

export default loginStatusSlice.reducer;
export const {setLoginStatus} = loginStatusSlice.actions;