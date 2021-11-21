import React from 'react'

import DoctorCard from 'Components/cards/DoctorCard'

const ChooseDoctor = ({
  t,
  paginate,
  doctors,
  onSearchValue,
  setSearch,
  cities,
  activeLang,
  activeCity,
  handleChangeCity,
  activeHospital,
  handleChangeHospital,
}) => {
  return (
    <div className='page-container choose-doctor-container'>
      <h2 className='title'>{t('choose:title')}</h2>
      <div className='choose-block'>
        <h3 className='block-title'>{t('choose:selectCity')}</h3>
        <div className='choose-buttons'>
          {cities.map((city) => (
            <span
              className='choose-button-container'
              key={`${city.id}-cities`}>
              <button
                className={`button button-circle ${
                  city?.id === activeCity?.id ? 'active-button' : ''
                }`}
                onClick={() => handleChangeCity(city)}>
                {city.name[activeLang]}
              </button>
            </span>
          ))}
        </div>
      </div>
      {activeCity ? (
        <div className='choose-block'>
          <h3 className='block-title'>{t('choose:selectHospital')}</h3>
          {activeCity.hospitals.map((hospital) => (
            <span
              className='choose-button-container'
              key={`${hospital._id}-hospitals`}>
              <button
                className={`button button-circle ${
                  hospital?._id === activeHospital?._id
                    ? 'active-button'
                    : ''
                }`}
                onClick={() => handleChangeHospital(hospital)}>
                {hospital[activeLang]}
              </button>
            </span>
          ))}
        </div>
      ) : null}
      {activeHospital ? (
        <div className='choose-block doctors-block'>
          <h3 className='block-title-center'>
            {t('choose:selectDoctor')}
          </h3>
          <div className='doctors-container'>
            <ul>
              {doctors?.map((doctor) => (
                <li key={doctor._id}>
                  <DoctorCard doctor={doctor} />
                </li>
              ))}
            </ul>
            <div className='button-more-container' onClick={paginate}>
              <button className='button'>{t('choose:loadMore')}</button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default ChooseDoctor
