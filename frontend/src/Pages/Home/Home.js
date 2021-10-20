import React from 'react';

import PopularDoctors from 'Components/PopularDoctors';

import './Home.scss';

const Home = ({ t }) => {
    return (
        <div className='home-container'>
            <div className='home-vet-container'>
                <div className='home-vet-description'>
                    <h2>Veton</h2>
                    <h4>{t('home:subtitle')}</h4>
                    <button className='button'>
                        {t('home:getStarted')}
                    </button>
                </div>
            </div>
            <PopularDoctors />
        </div>
    );
};

export default Home;