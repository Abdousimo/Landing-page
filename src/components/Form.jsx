import React from 'react'
import { useTranslation } from 'react-i18next'


const Form = () => {
  const { t } = useTranslation()
  return (
    <div className='relative border-1px rounded'>
        <form className='flex flex-col gap-4 w-full'>
          <div className='border-[1px] border-[#06162D40] rounded-xl px-5 py-10 bg-white'>
            <div className='border-b-[1px] border-pink flex justify-center items-center gap-8 pb-8 flex-wrap'>
                <div className=''>
                  <input type='radio' id='one' name="group1" className=''/>
                  <label htmlFor="one" className='font-bold text-sm text-paragraph ml-2'>{t('Form.top.one')}</label>
                </div>
                <div className=''>
                  <input type='radio' id='two' name="group1" className=''/>
                  <label htmlFor="two" className='font-bold text-sm text-paragraph ml-2'>{t('Form.top.two')}</label>
                </div>
                <div className=''>
                  <input type='radio' id='three' name="group1" className=''/>
                  <label htmlFor="three" className='font-bold text-sm text-paragraph ml-2'>{t('Form.top.three')}</label>
                </div>
                <div className=''>
                  <input type='radio' id='four' name="group1" className=''/>
                  <label htmlFor="four" className='font-bold text-sm text-paragraph ml-2'>{t('Form.top.four')}</label>
                </div>
            </div>
            <div>
              <h1 className='font-bold text-paragraph pb-6'>{t('Form.bottom.title').toUpperCase()}</h1>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20'>
                  <div className='flex flex-col gap-2'>
                    <label className='text-paragraph font-bold flex items-center gap-2'>
                      <span>
                        <img src='/icons/departure.png' alt='/' className='object-contain w-8 h-8'/>
                      </span>
                      {t('Form.bottom.one.title')}
                    </label>
                    <input type='text' placeholder={t('Form.bottom.one.placeholder')} className='border-b-primary border-b-2 pb-2 focus:outline-none'/>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label className='text-paragraph font-bold flex items-center gap-2'>
                      <span>
                        <img src='/icons/arrival.png' alt='/' className='object-contain w-8 h-8'/>
                      </span>
                      {t('Form.bottom.two.title')}
                    </label>
                    <input type='text' placeholder={t('Form.bottom.two.placeholder')} className='border-b-primary border-b-2 pb-2 focus:outline-none'/>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label className='text-paragraph font-bold flex items-center gap-2'>
                      <span>
                        <img src='/icons/calender.png' alt='/' className='object-contain w-8 h-8'/>
                      </span>
                      {t('Form.bottom.three.title')}
                    </label>
                    <input type='date' placeholder={t('Form.bottom.three.placeholder')} className='border-b-primary border-b-2 pb-2 focus:outline-none text-gray w-full lg:w-auto'/>
                  </div>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-20 mt-10'>
                  <div className='flex flex-col gap-2'>
                    <label className='text-paragraph font-bold flex items-center gap-2'>{t('Form.bottom.four.title')}</label>
                    <input type='text' placeholder={t('Form.bottom.four.placeholder')} className='border-b-primary border-b-2 pb-2 focus:outline-none'/>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label className='text-paragraph font-bold flex items-center gap-2'>{t('Form.bottom.five.title')}</label>
                    <select type='text' placeholder={t('Form.bottom.five.placeholder')} className='border-b-primary border-b-2 pb-2 focus:outline-none text-gray'>
                      <option className='text-paragraph' value=''>{t('Form.bottom.five.option1')}</option>
                      <option className='text-paragraph' value=''>{t('Form.bottom.five.option2')}</option>
                      <option className='text-paragraph' value=''>{t('Form.bottom.five.option3')}</option>
                    </select>
                  </div>
              </div>
            </div>
          </div>
          <div className='relative flex justify-center'>
          <span className='absolute left-2 md:left-12 lg:left-32 top-2 bg-primary p-2 rounded-full flex items-center justify-center'>
          <img src='/map-vec.png' className='w-4 h-4' id='animation1'/>
        </span>
            <button type='submit' className='bg-primary text-white font-bold py-3 px-10 rounded-lg'>{t('Form.bottom.submit')}</button>
          </div>
        </form>
       <div className='w-40 h-40 absolute -top-32 left-0 z-0'>
        <img src='/plane1.png' className='object-contain w-full h-full'/>
       </div>
       {/* <div className='w-40 h-40- absolute right-0 -bottom-2 z-0'>
        <img src='/plane2.png' className='object-contain w-full h-full -rotate-45'/>
       </div> */}
       
    </div>
  )
}

export default Form