import { createSlice } from '@reduxjs/toolkit';

const selectedHospitalSlice = createSlice({
  name: 'selectedHospital',
  initialState: {}, 
  reducers: {
    setSelectedHospitalSlice(state, action) {
        return {...state, selectedHospital: action.payload};
    },
  },
});

export default selectedHospitalSlice.reducer;
export const {setSelectedHospitalSlice} = selectedHospitalSlice.actions;