import React, { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import { BsBag } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Logo from '../img/Logo.png';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) :
        setIsActive(false);
    })
  })
  return (
    <header className={`${isActive ? 'bg-white py-4 shadow-md' :
      'bg-none py-6'} fixed w-full z-10 transition-all`  }>
      <div className='container mx-auto flex items-center
      justify-between h-full'>
        <Link to={`/`}>
          <div className='w-[60px] ml-[-20px] mt-[-20px] relative'>
            <img src={Logo} alt=""/>
          </div>
        </Link>
        <Link to={`/`}>
          <div className='w-[60px] ml-[-20px] mt-[-20px] relative'>
          <span>Home</span>
          </div>
        </Link>
        <Link to={`/login`}>
          <div className='w-[60px] ml-[-20px] mt-[-20px] relative'>
          <span>Login</span>
          </div>
        </Link>
        <Link to={`/signup`}>
          <div className='w-[60px] ml-[-20px] mt-[-20px] relative'>
          <span>Register</span>
          </div>
        </Link>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className='cursor-pointer flex relative'
        >
           
          <BsBag className='text-2xl' />
          <div className='bg-red-500 absolute -right-2 
          -bottom-2 text-[16px] w-[18px] text-white
          rounded-full flex justify-center items-center'>{itemAmount}</div>
        </div>
     
      </div>
      {/* <div>
          <NavBar className="w-[60px] ml-[-20px] mt-[-20px] relative"/>
          </div> */}
    </header>
  );
};

export default Header;
