import React, { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
const Login = () => {
  const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginSuccess, setLoginSuccess] = useState(false);

  const payload = {
    username: username,
    password: password,
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();

    axios
      .post("https://fakestoreapi.com/auth/login", payload)
      .then((response) => {
        const response1 = response;
        localStorage.setItem("stringify", JSON.stringify(response1));
          localStorage.setItem("Mytoken", response1.data.token);
          
          setLoginSuccess(true);
      })
      .catch((error) => {
      
        console.error("Login error:", error);
      });
  };
    if (loginSuccess) {
        return <Navigate to="/dashboard" />;
    }
  return (
    <>
      <section className="min-h-screen flex flex-col">
        <div className="flex flex-1 items-center justify-center">
          <div className="rounded-lg sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
            <form className="text-center">
              <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
                Sign in
              </h1>
              <div className="py-2 text-left">
                <input
                  type="text"
                  className="bg-gray-200 border-2 border-gray-100 
                            focus:outline-none bg-gray-100 block w-full py-2 px-4
                            rounded-lg focus:border-gray-700 "
                  placeholder="Email"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="py-2 text-left">
                <input
                  type="password"
                  className="bg-gray-200 border-2 
                            border-gray-100 focus:outline-none bg-gray-100 block
                            w-full py-2 px-4 rounded-lg focus:border-gray-700
                            "
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="py-2">
                <button
                  type="submit"
                  className="border-2 border-gray-100 
                            focus:outline-none bg-purple-600 text-white font-bold
                            tracking-wider block w-full p-2 rounded-lg focus:border-gray-700
                            hover:bg-purple-700"
                  onClick={onSubmitHandler}
                >
                  Sign In
                </button>
              </div>
            </form>
            <div className="text-center">
              <a href="#" className="hover:underline">
                Forgot password?
              </a>
            </div>
            <div className="text-center mt-12">
              <span>Don't have an account?</span>
              <a
                href="#"
                className="font-light text-md 
                        text-indigo-600 underline font-semibold
                        hover:text-indigo-800"
              >
                Create One
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
