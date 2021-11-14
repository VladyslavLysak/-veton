import React from 'react'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import DoctorCard from 'Components/cards/DoctorCard'

import './PopularDoctors.scss'

const PopularDoctors = ({ doctors, t }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 3,
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
  }
  return (
    <div className='popular-doctors-container'>
      <h2 className='block-title-center'>{t('home:popularDoctors')}</h2>
      <div>
        <Carousel
          responsive={responsive}
          infinite={true}
          swipeable
          itemClass='carousel-item-padding'
          centerMode={false}
          autoPlay
          // showArrows
          autoPlaySpeed={3000}
          // removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
          partialVisible>
          {doctors?.map((doctor) => (
            <DoctorCard
              key={`popular-doctor-${doctor.id}`}
              doctor={doctor}
            />
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default PopularDoctors
