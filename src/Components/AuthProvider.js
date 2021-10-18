import React, { createContext, useEffect, useState } from "react";
import useFirebase from "../Hooks/useFirebase";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const allContext = useFirebase();
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setdata(data));
  }, []);

  return (
    <AuthContext.Provider value={{ allContext, data }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
