import React from 'react';

import { useTranslation } from 'react-i18next';

import './Logo.scss';

const Logo = () => {

    const { t } = useTranslation();

    return (
        <div className='logo-container'>
            <h2>Veton</h2>
            <p>{t('logo:subtitle')}</p>
        </div>
    );
};

export default Logo;