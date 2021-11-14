import React from 'react';

import ImageRow from 'Components/ImageRow'

import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import BeenhereIcon from '@mui/icons-material/Beenhere';

import { useTranslation } from 'react-i18next';

import './Footer.scss';

const Footer = () => {

    const { t } = useTranslation();

    return (
        <div className='footer-container'>
            <div>
                <h3 className='footer-title'>{t('footer:contact')}</h3>
                <ImageRow Icon={LocationOnIcon} description={t('footer:address')} />
                <ImageRow Icon={LocalPhoneIcon} description='+48 791 898 966' />
                <ImageRow Icon={EmailIcon} description='veton@gmail.com' />
            </div>
            <div>
                <h3 className='footer-title'>{t('footer:grafik')}</h3>
                <ImageRow Icon={AccessTimeIcon} description={`${t('footer:day')} 08:00 - 18:00`}/>
                <ImageRow Icon={AccessTimeIcon} description={`${t('footer:weekday')} 09:00 - 17:00`}/>
            </div>
            <div>
                <h3 className='footer-title'>{t('footer:socials')}</h3>
                <div className='footer-part'>
                    <BeenhereIcon className='part-icon' />
                    <h4>{t('footer:become')}</h4>
                </div>
                <div className='footer-part'>
                    <ContactMailIcon className='part-icon' />
                    <h4>{t('footer:contact_us')}</h4>
                </div>
                <div className='footer-container-socials'>
                    <FacebookIcon className='footer-social' />
                    <InstagramIcon className='footer-social' />
                    <TelegramIcon className='footer-social' />
                    <WhatsAppIcon className='footer-social' />
                </div>
            </div>
        </div>
    );
};

export default Footer;