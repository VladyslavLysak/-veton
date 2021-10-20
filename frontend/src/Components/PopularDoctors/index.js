import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { fetchPopularDoctors, selectPopularDoctors } from 'Redux/reducers/doctorsSlice';

import PopularDoctorsPage from './PopularDoctors';

const PopularDoctors = () => {

    const dispath = useDispatch();
    const doctors = useSelector(selectPopularDoctors);
    const { t } = useTranslation();

    useEffect(() => {
        dispath(fetchPopularDoctors())
    }, [dispath]);

    return <PopularDoctorsPage doctors={doctors} t={t} />
};

export default PopularDoctors;