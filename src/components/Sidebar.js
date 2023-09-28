import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "../components/CartItem";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
        } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] 
      transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex justify-between items-center py-4 border-t">
        <div className="uppercase font-semibold">
          <span className="mr-2">Total:</span>
          ${parseFloat(total).toFixed(2)}
        </div>
        <div
          onClick={clearCart}
          className="cursor-pointer bg-lime-600 text-white w-12 h-12 flex 
          justify-center items-center text-xl"
        >
          <FiTrash2 />
        </div>
       
      </div>
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">
          Shopping Bag ({itemAmount})
        </div>
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[520px] lg:h-[640px] 
      overflow-y-auto overflow-x-hidden">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}

         
<Link to='/dashboard' className="bg-bluegray-200 flex p-4 justify-center
       items-center text-primary w-full font-medium" > View Cart </Link>
      <Link to='/' className="bg-gray-200 flex p-4 justify-center
       items-center text-bluegray-200 w-full font-medium"> Checkout </Link>
      </div>
    </div>
  );
};

export default Sidebar;
