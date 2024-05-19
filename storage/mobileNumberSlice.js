import { createSlice } from '@reduxjs/toolkit';

const mobileNumberSlice = createSlice({
  name: 'mobileNumber',
  initialState: '', 
  reducers: {
    setMobileNumberSlice(state, action) {
        return {...state, mobileNumber: action.payload};
    },
  },
});

export default mobileNumberSlice.reducer;
export const {setMobileNumberSlice} = mobileNumberSlice.actions;