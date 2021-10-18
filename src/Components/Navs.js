import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

function Navs() {
  // compo

  const { user, logOut } = useAuth().allContext;

  return (
    <div>
      <h1>Life Care Centre</h1>
      <div>
        <li>Home</li>
        <li>Services</li>
        <li>Covid</li>
        <li>Feedback</li>
        {!user.displayName ? (
          <Link to="/login" className="block bg-blue-200">
            Login
          </Link>
        ) : (
          <li>{user.displayName}</li>
        )}
        {!user.displayName ? (
          <Link to="/register" className="block bg-red-200">
            Register
          </Link>
        ) : (
          <li className="bg-red-200 cursor-pointer" onClick={logOut}>
            Logout
          </li>
        )}
      </div>
    </div>
  );
}

export default Navs;
