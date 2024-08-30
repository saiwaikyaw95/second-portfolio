import React, {useEffect, useState} from 'react'
import {navItems} from '../constants'
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import moon from '../assets/moon.png';
import sun from '../assets/sun.png';

const Navbar = () => {
  const [theme, setTheme] = useState('light');
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    }else{
      document.documentElement.classList.remove('dark');

    }
  }, [theme])

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-5 backdrop-blur-lg bordr-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flexshrink-0">            
            <span className="text-2xl font-bold tracking-tight ms-2">SK</span>
          </div>
          <ul className='hidden lg:flex ml-14 space-x-12 uppercase'>
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
            <div onClick={handleThemeSwitch} className='my-auto me-2'>
              {theme === 'light' ? <img src={moon} className='w-5 cursor-pointer' alt=''></img> : 
              <img src={sun} className='w-5 cursor-pointer' alt=''></img>}
            </div> 
          <div className="lg:hidden md:flex flex-column justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <RxCross2 size={20}/> : <MdMenu size={20}/>}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
            {navItems.map((item, index) => (
              <li key={index} className='py-4 uppercase'>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar