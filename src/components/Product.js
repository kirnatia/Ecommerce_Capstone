import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { CgDetailsMore } from "react-icons/cg";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const { id, image, title, price, rating } = product;


  const fullStars = Math.floor(rating.rate);
  const hasHalfStar = rating.rate - fullStars >= 0.5;
  const totalStars = 5; 

  return (
    <div className="max-w-sm relative rounded overflow-hidden shadow-lg">
      {/* Buttons */}
      <div className="absolute top-2 right-2 flex flex-col items-end space-y-2">
        <button
          onClick={() => addToCart(product, id)}
          className="bg-emerald-400 hover:bg-emerald-500 text-white 
          font-bold py-1 px-2 text-sm"
        >
          <MdAddShoppingCart className="inline-block mr-2 text-base" />
          Add
        </button>
        <Link
          to={`/product/${id}`}
          className="w-8 h-8 bg-yellow-200 flex justify-center 
          items-center text-primary rounded-full hover:bg-yellow-300"
        >
          <CgDetailsMore className="text-sm" />
        </Link>
      </div>

      <img
        className="contrast-100 w-[160px] h-[160px] object-cover product-image"
        src={image}
        alt={title}
      />
      <div className="px-4 py-4">
        <div className="font-semibold text-md mb-1">{title}</div>

        <div className="text-gray-700 text-base">
          <span className="font-bold">${price}</span>
        </div>
      </div>
      <div className="px-6 py-4">
        <div className="flex items-center">
       
          {Array.from({ length: fullStars }, (_, index) => (
            <FaStar key={`full-star-${index}`} className="text-yellow-500" />
          ))}
         
          {hasHalfStar && <FaStarHalfAlt className="text-yellow-500" />}
      
          {Array.from(
            { length: totalStars - fullStars - (hasHalfStar ? 1 : 0) },
            (_, index) => (
              <FaStar key={`empty-star-${index}`} className="text-gray-300" />
            )
          )}
      
          <span className="ml-2 text-gray-600">
            ({rating.rate} / 5.0, {rating.count} reviews)
          </span>
        </div>
      </div>
    </div>
  );
};

export default Product;
