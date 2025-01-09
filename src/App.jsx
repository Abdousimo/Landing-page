import React,{useState,useEffect} from 'react'
import { useTranslation } from 'react-i18next'
import Hero from './sections/Hero'
import About from './sections/About'
import FAQS from './sections/FAQS'
import Testimonials from './sections/Testimonials'
import HowItWork from './sections/HowItWork'
import Sponsors from './sections/Sponsors'
import Footer from './sections/Footer'
import Navbar from './sections/Navbar'



function App() {
  const { t } = useTranslation()
  const [activeSection, setActiveSection] = useState("");

 
  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    const observerOptions = {
      root: null, 
      threshold: 0.5, 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);
  

 
  return (
    <>
    <Navbar activeSection={activeSection}/>
    <Hero />
    <Sponsors/>
    <About activeSection={activeSection}/>
    <HowItWork activeSection={activeSection}/>
    <Testimonials/>
    <div className='relative py-20 h-auto'>
        <img src='/group.jpg' alt='/'/>
        <div className='absolute text-2xl lg:text-4xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-paragraph font-bold bg-white p-4 w-full'>
          {t('Panel.desc').toUpperCase()}
        </div>
    </div>
    <FAQS/>
    <Footer activeSection={activeSection}/>
  </>
  )
}

export default App
