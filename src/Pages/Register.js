import React, { useState } from "react";
import { Link } from "react-router-dom";
import useFirebase from "../Hooks/useFirebase";

function Register() {
  const { createAccount } = useFirebase();

  const [error, seterror] = useState("");
  const [perror, setperror] = useState("");

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    password !== cpassword ? setperror("Mismatch Password") : setperror("");
    password.length <= 6
      ? seterror("Password must be 6 characters")
      : seterror("");

    if ((password !== cpassword) | (password.length <= 6)) {
      return;
    }
    createAccount(name, email, password);
  };
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
              required
              onBlur={(e) => setname(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
              onBlur={(e) => setemail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
              onBlur={(e) => setpassword(e.target.value)}
            />
            <small className="text-red-500">{error}</small>
          </div>
          <div className="mb-6">
            <input
              type="password"
              id="conform_password"
              placeholder="Conform Password"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
              onBlur={(e) => setcpassword(e.target.value)}
            />
            <small className="text-red-500">{perror}</small>
          </div>
          <Link to="/">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              onClick={signIn}
            >
              Register
            </button>
          </Link>
          <div className="flex justify-center my-6">
            <div className="text-sm">
              <label htmlFor="remember" className="font-medium text-gray-900">
                Already have an account? Please{" "}
                <Link to="/login" className="text-red-500">
                  Login
                </Link>
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
