import { createSlice } from '@reduxjs/toolkit';

const appointmentDetailsSlice = createSlice({
  name: 'appointmentDetails',
  initialState: {appointmentId: "", position: ""}, 
  reducers: {
    setAppointmentDetails(state, action) {
        const {appointmentId, position} = action.payload;
        return( {...state, appointmentId, position});
    },
  },
});

export default appointmentDetailsSlice.reducer;
export const {setAppointmentDetails} = appointmentDetailsSlice.actions;