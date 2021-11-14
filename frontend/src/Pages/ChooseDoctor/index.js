import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { onStepChange } from 'Redux/reducers/basicSlice'
import {
  fetchDoctors,
  onSearchValue,
  selectDoctors,
} from 'Redux/reducers/doctorsSlice'

import constants from 'Constants'

import ChooseDoctor from './ChooseDoctor'

import './ChooseDoctor.scss'

const ChooseDoctorPage = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const doctors = useSelector(selectDoctors)
  const [offset, setOffset] = useState(6)
  const [search, setSearch] = useState('')

  useEffect(() => {
    dispatch(onStepChange(constants.steps.chooseDoctor))
  }, [dispatch])

  useEffect(() => {
    dispatch(fetchDoctors({ offset: offset, search: search }))
  }, [dispatch, offset, search])

  return (
    <ChooseDoctor
      t={t}
      setOffset={setOffset}
      doctors={doctors}
      onSearchValue={onSearchValue}
      setSearch={setSearch}
    />
  )
}

export default ChooseDoctorPage
