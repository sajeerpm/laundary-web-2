import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import HomeScreen from "./pages/landingScreen/HomeScreen";
import Login from "./pages/login/Login";
import PageNotFound from "./pages/pageNotFound/PageNotFound";

// Import your page components

const router = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Function to handle user login
    const handleLogin = () => {
        // Perform login logic and set isLoggedIn state
        setIsLoggedIn(true);
    };

    // Function to handle user logout
    const handleLogout = () => {
        // Perform logout logic and set isLoggedIn state
        setIsLoggedIn(false);
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route
                    path="/dashboard"
                    element={
                        isLoggedIn ? <HomeScreen /> : <Navigate to="/login" />
                    }
                />
                <Route
                    path="/login"
                    element={
                        isLoggedIn ? <Navigate to="/dashboard" /> : <Login />
                    }
                />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default router;
