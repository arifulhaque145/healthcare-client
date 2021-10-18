import React from "react";
import { Link } from "react-router-dom";

function Register() {
  // page
  return (
    <div className="flex justify-center py-20">
      <div className="flex flex-col w-96 p-10 shadow-lg">
        <form>
          <h1 className="text-sm font-medium text-gray-900 block mb-8 text-2xl text-center uppercase">
            Register
          </h1>
          <div className="mb-6">
            <input
              type="text"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Full Name"
              required=""
            />
          </div>
          <div className="mb-6">
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required=""
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required=""
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              id="password"
              placeholder="Conform Password"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required=""
            />
          </div>
          <div className="flex items-start mb-6">
            <div className="text-sm">
              <label htmlFor="remember" className="font-medium text-gray-900">
                Already have an account? Please{" "}
                <Link to="/login" className="text-red-500">
                  Login
                </Link>
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
