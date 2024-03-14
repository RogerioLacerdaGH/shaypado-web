import { createContext, useEffect, useState } from "react";
import { login } from "../services/AuthService.jsx";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const userToken = localStorage.getItem("authToken");

    if (userToken) {
      setUser({ token: userToken });
    }
  }, []);

  const signin = async (email, password) => {
    try {
      const data = await login(email, password);
      localStorage.setItem("authToken", data.token);
      setUser({ token: data.token });
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const signout = () => {
    setUser(null);
    localStorage.removeItem("authToken");
  };

  return (
    <AuthContext.Provider
      value={{ user, signed: !!user, signin, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
};