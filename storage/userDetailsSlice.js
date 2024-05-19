import { createSlice } from '@reduxjs/toolkit';

const userDetailsSlice = createSlice({
  name: 'userDetails',
  initialState: null, 
  reducers: {
    setUserDetailsSlice(state, action) {
        return {...state, userDetails: action.payload};
    },
  },
});

export default userDetailsSlice.reducer;
export const {setUserDetailsSlice} = userDetailsSlice.actions;