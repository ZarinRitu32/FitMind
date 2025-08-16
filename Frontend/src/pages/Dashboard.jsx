// src/pages/Dashboard.jsx
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const quotes = [
  "Your body achieves what your mind believes.",
  "Push yourself, because no one else is going to do it for you.",
  "Fitness is not about being better than someone else, it’s about being better than you used to be.",
  "Don’t limit your challenges. Challenge your limits.",
  "Mental strength is not the absence of fear, but the will to overcome it.",
  "Discipline is choosing between what you want now and what you want most.",
  "Every workout counts. Don’t stop now.",
  "You are one workout away from a good mood."
];

export default function Dashboard() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col text-center">
      {/* ✅ Hero Section */}
      <div className="flex flex-col items-center justify-center py-16 px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-800">
          GET FIT WITH US
        </h2>
        <p className="text-lg md:text-xl italic text-green-600 mb-6">
          "{quote}"
        </p>
        <button
          onClick={() => (window.location.href = "/profile")}
          className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-orange-600 transition mb-10"
        >
          Join Now
        </button>

        {/* ✅ Moved Up Buttons (smaller size) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
          <Link
            to="/workouts"
            className="bg-blue-500 hover:bg-blue-600 text-white text-center font-semibold text-md rounded-xl shadow-md p-6 transition"
          >
            Workouts
          </Link>
          <Link
            to="/nutrition"
            className="bg-green-500 hover:bg-green-600 text-white text-center font-semibold text-md rounded-xl shadow-md p-6 transition"
          >
            Nutrition
          </Link>
          <Link
            to="/mental-health"
            className="bg-purple-500 hover:bg-purple-600 text-white text-center font-semibold text-md rounded-xl shadow-md p-6 transition"
          >
            Mental Health
          </Link>
        </div>
      </div>
    </div>
  );
}
