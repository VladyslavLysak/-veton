import React from 'react';

import doctorImage from '../../../assets/images/doctor.jpg';

import './DoctorCard.scss';


const DoctorCard = ({ doctor }) => {
    return (
        <div className='doctor-card'>
            <div className='doctor-card-container'>
                {doctor.name}
            </div>
        </div>
    );
};

export default DoctorCard;