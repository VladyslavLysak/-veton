import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  city: null,
  hospital: null,
  doctor: null,
  time: '',
}

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    onCityChange: (state, action) => {
      state.city = action.payload
    },
    onHospitalChange: (state, action) => {
      state.hospital = action.payload
    },
    onDoctorChange: (state, action) => {
      state.doctor = action.payload
    },
    onTimeChange: (state, action) => {
      state.time = action.payload
    },
  },
  extraReducers: {},
})

export const selectCity = (state) => state.order.city
export const selectHospital = (state) => state.order.hospital
export const selectDoctor = (state) => state.order.doctor
export const selectTime = (state) => state.order.time

export const {
  onCityChange,
  onHospitalChange,
  onDoctorChange,
  onTimeChange,
} = orderSlice.actions

export default orderSlice.reducer
