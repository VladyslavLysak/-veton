import React from 'react';

import { useSelector } from 'react-redux';

import { selectActiveStep } from 'Redux/reducers/basicSlice';

import './Step.scss';

const Step = ({ step }) => {

    const activeStep = useSelector(selectActiveStep);

    return (
        <div className={`step-container ${activeStep === step.id ? 'active-step' : ''}`}>
            <div className='step-content'>
                {step.icon && step.icon}
                <p>
                    {step.label}
                </p>
            </div>
        </div>
    );
};

export default Step;