import React from 'react'
import { SPONSORS } from '../constants'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';





const Sponsors = () => {
    
  return (
    <div className='flex justify-center items-center bg-[#F7F7F7] my-10'>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={false}
        loop={true}
        breakpoints={{
          100: {
            slidesPerView: 2,
          },
            640: {
                slidesPerView: 3,
            },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
            SPONSORS.map((sponsor, index) => (
                <SwiperSlide key={index}>
                <img src={sponsor.logo} alt='sponsor' className='object-contain w-40 h-24'/>
                </SwiperSlide>
            ))
        }
      </Swiper>
    </div>
  )

}


export default Sponsors