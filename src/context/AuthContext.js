import React, { createContext, useState } from "react";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const handleSignIn = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
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
