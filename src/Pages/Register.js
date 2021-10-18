import React from "react";
import { Link } from "react-router-dom";

function Register() {
  // page
  return (
    <div className="flex justify-center py-20">
      <div className="flex flex-col  w-50 mx-auto">
        <input type="text" placeholder="Name" className="my-5" />
        <input type="email" placeholder="Email" className="my-5" />
        <input type="password" placeholder="Password" className="my-5" />
        <input
          type="password"
          placeholder="Conform Password"
          className="my-5"
        />
        <input type="button" value="Register" className="my-5" />
        <p>--------------- or ---------------</p>
        <p>
          Already have an account? Please <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
