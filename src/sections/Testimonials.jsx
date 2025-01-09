import React from 'react'
import { useTranslation } from 'react-i18next'
import ClientCard from '../components/ClientCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';
import 'swiper/css/free-mode';

const Testimonials = () => {
    const { t } = useTranslation()
    const pagination = {
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className +  '">' + (index + 1) + '</span>';
      },
    };
  return (
    <section className='bg-pink py-[30px]'>
       <p className='text-center text-[#872BFF] font-semibold'>{t('Testimonials.title').toUpperCase()}</p>
       <h1 className='text-center text-2xl font-bold text-paragraph'>{t('Testimonials.subtitle')}</h1>
       <div className='p-10 flex justify-center items-center'>
        <Swiper 
        pagination={{ 
          clickable: true,
      }} 
        navigation={false}
        freeMode={true}
        loop={true}
        modules={[Pagination,Navigation,FreeMode]} 
        className="py-10 flex items-center justify-center relative"
        centeredSlides={true}
        defaultChecked={true}
        breakpoints={{
          768: { slidesPerView: 2, spaceBetween: 30 }, 
          1024: { slidesPerView: 2, spaceBetween: 30 },
           
      }}
        >
          <SwiperSlide className='h-[90%]'><ClientCard name={"Abdou ismail"} desc={'Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'} role={'Travel Enthusiast'} rating={5}/></SwiperSlide>
          <SwiperSlide className='h-[90%]'><ClientCard name={"Abdou ismail"} desc={'Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'} role={'Travel Enthusiast'} rating={4}/></SwiperSlide>
          <SwiperSlide className='h-[90%]'><ClientCard name={"Abdou ismail"} desc={'Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'} role={'Travel Enthusiast'} rating={5}/></SwiperSlide>
        </Swiper>
        </div> 
    </section>
  )
}

export default Testimonials