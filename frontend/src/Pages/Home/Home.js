import React from 'react';

import PopularDoctors from 'Components/PopularDoctors';

import constants from 'Constants';

import './Home.scss';

const Home = ({ t, history }) => {

    const handleStartClick = () => {
        history.push(constants.routes.choose)
    }

    return (
        <div className='home-container'>
            <div className='home-vet-container'>
                <div className='home-vet-description'>
                    <h2>Veton</h2>
                    <h4>{t('home:subtitle')}</h4>
                    <button className='button' onClick={handleStartClick}>
                        {t('home:getStarted')}
                    </button>
                </div>
            </div>
            <PopularDoctors />
        </div>
    );
};

export default Home;