import React from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import DoctorCard from 'Components/cards/DoctorCard';

import './PopularDoctors.scss';

const PopularDoctors = ({ doctors, t }) => {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 1,
            paritialVisibilityGutter: 0,
        },
        tablet: {
            breakpoint: { max: 1024, min: 600 },
            items: 2,
            slidesToSlide: 1,
            paritialVisibilityGutter: 0,
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 2,
            slidesToSlide: 2,
            paritialVisibilityGutter: 0,
        },
    };
    return (
        <div className='popular-doctors-container'>
            <div>
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    swipeable
                    itemClass="carousel-item-padding"
                    centerMode={false}
                    autoPlay
                    // showArrows
                    autoPlaySpeed={3000}
                    // removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
                    partialVisible
                >
                    {doctors?.map((doctor) => (
                        <DoctorCard key={`popular-doctor-${doctor.id}`} doctor={doctor} />
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default PopularDoctors;