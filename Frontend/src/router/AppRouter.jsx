// src/router/AppRouter.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import App from "../App";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import Homepage from "../pages/Homepage";  
import Dashboard from "../pages/Dashboard"; 
import Workouts from "../pages/Workouts";
import Nutrition from "../pages/Nutrition";
import MentalHealth from "../pages/MentalHealth";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Challenge15Days from "../pages/Challenge15Days";

import MorningMeditation from "../pages/MorningMeditation";
import DeepBreathing from "../pages/DeepBreathing";
import GratitudeJournaling from "../pages/GratitudeJournaling";
import YogaFlow from "../pages/YogaFlow";

// ✅ Only EasyWorkout page
import EasyWorkout from "../pages/EasyWorkout";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Dashboard />} />

        {/* Auth */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        {/* Info Pages */}
        <Route path="about" element={<AboutUs />} />
        <Route path="contact" element={<ContactUs />} />

        {/* User */}
        <Route path="profile" element={<Profile />} />
        <Route path="homepage" element={<Homepage />} />

        {/* Workouts */}
        <Route path="workouts" element={<Workouts />} />
        <Route path="workouts/easy" element={<EasyWorkout />} />

        {/* Other Sections */}
        <Route path="nutrition" element={<Nutrition />} />
        <Route path="mental-health" element={<MentalHealth />} />

        {/* Challenges */}
        <Route path="challenge/15-days" element={<Challenge15Days />} />

        {/* Mental Health Activities */}
        <Route path="morning-meditation" element={<MorningMeditation />} />
        <Route path="deep-breathing" element={<DeepBreathing />} />
        <Route path="gratitude-journaling" element={<GratitudeJournaling />} />
        <Route path="yoga-flow" element={<YogaFlow />} />

        {/* Catch all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
