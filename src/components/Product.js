import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";
const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const { id, image, category, title, price } = product;
  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4
       relative overflow-hidden group transition">
        <div>{/*image */}</div>
        <div className="w-[160px] mx-auto flex justify-center items-center">
          <img
            className="max-h-full group-hover:scale-110 transition duration-300"
            src={image}
            alt=""
          />
        </div>
        <div
          className="absolute top-3 -right-11
        group-hover:right-5 bg-rose-400 p-0.01 flex flex-col items-center justify-center gap-y-2 opacity-0 
        group-hover:opacity-100 transition-all duration-300"
        >
          <button onClick={() => addToCart(product, id)}>
            <div className="flex justify-center items-center text-white w-12 h-12">
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <Link
            to={"/product/${id}"}
            className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"
          >
            <BsEyeFill></BsEyeFill>
          </Link>
        </div>
      </div>
      <div>
        <div className="text-sm capitalize font-bold bg-emerald-200 text-blue gray-800">{category}</div>
        <Link to={"/product/${id}"}>
          <h2 className="mb-1">{title}</h2>
        </Link>
        <div className="font-bold">${price}</div>
      </div>
    </div>
  );
};

export default Product;
