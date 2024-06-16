import { createSlice } from "@reduxjs/toolkit";

const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState: {
    phone_number: "",
  },
  reducers: {
    setUserDetailsSlice(state, action) {
      return { ...state, userDetails: action.payload };
    },
  },
});

export default userDetailsSlice.reducer;
export const { setUserDetailsSlice } = userDetailsSlice.actions;
