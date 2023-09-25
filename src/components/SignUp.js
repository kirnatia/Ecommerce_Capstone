import React, { useState } from "react";
import axios from "axios";
import { Navigate, Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://fakestoreapi.com/users",
        formData
      );

      console.log(response.data);

      if (response.status === 200) {
        setSignUpSuccess(true);
      } else {
        console.error("Sign-up failed");
      }
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  if (signUpSuccess) {
    return <Navigate to="/Login" />;
  }

  return (
    <section className="min-h-screen flex flex-col">
      <div className="flex flex-1 items-center justify-center">
        <div className="rounded-lg sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
          <form className="text-center">
            <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
              Sign Up
            </h1>
            <div className="py-2 text-left">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700"
                placeholder="Email"
              />
            </div>
            <div className="py-2 text-left">
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700"
                placeholder="Username"
              />
            </div>
            <div className="py-2 text-left">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="bg-gray-200 border-2 border-gray-100 
                focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700"
                placeholder="Password"
              />
            </div>
            <div className="py-2">
              <button
                type="submit"
                className="border-2 border-gray-100 focus:outline-none bg-emerald-400 
                text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 
                hover:bg-orange-600"
                onClick={handleSubmit}
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className="text-center mt-6">
            <span>Already have an account?</span>{" "}
            <Link
              to="/Login"
              className="font-light text-md text-indigo-600 underline 
              font-semibold hover:text-indigo-800"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
