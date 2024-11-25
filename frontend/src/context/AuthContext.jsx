import React, { createContext, useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const register = async (formData) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/auth/register",
        {
          name: formData.username,
          email: formData.email,
          password: formData.password,
          password_confirmation: formData.confirmPassword,
        }
      );

      if (response.status === 200) {
        navigate("/");
      }
    } catch (error) {
      if (error.response) {
        setError(
          error.response.data.message ||
            "Registration failed. Please try again."
        );
      } else {
        setError("An error occurred during registration. Please try again.");
      }
    }
  };

  const value = {
    user,
    setUser,
    error,
    setError,
    register,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
