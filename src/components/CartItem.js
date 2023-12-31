import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdClose, IoMdRemove, IoMdAdd } from "react-icons/io";
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {
  console.log("Item:", item);
  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(
    CartContext
  );
  const { id, title, image, price, amount, rating } = item;
  console.log("Rating:", rating); 
  return (
    <div className="flex gap-x-4 py-2 ls:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        {/* Image */}
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt="" />
        </Link>
        <div className="w-full flex flex-col">
          {/* Title */}
          <div className="flex justify-between mb-2">
            <Link
              to={`/product/${id}`}
              className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
            >
              {title}
            </Link>
            {/* Remove icon */}
            <div
              onClick={() => removeFromCart(id)}
              className="text-xl cursor-pointer"
            >
              <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
            </div>
          </div>
          <div>
            <div className="flex gap-x-2 h-[36px] text-sm">
              {/* Quantity */}
              <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
                {/* Minus icon */}
                <div
                  onClick={() => decreaseAmount(id)}
                  className="flex-1 flex justify-center items-center cursor-pointer h-full"
                >
                  <IoMdRemove />
                </div>
                <div className="h-full flex justify-center items-center px-2">
                  {amount}
                </div>
                {/* Plus icon */}
                <div
                  onClick={() => increaseAmount(id)}
                  className="flex-1 h-full flex justify-center items-center cursor-pointer"
                >
                  <IoMdAdd />
                </div>
              </div>

              {/* Item price */}
              <div className="flex-1 flex items-center justify-around">{price}</div>

              {/* Final Price */}
              <div className="flex-1 flex justify-end items-center text-primary font-medium">
                {`$${(parseFloat(price) * amount).toFixed(2)}`}
              </div>

              {/* Rating */}
              <div className="flex-1 flex justify-end items-center">
  
  <div className="flex items-center">
    <span className="mr-1">Rating:</span>
    <span className="text-yellow-500">
      {item.rating.rate} ({item.rating.count} reviews)
    </span>
  </div>
</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
