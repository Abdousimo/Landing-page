import React from 'react'
import { useTranslation } from 'react-i18next'
import Form from '../components/Form'

const Hero = () => {
  const { t } = useTranslation()
  return (
    <section id='hero' className="section container bg-[url('/background1.png')] bg-cover bg-center h-auto mt-10">
      <div className="relative  flex flex-col items-center justify-center text-3xl md:text-5xl gap-4 font-bold pt-8 pb-20">
        <p>{t('Hero.title.black')}<span className='text-primary pl-1'>{t('Hero.title.orange')}</span></p>
        <p>{t('Hero.subtitle.black')}<span className='text-primary pl-1'>{t('Hero.subtitle.orange')}</span></p>
        <span className='absolute right-8 top-0 bg-primary p-1 md:p-3 rounded-full flex items-center justify-center'>
          <img src='/send-vec.png' id='animation2' className='w-2 h-2 md:w-4 md:h-4'/>
        </span>
      </div>
      <Form/>
    </section>
  )
}

export default Hero