import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import Logo from "../img/Logo.png";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="bg-emerald-200">
      <div className="container mx-auto py-4 flex items-center justify-between h-full">
        <Link to={`/`} className="flex items-center">
          <img src={Logo} alt="" className="w-16 h-16" />
        </Link>
        <div className="hidden sm:flex space-x-4">
      
          <Link to={`/`} className="text-lg sm:text-base">
            Home
          </Link>
          <Link to={`/landing`} className="text-lg sm:text-base">
            All Products
          </Link>
          <Link to={`/login`} className="text-lg sm:text-base">
            Login
          </Link>
          <Link to={`/signup`} className="text-lg sm:text-base">
            Register
          </Link>
          <Link to={`/dashboard`} className="text-lg sm:text-base">
            My profile
          </Link>
        </div>
        <div className="sm:hidden">
          <button
            onClick={() => {
              setIsActive(!isActive);
              toggleMenu();
            }}
            className="text-2xl p-1 focus:outline-none"
          >
            {isActive ? "Close" : "Menu"}
          </button>
        </div>
        <div className={`sm:hidden ${showMenu ? "block" : "hidden"}`}>
          <Link to={`/`} className="block text-lg text-sm font-normal">
            Home
          </Link>
          <Link to={`/landing`} className="block text-lg text-sm font-normal">
            All Products
          </Link>
          <Link to={`/login`} className="block text-lg text-sm font-normal">
            Login
          </Link>
          <Link to={`/signup`} className="block text-lg text-sm font-normal">
            Register
          </Link>
          <Link to={`/dashboard`} className="block text-lg text-sm font-normal">
            My profile
          </Link>
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative"
        >
          <BsBag className="text-2xl" />
          <div className="bg-orange-400 absolute -right-2 -bottom-2 text-[16px] 
          w-[18px] text-white rounded-full flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
