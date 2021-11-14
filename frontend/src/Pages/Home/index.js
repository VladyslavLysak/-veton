import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { fetchCities } from 'Redux/reducers/citiesSlice';
import { onStepChange } from 'Redux/reducers/basicSlice'

import constants from 'Constants';

import Home from './Home';

const HomePage = () => {

    const { t } = useTranslation();
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(fetchCities());
        dispatch(onStepChange(constants.steps.start))
    }, [dispatch]);

    return <Home t={t} history={history} />;
};

export default HomePage;