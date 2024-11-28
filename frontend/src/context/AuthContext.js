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
    if (
      !formData.username ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      return { success: false, message: "All fields are required." };
    }

    if (formData.password !== formData.confirmPassword) {
      return { success: false, message: "Passwords do not match." };
    }

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
        setUser(response.data.user);
        localStorage.setItem("token", response.data.access_token); 
        navigate("/");
        return { success: true };
      }
    } catch (error) {
      if (error.response) {
        return {
          success: false,
          message:
            error.response.data.message ||
            "Registration failed. Please try again.",
        };
      }
      return {
        success: false,
        message: "An error occurred during registration. Please try again.",
      };
    }
  };

  const login = async (email, password) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/auth/login",
        {
          email,
          password,
        }
      );

      if (response.status === 200) {
        const { access_token } = response.data;
        localStorage.setItem("token", access_token); // I added this to save the token

        const userResponse = await axios.post(
          "http://127.0.0.1:8000/api/auth/me",
          {},
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          }
        );

        setUser(userResponse.data);
        navigate("/compiler");
        return { success: true };
      }
    } catch (err) {
      if (err.response) {
        return { success: false, message: err.response.data.error };
      }
      return { success: false, message: "An error occurred during login." };
    }
  };

  // Fetch the current user (me)
  const getCurrentUser = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/auth/me",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUser(response.data);
      } catch (err) {
        console.error("Failed to fetch user", err);
      }
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    navigate("/");
  };

  React.useEffect(() => {
    getCurrentUser();
  }, []);

  const value = {
    user,
    setUser,
    error,
    setError,
    register,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
