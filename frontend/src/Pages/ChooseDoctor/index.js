import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { onStepChange, selectActiveLang } from 'Redux/reducers/basicSlice'
import {
  fetchDoctors,
  onSearchValue,
  selectDoctors,
  isDoctorsLoading,
} from 'Redux/reducers/doctorsSlice'

import {
  selectCity,
  selectHospital,
  onCityChange,
  onHospitalChange,
} from 'Redux/reducers/orderSlice'

import { selectCities } from 'Redux/reducers/citiesSlice'

import constants from 'Constants'
import Loader from 'Components/Loader'

import ChooseDoctor from './ChooseDoctor'

import './ChooseDoctor.scss'

const ChooseDoctorPage = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const doctors = useSelector(selectDoctors)
  const isLoading = useSelector(isDoctorsLoading)
  const cities = useSelector(selectCities)
  const activeLang = useSelector(selectActiveLang)
  const activeCity = useSelector(selectCity)
  const activeHospital = useSelector(selectHospital)
  const [offset, setOffset] = useState(6)
  const [search, setSearch] = useState('')

  useEffect(() => {
    dispatch(onStepChange(constants.steps.chooseDoctor))
  }, [dispatch])

  useEffect(() => {
    if (activeHospital) {
      dispatch(
        fetchDoctors({
          offset: offset,
          search: search,
          activeCity: activeCity?.id,
          activeHospital: activeHospital?.hostipalId,
        })
      )
    }
  }, [dispatch, offset, search, activeCity, activeHospital])

  const handleChangeCity = (city) => {
    dispatch(onCityChange(city))
  }

  const handleChangeHospital = (hospital) => {
    dispatch(onHospitalChange(hospital))
  }

  const paginate = () => {
    setOffset((prev) => prev + 6)
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <ChooseDoctor
      t={t}
      doctors={doctors}
      onSearchValue={onSearchValue}
      setSearch={setSearch}
      cities={cities}
      activeLang={activeLang}
      activeCity={activeCity}
      handleChangeCity={handleChangeCity}
      activeHospital={activeHospital}
      handleChangeHospital={handleChangeHospital}
      paginate={paginate}
    />
  )
}

export default ChooseDoctorPage
