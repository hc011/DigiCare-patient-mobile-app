import { createSlice } from "@reduxjs/toolkit";

const appointmentDetailsSlice = createSlice({
  name: "appointmentDetails",
  initialState: {
    appointmentId: "",
    position: "",
    // doctor,
    clinicAddress: "",
    appointmentDate: "",
  },
  reducers: {
    setAppointmentDetails(state, action) {
      const { appointmentId, position } = action.payload;
      const doctor = action.payload.doctorDetails;
      console.log("doc", doctor);
      return { ...state, appointmentId, position };
    },
  },
});

export default appointmentDetailsSlice.reducer;
export const { setAppointmentDetails } = appointmentDetailsSlice.actions;
