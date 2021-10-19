import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import useFirebase from "../Hooks/useFirebase";

function Login() {
  const { signInUsingGoogle } = useFirebase();
  const { logIn } = useFirebase();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const history = useHistory();

  const nowLogIn = () => {
    logIn(email, password);
    history.push("/home");
  };
  return (
    <div className="flex justify-center py-20">
      <div className="flex flex-col w-96 p-10 shadow-lg">
        {/* <form> */}
        <h1 className="text-sm font-medium text-gray-900 block mb-8 text-2xl text-center uppercase">
          Login
        </h1>
        <div className="mb-6">
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Email"
            required=""
            onInput={(e) => setemail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required=""
            onInput={(e) => setpassword(e.target.value)}
          />
        </div>
        <Link to="/">
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            onClick={nowLogIn}
          >
            Login
          </button>
        </Link>
        <div className="flex justify-center mt-6">
          <div className="text-sm">
            <label htmlFor="remember" className="font-medium text-gray-900">
              Don't have an account? Please{" "}
              <Link to="/register" className="text-red-500">
                Register
              </Link>
            </label>
          </div>
        </div>
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
        {/* </form> */}
      </div>
    </div>
  );
}

export default Login;
