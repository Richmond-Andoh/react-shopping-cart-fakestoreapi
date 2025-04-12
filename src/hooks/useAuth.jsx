import { useState } from "react";
import useNavigate from "react-router-dom";

export const useAuth = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(null);


    // Login auth
    const login = async (username, password) => {
        try {
            const response = await fetch("https://fakestoreapi.com/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    password
                })
            })

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem("token", data.token);
                navigate("/");
            }            
            
        } catch (error) {
            setError(error.message);
        }
    };

    // Logout auth
    const logout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    }

    // Authenticate user
    const isAuthenticated = () => {
        const token = localStorage.getItem("token");
        return !!token;
    }

    return {
        login,
        logout,
        isAuthenticated,
        error
    }
}