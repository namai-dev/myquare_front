import axios from "axios";
import React, { createContext, useState } from "react";
import { json, useNavigate } from "react-router-dom";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const storedAuthToken = localStorage.getItem("token");
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => !!storedAuthToken
  );

  const baseurl = "http://127.0.0.1:8001";
  const history = useNavigate();

  const handleSignIn = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    axios
      .post("http://127.0.0.1:8001/auth/signin", {
        username: data.get("username"),
        password: data.get("password"),
      })
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data.token));
        setIsAuthenticated(res.data.token);
        console.log(res);
        history("/dashboard");
      })
      .catch((err) => console.log(err));

    console.log({
      email: data.get("username"),
      password: data.get("password"),
    });
  };

  const SignUp = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const userdata = {
      username: data.get("username"),
      password: data.get("password"),
    };
    console.log(userdata);
    axios
      .post("http://192.168.0.161:8080/api/v1/auth/register", userdata)
      .then((res) => {
        navigate("/login");
      })
      .catch((err) => console.log(err));
    console.log({
      username: data.get("username"),
      password: data.get("password"),
    });
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("token");
    history("/");
  };

  const data = {
    isAuthenticated: isAuthenticated,
    handleSignIn: handleSignIn,
    logout: logout,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
