import React from 'react'

import ImageRow from 'Components/ImageRow'

import doctorImage from 'Assets/images/doctor.jpg'
import LocationCityIcon from '@mui/icons-material/LocationCity'
import EmailIcon from '@mui/icons-material/Email'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'

import './DoctorCard.scss'

const DoctorCardLayout = ({ doctor, activeCity }) => {
  return (
    <div className='doctor-card'>
      <div className='doctor-card-container'>
        <img
          src={doctorImage}
          alt={doctor.name}
          className='doctor-image'
        />
        <div className='doctor-card-description'>
          <h4 className='doctor-name'>{`${doctor.name} ${doctor.surname}`}</h4>
          <ImageRow Icon={LocationCityIcon} description={activeCity} />
          <ImageRow Icon={EmailIcon} description={doctor.email} />
          <ImageRow Icon={LocalPhoneIcon} description={doctor.phone} />
        </div>
      </div>
    </div>
  )
}

export default DoctorCardLayout
