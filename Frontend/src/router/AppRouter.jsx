import { Routes, Route, Navigate } from "react-router-dom";
import App from "../App";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import Dashboard from "../pages/Dashboard"; 
import Workouts from "../pages/Workouts";
import Nutrition from "../pages/Nutrition";
import MentalHealth from "../pages/MentalHealth";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";

import MorningMeditation from "../pages/MorningMeditation";
import DeepBreathing from "../pages/DeepBreathing";
import GratitudeJournaling from "../pages/GratitudeJournaling";
import YogaFlow from "../pages/YogaFlow";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Dashboard />} />

        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="contact" element={<ContactUs />} />

        <Route path="profile" element={<Profile />} />

        
        <Route path="workouts" element={<Workouts />} />
        <Route path="nutrition" element={<Nutrition />} />
        <Route path="mental-health" element={<MentalHealth />} />

        <Route path="morning-meditation" element={<MorningMeditation />} />
        <Route path="deep-breathing" element={<DeepBreathing />} />
        <Route path="gratitude-journaling" element={<GratitudeJournaling />} />
        <Route path="yoga-flow" element={<YogaFlow />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
