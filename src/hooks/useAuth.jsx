import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  // Login auth
  const login = async (username, password) => {
    try {
      const response = await axios.post(
        "https://fakestoreapi.com/auth/login",
        {
          username,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("user info :", response.data);
        const { token } = response.data;
        localStorage.setItem("token", token);
        setError(null);
        navigate("/");
      
    } catch (error) {
      // Handle 401 and other errors gracefully
      if (error.response && error.response.status === 401) {
        setError("Invalid username or password");
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  };

  // Logout auth
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  // Authenticate user
  const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    return !!token;
  };

  return {
    login,
    logout,
    isAuthenticated,
    error,
  };
};
