import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../Hooks/useFirebase";

function Login() {
  const { signInUsingGoogle } = useFirebase();
  // page
  return (
    <div className="flex justify-center py-20">
      <div className="flex flex-col w-96 p-10 shadow-lg">
        <form>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-900 block mb-2"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="name@flowbite.com"
              required=""
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-900 block mb-2"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required=""
            />
          </div>
          <div className="flex items-start mb-6">
            <div className="text-sm">
              <label htmlFor="remember" className="font-medium text-gray-900">
                Don't have an account? Please{" "}
                <Link to="/register" className="text-red-500">
                  Register
                </Link>
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Login
          </button>
          <div className="flex flex-col items-center mt-5">
            <div className="flex justify-evenly space-x-2 w-64 my-4">
              <span className="bg-gray-300 h-px flex-grow t-2 relative top-2"></span>
              <span className="flex-none uppercase text-xs text-gray-400 font-semibold">
                or
              </span>
              <span className="bg-gray-300 h-px flex-grow t-2 relative top-2"></span>
            </div>
            <div className="p-2 cursor-pointer" onClick={signInUsingGoogle}>
              <div className="inline-flex items-center bg-white leading-none text-purple-600 rounded-full p-2 shadow text-sm">
                <span className="inline-flex bg-purple-600 text-white rounded-full p-3 justify-center items-center text-">
                  <i className="fab fa-google"></i>
                </span>
                <span className="inline-flex px-2">Signin with Google</span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
