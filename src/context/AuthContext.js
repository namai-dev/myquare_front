import axios from "axios";
import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("authtoken") != null ? true : false
  );
  const baseurl = "http://127.0.0.1:8001";
  const history = useNavigate();

  const handleSignIn = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    axios
      .post(`${baseurl}/signin`, {
        email: data.get("username"),
        password: data.get("password"),
      })
      .then((res) => {
        localStorage.setItem("AuthToken", res.data.token).console.log(res);
      })
      .catch((err) => console.log(err));
    history("/dashboard");

    console.log({
      email: data.get("username"),
      password: data.get("password"),
    });
  };

  const data = {
    isAuthenticated: isAuthenticated,
    handleSignIn: handleSignIn,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
