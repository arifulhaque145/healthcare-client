import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../Hooks/useFirebase";

function Login() {
  const { user, signInUsingGoogle } = useFirebase();
  // page
  return (
    <div className="flex justify-center py-20">
      <div className="flex flex-col  w-50 mx-auto">
        <input type="email" placeholder="Your email" className="my-5" />
        <input type="password" placeholder="Your password" className="my-5" />
        <input type="button" value="login" className="my-5" />
        <p>--------------- or ---------------</p>
        <button className="my-5 bg-red-200" onClick={signInUsingGoogle}>
          Sign in with google
        </button>
        <p>
          Not have a Account? Please <Link to="/register">Register</Link>
        </p>
        <p>{user.displayName}</p>
      </div>
    </div>
  );
}

export default Login;
