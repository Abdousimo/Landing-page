import React from 'react'
import { useTranslation } from 'react-i18next'


const HowItWork = () => {
    const { t } = useTranslation()
  return (
    <section id='howitworks' className='section container text-paragraph mt-20'>
        <h1 className='text-center font-bold text-3xl lg:text-5xl'>{t('HowItWorks.title')}</h1>
        <div className='flex flex-col items-center mt-8'>
            <p className='text-center text-sm max-w-[40rem]'>{t('HowItWorks.subtitle')}</p>
        </div>
        <div className='flex flex-col lg:flex-row lg:justify-between justify-center gap-8 my-20'>
             <div className='flex flex-row lg:flex-col items-center justify-center gap-4 lg:max-w-[260px]'>
                <span className='w-[50px] h-[50px] flex justify-center items-center bg-primary rounded-full text-white font-semibold'>1</span>
                <div className='text-sm flex flex-col items-center gap-2'>
                    <span className='font-bold'>{t('HowItWorks.steps.one.title')}</span>
                    <p className='text-center max-w-[200px]'>{t('HowItWorks.steps.one.description')}</p>
                </div>
             </div>

             <div className='flex flex-row lg:flex-col items-center justify-center gap-4 lg:max-w-[260px]'>
                <span className='w-[50px] h-[50px] flex justify-center items-center bg-primary rounded-full text-white font-semibold'>2</span>
                <div className='text-sm flex flex-col items-center gap-2'>
                    <span className='font-bold'>{t('HowItWorks.steps.two.title')}</span>
                    <p className='text-center max-w-[200px]'>{t('HowItWorks.steps.two.description')}</p>
                </div>
             </div>

             <div className='flex flex-row lg:flex-col items-center justify-center gap-4 lg:max-w-[260px]'>
                <span className='w-[50px] h-[50px] flex justify-center items-center bg-primary rounded-full text-white font-semibold'>3</span>
                <div className='text-sm flex flex-col items-center gap-2'>
                    <span className='font-bold'>{t('HowItWorks.steps.three.title')}</span>
                    <p className='text-center max-w-[200px]'>{t('HowItWorks.steps.three.description')}</p>
                </div>
             </div>
        </div>
    </section>
  )
}

export default HowItWork