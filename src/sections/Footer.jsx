import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'



const Footer = () => {
  const { t } = useTranslation()
  return (
    <footer id='contact' className='section container py-8 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4 flex-wrap'>
        <h1 className='text-primary text-3xl font-bold'>Bag&Go</h1>
        <div className=''>
            <p className='font-bold'>{t('Footer.one.title')}</p>
            <p className='text-gray'>{t('Footer.one.content.one')}</p>
            <p className='text-gray'>{t('Footer.one.content.two')}</p>
            <p className='text-gray'>{t('Footer.one.content.three')}</p>
        </div>
        <div className=''>
            <p className='font-bold'>{t('Footer.two.title')}</p>
            <p className='text-gray'>{t('Footer.two.content.one')}</p>
            <p className='text-gray'>{t('Footer.two.content.two')}</p>
            <p className='text-gray'>{t('Footer.two.content.three')}</p>
        </div>
        <div className=''>
            <p className='font-bold'>{t('Footer.three.title')}</p>
            <p className='text-gray'>{t('Footer.three.content.one')}</p>
            <p className='text-gray'>{t('Footer.three.content.two')}</p>
            <p className='text-gray'>{t('Footer.three.content.three')}</p>
        </div>
        <div>
            <p className='font-bold'>{t('Footer.four.title')}</p>
            <form className='flex gap-2 mb-2'>
              <input type='text' placeholder={t('Footer.four.form.placeholder')} className='focus:outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-[3px] text-xs '/>
              <button type='submit' className='bg-primary text-white px-3 py-1 rounded'>{t('Footer.four.form.button')}</button>
            </form>
            <div className='flex gap-2 pt-2'>
              <span className='font-bold'>{t('Footer.four.follow')}</span>
              <div className='flex gap-1 text-primary'>
                  <FaLinkedin size={20}/>
                  <FaFacebook size={20}/>
                  <FaInstagram size={20}/>
              </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer