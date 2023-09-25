import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";

const Dashboard = () => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("Mytoken");
    navigate("/");
  };

  // Example data for cart items
  const cartItems = [
    {
      id: 1,
      title: "Product 1",
      image: "image_url_1",
      price: 20.0,
      amount: 2,
    },
    {
      id: 2,
      title: "Product 2",
      image: "image_url_2",
      price: 30.0,
      amount: 1,
    },
    // Add more items as needed
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="rounded-lg sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="font-bold text-3xl mb-8 text-gray-600">Dashboard</h1>
          <div className="mb-4">
            <p className="mb-2">Welcome to your dashboard!</p>
            <p className="text-gray-500 text-sm">You are logged in.</p>
            
            {/* Map over cartItems to render CartItem components */}
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <button
            type="button"
            onClick={logoutHandler}
            className="bg-red-600 hover:bg-red-700 text-white 
            font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
