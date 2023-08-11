import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiFillShopping } from 'react-icons/ai';
import HeroSection from './HeroSection.jsx'

const Header = () => {

  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  }
  return (

    <div>
      <header className='flex justify-between items-center h-[10vh]  text-white bg-[#27272A] px-8'>
        <div className="flex items-center">
          <img src='/assets/img/logo.png' alt="Company Logo" className="w-60 h-auto ml-4" />
        </div>

        <nav>
          <ul className="hidden md:flex">
            <li className='p-4 text-xl'><a href="/" className='hover:text-[#78716C]'>Home</a></li>
            <li className='p-4 text-xl'><a href="/" className='hover:text-[#78716C]'>Shop</a></li>
            <li className='p-4 text-xl'><a href="/" className='hover:text-[#78716C]'>About</a></li>
            <li className='p-4 text-xl'><a href="/" className='hover:text-[#78716C]'>Contact</a></li>
            <li className='p-4 text-xl group'><AiFillShopping size={22} className='transition-color group-hover:text-[#78716C]' /></li>
          </ul>
        </nav>
        <div onClick={handleNav} className='block md:hidden'>
          {!nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>

        <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#27272A] ease-in-out duration-500' : 'fixed left-[-100%] ease-in-out duration-500'}>
          <ul className="pt-24 uppercase ">
            <li className='p-4 border-b border-white'><a href="/">Home</a></li>
            <li className='p-4 border-b border-white'><a href="/">Shop</a></li>
            <li className='p-4 border-b border-white'><a href="/">About</a></li>
            <li className='p-4 border-b border-white'><a href="/">Contact</a></li>
          </ul>
        </div>

      </header>
      <HeroSection />

    </div>
  );
};



export default Header;


       // <nav>
      // <ul className='flex flex-wrap'>
      // <li className='p-2'><a href="/">WOMEN</a></li>
       // <li className='p-2'><a href="/">MEN</a></li>
       // <li className='p-2'><a href="/">BEAUTY</a></li>
      //  <li className='p-2'><a href="/">HOME</a></li>
     // </ul>
   // </nav>

   //bg-[#27272A]
   //src='/assets/img/logo.png'