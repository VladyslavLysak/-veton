import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { selectDoctorCity, selectCity } from 'Redux/reducers/citiesSlice'
import {
  onDoctorChange,
  onCityChange,
  onHospitalChange,
} from 'Redux/reducers/orderSlice'

import DoctorCardLayout from './DoctorCard'

const DoctorCard = ({ doctor }) => {
  const dispatch = useDispatch()
  const activeCity = useSelector((state) =>
    selectDoctorCity(state, doctor)
  )
  const doctorCity = useSelector((state) => selectCity(state, doctor))

  const onDoctorClick = () => {
    dispatch(onDoctorChange(doctor))
    dispatch(onCityChange(doctorCity))
    // dispatch(onHospitalChange())
  }
  return <DoctorCardLayout doctor={doctor} activeCity={activeCity} />
}

export default DoctorCard
