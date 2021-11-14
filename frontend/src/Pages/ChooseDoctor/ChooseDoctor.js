import React from 'react'

const ChooseDoctor = ({
  t,
  setOffset,
  doctors,
  onSearchValue,
  setSearch,
}) => {
  return (
    <div className='page-container choose-doctor-container'>
      <h2 className='title'>{t('choose:title')}</h2>
    </div>
  )
}

export default ChooseDoctor
