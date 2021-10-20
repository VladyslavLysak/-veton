import React, { useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { fetchCities } from 'Redux/reducers/citiesSlice';

import Home from './Home';

const HomePage = () => {

    const { t } = useTranslation();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCities());
    }, [dispatch]);

    return <Home t={t} />;
};

export default HomePage;