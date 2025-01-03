import { Menu } from './LanguageMenu'
import React, { useState } from 'react'
import { IoClose, IoReorderThreeOutline } from "react-icons/io5";
import { useTranslation } from 'react-i18next';




const Navbar = ({activeSection}) => {
    const [open,setOpen] = useState(false)
    const { t } = useTranslation()
  return (
    <nav className='h-20 w-full fixed top-0 z-10 bg-white flex justify-center'>
        <div className='container h-20 w-full flex items-center justify-between fixed top-0 z-20 px-[1rem]'>
            <a className='' href={'/'}>
                 <h1 className="text-2xl md:text-3xl font-bold">Bag&Go</h1>
            </a>
            <ul className='lg:flex justify-between items-center gap-8 hidden'>
                <li className='hover:text-gray-400 text-gray-200 cursor-pointer'>
                   <a className={activeSection === "hero" ? "active" : ""} href={'/#hero'}>
                      {t('Navbar.list.home')}
                    </a>
                </li>
                <li className='hover:text-gray-400 text-gray-200 cursor-pointer'>
                    <a className={activeSection === "about" ? "active" : ""} href={'/#about'}>
                    {t('Navbar.list.about')}
                    </a>
                </li>
                <li className='hover:text-gray-400 text-gray-200 cursor-pointer'>
                    <a className={activeSection === "howitworks" ? "active" : ""} href={'/#howitworks'}>
                        {t('Navbar.list.howitworks')}
                    </a>
                </li>
                <li className='hover:text-gray-400 text-gray-200 cursor-pointer'>
                    <a className={activeSection === "contact" ? "active" : ""} href={'/#contact'}>
                        {t('Navbar.list.contact')}
                    </a>
                </li>
           </ul>
           <div className='hidden lg:flex gap-8 items-center'>
                <Menu/>
                <button className='bg-white font-semibold py-2 px-4 rounded'>{t('Navbar.button.register')}</button>
                <button className='bg-primary font-semibold text-white py-2 px-4 rounded'>{t('Navbar.button.login')}</button>
           </div>
           <div className='lg:hidden flex gap-4 items-center'>
           <Menu/>
            {open ?
            <button onClick={()=>setOpen(!open)} className={`block lg:hidden duration-500 ${open && 'rotate-180'}`}>
                  <IoClose size={30}/>
            </button>
            :
            <button onClick={()=>setOpen(!open)} className='block lg:hidden duration-500'>
                  <IoReorderThreeOutline size={30}/>
            </button>}
            </div>
           
        </div>
        <div className={`h-screen w-full fixed top-0 z-10 bg-black/50 p-2 text-white duration-1000 ${open ? "left-0" : "-left-[1000rem]"}`}>
           <ul className='h-[calc(100vh-80px)] mt-20 flex flex-col items-end gap-8 p-10'>
                <li className='hover:text-gray-400 text-gray-200 cursor-pointer'>
                   <a onClick={()=>setOpen(!open)} href={'/#hero'}>
                   {t('Navbar.list.home')}
                    </a>
                </li>
                <li className='hover:text-gray-400 text-gray-200 cursor-pointer'>
                    <a onClick={()=>setOpen(!open)} href={'/#about'}>
                    {t('Navbar.list.about')}
                    </a>
                </li>
                <li className='hover:text-gray-400 text-gray-200 cursor-pointer'>
                    <a onClick={()=>setOpen(!open)} href={'/#howitworks'}>
                        {t('Navbar.list.howitworks')}
                    </a>
                </li>
                <li className='hover:text-gray-400 text-gray-200 cursor-pointer'>
                    <a onClick={()=>setOpen(!open)} href={'/#contact'}>
                        {t('Navbar.list.contact')}
                    </a>
                </li>
                <div className='flex flex-col gap-8 items-center'>
                  <button className='bg-white font-semibold py-2 px-4 rounded text-black'>{t('Navbar.button.register')}</button>
                  <button className='bg-primary font-semibold text-white py-2 px-4 rounded'>{t('Navbar.button.login')}</button>
                </div>
           </ul>
        </div>
        
    </nav>
  )
}

export default Navbar