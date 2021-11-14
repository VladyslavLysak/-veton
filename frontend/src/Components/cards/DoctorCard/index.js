import React from 'react'

import { useSelector } from 'react-redux'

import { selectDoctorCity } from 'Redux/reducers/citiesSlice'

import DoctorCardLayout from './DoctorCard'

const DoctorCard = ({ doctor }) => {
  const activeCity = useSelector((state) =>
    selectDoctorCity(state, doctor)
  )
  return <DoctorCardLayout doctor={doctor} activeCity={activeCity} />
}

export default DoctorCard
