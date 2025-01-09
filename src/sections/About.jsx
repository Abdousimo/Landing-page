import React from 'react'
import { useTranslation } from 'react-i18next'

const About = () => {
    const { t } = useTranslation()
  return (
    <section id='about' className="section flex flex-col lg:flex-row gap-6">
       <div className='w-full lg:w-1/2'>
            <img src="/girl.jpg" alt="about" className="w-full"/>
       </div>
        <div className='w-full lg:w-1/2 flex flex-col text-paragraph py-4 px-8 gap-4'>
         <div className='space-y-4 mb-10'>
            <span className='text-[#872BFF] font-semibold'>{t('About.title').toUpperCase()}</span>
            <h1 className='text-4xl font-bold'>{t('About.subtitle')}</h1>
            <p>{t('About.paragraph')}</p>
         </div>
          <div className='w-full grid grid-cols-2 gap-4 justify-between'>
             <div className='flex flex-col items-center justify-center gap-4 border-[1px] border-slate-200 rounded-xl py-6'>
                <span className='text-primary font-semibold text-2xl'>200+</span>
                <p className='font-semibold text-sm'>{t('About.numbers.one')}</p>
             </div>
             <div className='flex flex-col items-center justify-center gap-4 border-[1px] border-slate-200 rounded-xl py-6'>
                <span className='text-primary font-semibold text-2xl'>29K</span>
                <p className='font-semibold text-sm'>{t('About.numbers.two')}</p>
             </div>
             <div className='flex flex-col items-center justify-center gap-4 border-[1px] border-slate-200 rounded-xl py-6'>
                <span className='text-primary font-semibold text-2xl'>450</span>
                <p className='font-semibold text-sm'>{t('About.numbers.three')}</p>
             </div>
             <div className='flex flex-col items-center justify-center gap-4 border-[1px] border-slate-200 rounded-xl py-6'>
                <span className='text-primary font-semibold text-2xl'>24/7</span>
                <p className='font-semibold text-sm'>{t('About.numbers.four')}</p>
             </div>
          </div>
       </div>
    </section> 
  )
}

export default About