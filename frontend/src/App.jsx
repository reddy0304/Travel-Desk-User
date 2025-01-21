import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignupPage from "./pages/signup" ;
import LoginPage from "./pages/login";
import Dashboard from "./pages/dashboard";
import Notifications from "./pages/notifications";
import Bookings from "./pages/BookingPage";
import Profile from "./pages/profile" ;
import Shuttle from "./pages/shuttle";



function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Mock authentication logic
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      {isAuthenticated && <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />} {/* Show Navbar only if authenticated */}
      <Routes>
        {/* Login Route */}
        <Route
          path="/"
          element={
            isAuthenticated ? <Navigate to="/dashboard" /> : <LoginPage setIsAuthenticated={setIsAuthenticated} />
          }
        />
        {/* Signup Routes */}
        <Route path="/signup" element={<SignupPage />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? <Dashboard /> : <Navigate to="/" />
          }
        />
         <Route
          path="/shuttle"
          element={
            isAuthenticated ? <Shuttle /> : <Navigate to="/" />
          }
        />
        <Route
          path="/bookings"
          element={
            isAuthenticated ? <Bookings /> : <Navigate to="/" />
          }
        />
        <Route
          path="/notifications"
          element={
            isAuthenticated ? <Notifications /> : <Navigate to="/" />
          }
        />
        <Route
          path="/profile"
          element={
            isAuthenticated ? <Profile /> : <Navigate to="/" />
          }
        />
        {/* Catch-All Route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
