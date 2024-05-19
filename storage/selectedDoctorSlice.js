import { createSlice } from '@reduxjs/toolkit';

const selectedDoctorSlice = createSlice({
  name: 'selectedDoctor',
  initialState: {}, 
  reducers: {
    setSelectedDoctorSlice(state, action) {
        return {...state, selectedDoctorSlice: action.payload};
    },
  },
});

export default selectedDoctorSlice.reducer;
export const {setSelectedDoctorSlice} = selectedDoctorSlice.actions;