import React, { useMemo } from 'react';

import { useTranslation } from 'react-i18next';

import constants from 'Constants';

import Logo from 'Components/Logo';
import Step from 'Components/Step';

import ChatIcon from '@material-ui/icons/Chat';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';

import './Sidebar.scss';


const Sidebar = () => {

    const { t } = useTranslation();

    const steps = useMemo(() => ([
        {
            label: t('sidebar:start'),
            icon: <PlayCircleFilledWhiteIcon className='step-icon' />,
            id: constants.steps.start
        },
        {
            label: t('sidebar:selectDoctor'),
            icon: <PermContactCalendarIcon className='step-icon' />,
            id: constants.steps.chooseDoctor
        },
        {
            label: t('sidebar:completeData'),
            icon: <EventAvailableIcon className='step-icon' />,
            id: constants.steps.personal
        },
        {
            label: t('sidebar:confirmation'),
            icon: <CheckCircleIcon className='step-icon' />,
            id: constants.steps.confirmation
        }
    ]
    ), [t]);

    return (
        <div className='sidebar-container'>
            <div className='sidebar-content'>
                <Logo />
                <div className='sidebar-steps-container'>
                    {steps.map((el) => <Step key={el.id} step={el} />)}
                </div>
                <div className='sidebar-chat-container'>
                    <div className='sidebar-chat-content'>
                        <h4>{t('sidebar:chat')}</h4>
                        <ChatIcon className='chat-icon' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;