// src/router/AppRouter.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import App from "../App";

// Pages
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Workouts from "../pages/Workouts";
import Nutrition from "../pages/Nutrition";
import MentalHealth from "../pages/MentalHealth";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        {/* Root path shows dashboard */}
        <Route index element={<Dashboard />} />

        {/* Public Routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="contact" element={<ContactUs />} />

        {/* Other pages */}
        <Route path="workouts" element={<Workouts />} />
        <Route path="nutrition" element={<Nutrition />} />
        <Route path="mental-health" element={<MentalHealth />} />

        {/* Catch-all redirect to dashboard */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
