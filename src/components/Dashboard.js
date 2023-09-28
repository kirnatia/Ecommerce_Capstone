import React, { useState, useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { IoMdRemove, IoMdAdd, IoMdClose } from "react-icons/io";
import { CartContext } from "../contexts/CartContext";

const Dashboard = () => {
  const navigate = useNavigate();
  
  // Access the cart data and functions from CartContext
  const {
    cart,
    removeFromCart,
    increaseAmount,
    decreaseAmount,
    itemAmount,
    total,
  } = useContext(CartContext);

  const logoutHandler = () => {
    localStorage.removeItem("Mytoken");
    navigate("/landing");
  };

  // Add an effect to watch for changes in the authentication status
  useEffect(() => {
    const token = localStorage.getItem("Mytoken");
    if (!token) {
      // If the token is not present, navigate to the landing page
      navigate("/landing");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="rounded-lg sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="font-bold text-3xl mb-8 text-gray-600">Dashboard</h1>
          <div className="mb-4">
            <p className="mb-2">Welcome to your dashboard!</p>
            <p className="text-gray-500 text-sm">You are logged in.</p>
          </div>
          <div>
            {cart.map((item) => (
              <div
                className="flex gap-x-4 py-2 ls:px-6 border-b border-gray-200 w-full font-light text-gray-500"
                key={item.id}
              >
                <div className="w-full min-h-[150px] flex items-center gap-x-4">
                  <Link to={`/product/${item.id}`}>
                    <img className="max-w-[80px]" src={item.image} alt="" />
                  </Link>
                  <div className="w-full flex flex-col">
                    <div className="flex justify-between mb-2">
                      <Link
                        to={`/product/${item.id}`}
                        className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
                      >
                        {item.title}
                      </Link>
                      <div
                        onClick={() => removeFromCart(item.id)}
                        className="text-xl cursor-pointer"
                      >
                        <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
                      </div>
                    </div>
                    <div>
                      <div className="flex gap-x-2 h-[36px] text-sm">
                        <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
                          <div
                            onClick={() => decreaseAmount(item.id)}
                            className="flex-1 flex justify-center items-center cursor-pointer h-full"
                          >
                            <IoMdRemove />
                          </div>
                          <div className="h-full flex justify-center items-center px-2">
                            {item.amount}
                          </div>
                          <div
                            onClick={() => increaseAmount(item.id)}
                            className="flex-1 h-full flex justify-center items-center cursor-pointer"
                          >
                            <IoMdAdd />
                          </div>
                        </div>
                        <div className="flex-1 flex items-center justify-around">
                          {item.price}
                        </div>
                        <div className="flex-1 flex justify-end items-center text-primary font-medium">
                          {`$${(parseFloat(item.price) * item.amount).toFixed(
                            2
                          )}`}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={logoutHandler}
            className="bg-red-600 hover:bg-red-700 text-white font-bold 
            py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
