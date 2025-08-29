// src/router/AppRouter.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
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
      {/* First page = Dashboard */}
      <Route path="/" element={<Dashboard />} />

      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />

      {/* After login (if you add auth later) */}
      <Route path="/workouts" element={<Workouts />} />
      <Route path="/nutrition" element={<Nutrition />} />
      <Route path="/mental-health" element={<MentalHealth />} />

      {/* New Wellness Pages */}
      <Route path="/morning-meditation" element={<MorningMeditation />} />
      <Route path="/deep-breathing" element={<DeepBreathing />} />
      <Route path="/gratitude-journaling" element={<GratitudeJournaling />} />
      <Route path="/yoga-flow" element={<YogaFlow />} />

      {/* Catch-all redirect to dashboard */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
