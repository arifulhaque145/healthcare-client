import React from "react";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import useAuth from "../Hooks/useAuth";

function Navs() {
  // compo
  const logo =
    "https://www.nicepng.com/png/full/120-1204201_health-png-health-care-logo-png.png";

  const userImg = "https://i.ibb.co/Tr4GWzq/avatar.jpg";

  const { user, logOut } = useAuth().allContext;

  return (
    <div
      id="header"
      className="w-full z-30 py-1 bg-white shadow-lg sticky top-0"
    >
      <div className="w-full mt-0 px-6 py-2 flex items-center justify-between">
        <NavHashLink to="/">
          <div>
            <h1 className="text-2xl flex items-center">
              <img src={logo} alt="" width="35" className="mr-3" /> Life Care
              Centre
            </h1>
          </div>
        </NavHashLink>
        <div className="flex items-center">
          <label
            htmlFor="menu-toggle"
            className="cursor-pointer md:hidden block"
          >
            <svg
              className="fill-current text-blue-600"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <title>menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </label>
          <input className="hidden" type="checkbox" id="menu-toggle" />

          <div
            className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1"
            id="menu"
          >
            <nav>
              <ul className="md:flex items-center justify-between text-base text-blue-600 pt-4 md:pt-0">
                <li>
                  <NavHashLink
                    to="/#home"
                    className="inline-block no-underline text-gray-500 hover:text-black font-medium text-md py-2 px-4 lg:-ml-2"
                  >
                    Home
                  </NavHashLink>
                </li>
                <li>
                  <NavHashLink
                    to="/#services"
                    className="inline-block no-underline text-gray-500 hover:text-black font-medium text-md py-2 px-4 lg:-ml-2"
                  >
                    Services
                  </NavHashLink>
                </li>
                <li>
                  <NavHashLink
                    to="/#covid"
                    className="inline-block no-underline text-gray-500 hover:text-black font-medium text-md py-2 px-4 lg:-ml-2"
                  >
                    Covid
                  </NavHashLink>
                </li>
                <li>
                  <NavHashLink
                    to="/#feedback"
                    className="inline-block no-underline text-gray-500 hover:text-black font-medium text-md py-2 px-4 lg:-ml-2"
                  >
                    Feedback
                  </NavHashLink>
                </li>
              </ul>
            </nav>
            <div
              className="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4"
              id="nav-content"
            >
              <div className="auth flex items-center w-full md:w-full">
                {!user.displayName ? (
                  <Link to="/login">
                    <button
                      type="button"
                      className="border border-blue-500 hover:bg-white text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-blue-500 bg-blue-600 focus:outline-none focus:shadow-outline"
                    >
                      Login
                    </button>
                  </Link>
                ) : (
                  <li className="list-none mr-2.5">
                    <img
                      src={userImg}
                      alt=""
                      width="30"
                      className="inline-block rounded-full mx-2"
                    />{" "}
                    {user.displayName}
                  </li>
                )}
                {!user.displayName ? (
                  <Link to="/register">
                    <button
                      type="button"
                      className="border border-green-500 text-green-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-green-600 focus:outline-none focus:shadow-outline"
                    >
                      Register
                    </button>
                  </Link>
                ) : (
                  <button
                    type="button"
                    className="border border-red-500 text-red-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-red-600 focus:outline-none focus:shadow-outline"
                    onClick={logOut}
                  >
                    Logout
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navs;
