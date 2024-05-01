import { configureStore } from '@reduxjs/toolkit';
import mobileNumberReducer from './mobileNumberSlice'; // Assuming you have a mobileNumberSlice

const store = configureStore({
  reducer: {
    mobile : mobileNumberReducer, 
  },
});

export default store;
