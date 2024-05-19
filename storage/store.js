import { configureStore } from '@reduxjs/toolkit';
import mobileNumberReducer from './mobileNumberSlice';
import selectedHospitalReducer from './selectedHospitalSlice'
import selectedDoctorReducer from './selectedDoctorSlice';
import loginStatusReducer from './loginStatusSlice';
import userDetailsReducer from './userDetailsSlice';
import appointmentDetailsReducer from './appointmentDetailsSlice';

const store = configureStore({
  reducer: {
    mobile : mobileNumberReducer, 
    hospital: selectedHospitalReducer,
    doctor: selectedDoctorReducer,
    loginStatus: loginStatusReducer,
    user: userDetailsReducer,
    appointmentDetails: appointmentDetailsReducer
  },
});

export default store;
