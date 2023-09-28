import React from "react";
import Background from "../img/Background.jpg"
import { BsHearts } from "react-icons/bs";
import { Link } from "react-router-dom";

const BackPic = () => {
  return (
    <section className="bg-cover bg-center bg-no-repeat bg-fixed">
      
      <div className="min-h-screen flex items-center">
        <div className="container mx-auto flex md:flex-row justify-between items-center">
          <div className="md:w-1/2 px-2">
            <h1 className="text-2xl md:text-4xl font-semibold text-orange-400 
            mb-4 uppercase">
              E-commerce Website
              <BsHearts className="text-yellow-200 hover:text-orange-600 transition" />
            </h1>

            <Link to={"/landing"} className="self-start uppercase text-sm text-orange-800 md:text-base">
              Explore
            </Link>
          </div>
          <div className="md:w-2/1">
            <img
              className="h-full w-full max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
              src={Background}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackPic;
