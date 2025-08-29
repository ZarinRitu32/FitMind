// src/router/AppRouter.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import App from "../App";

// Pages
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import Dashboard from "../pages/Dashboard";
import Workouts from "../pages/Workouts";
import Nutrition from "../pages/Nutrition";
import MentalHealth from "../pages/MentalHealth";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";



// New Pages
import MorningMeditation from "../pages/MorningMeditation";
import DeepBreathing from "../pages/DeepBreathing";
import GratitudeJournaling from "../pages/GratitudeJournaling";
import YogaFlow from "../pages/YogaFlow";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        {/* Default route → Login */}
        <Route index element={<Login />} />

        {/* Public Routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="contact" element={<ContactUs />} />

        <Route path="profile" element={<Profile />} />

        {/* After login */}
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="workouts" element={<Workouts />} />
        <Route path="nutrition" element={<Nutrition />} />
        <Route path="mental-health" element={<MentalHealth />} />



        {/* New Wellness Pages */}
        <Route path="morning-meditation" element={<MorningMeditation />} />
        <Route path="deep-breathing" element={<DeepBreathing />} />
        <Route path="gratitude-journaling" element={<GratitudeJournaling />} />
        <Route path="yoga-flow" element={<YogaFlow />} />

        {/* Catch-all redirect to login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Route>
    </Routes>
  );
}
