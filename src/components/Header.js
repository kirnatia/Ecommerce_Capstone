import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import Logo from "../img/Logo.png";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [showMenu, setShowMenu] = useState(false); // Added state to control mobile menu visibility
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  // Toggle the mobile menu when the "Menu" button is clicked
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header
      // className={`${
      //   isActive ? "bg-white py-4 shadow-md" : "bg-none py-0"
      // } fixed w-full z-10 transition-all `}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link to={`/`}>
          <div className="w-16 sm:w-12">
            <img src={Logo} alt="" className="w-full" />
          </div>
        </Link>
        <div className="sm:hidden">
          <button
            onClick={() => {
              setIsActive(!isActive);
              toggleMenu(); // Toggle mobile menu when clicking "Menu"
            }}
            className="text-2xl p-2 focus:outline-none"
          >
            {isActive ? "Close" : "Menu"}
          </button>
        </div>
        <div
          className={`sm:flex space-x-4 ${
            showMenu ? "block" : "hidden" // Use showMenu state to control visibility
          } sm:space-x-8`}
        >
          <Link to={`/`}>
            <div className="text-lg sm:text-sm">Home</div>
          </Link>
          <Link to={`/landing`}>
            <div className="text-lg sm:text-sm">All Products</div>
          </Link>
          <Link to={`/login`}>
            <div className="text-lg sm:text-sm">Login</div>
          </Link>
          <Link to={`/signup`}>
            <div className="text-lg sm:text-sm">Register</div>
          </Link>
          <Link to={`/dashboard`}>
            <div className="text-lg sm:text-sm">My profile</div>
          </Link>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer flex relative"
          >
            <BsBag className="text-2xl" />
            <div className="bg-orange-500 absolute -right-2 -bottom-2 text-[16px] w-[18px] text-white rounded-full flex justify-center items-center">
              {itemAmount}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
