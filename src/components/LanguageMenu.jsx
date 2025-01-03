import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import { LANGUAGES } from "../constants";
import { useTranslation } from "react-i18next";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

//const isActive = ({ isActive }) => `link ${isActive ? "active" : ""}`;

export const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setShowMenu(false);
  }

  return (
    <>
    <div className="relative">
  <div className="inline-flex items-center overflow-hidden rounded-md bg-white p-1">
  <span className="flex gap-2 text-gray-500">
          <img src={i18n.language === 'en' ? '/assets/flags/uk.png':'/assets/flags/fr.png'} alt="/" className="w-6 h-6 rounded"/>
          
        </span>

    <button onClick={()=>setShowMenu(!showMenu)} className="h-full p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700">
      <span className="sr-only">Menu</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-4"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  </div>

  {showMenu&&<div
    className="absolute end-0 z-10 mt-2 w-fit rounded-md border border-gray-100 bg-white shadow-lg"
    role="menu"
  >
    <div className="p-2">
    {showMenu && LANGUAGES.map((lang,index) => (
      <button
      key={index}
      onClick={() => changeLanguage(lang.code)}
        className="flex gap-2 rounded-lg text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
        role="menuitem"
      >
        <img src={lang.label} alt="/" className="w-6 h-6 rounded mb-1"/>
        <span>{lang.code.toUpperCase()}</span>
      </button>

    ))}
      

      

    </div>
  </div>}
</div>
    </>
  )
}


export default Menu;



