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
    <div
      className="min-h-screen bg-cover bg-center flex flex-col justify-between px-6 md:px-16 py-10 text-white"
      style={{ backgroundImage: 'url("/images/fitness-bg.png")' }}
    >
      {/* Top Navigation */}
      <div className="flex justify-between items-center mb-10 bg-black/60 p-4 rounded-xl shadow-md">
        <h2 className="text-3xl md:text-4xl font-extrabold text-green-400">FitMind</h2>
        <div className="flex gap-4">
          <Link
            to="/login"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
          >
            Register
          </Link>
        </div>
      </div>

      {/* Motivation Quote */}
      <div className="bg-black/50 p-6 rounded-xl max-w-3xl mx-auto text-center shadow-lg">
        <p className="italic text-xl font-semibold text-green-300">"{quote}"</p>
      </div>

      {/* Feature Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <Link
          to="/workouts"
          className="bg-white/80 text-black font-semibold text-lg shadow-lg rounded-2xl p-8 text-center hover:bg-white transition cursor-pointer"
        >
          Workouts
        </Link>
        <Link
          to="/nutrition"
          className="bg-white/80 text-black font-semibold text-lg shadow-lg rounded-2xl p-8 text-center hover:bg-white transition cursor-pointer"
        >
          Nutrition
        </Link>
        <Link
          to="/mental-health"
          className="bg-white/80 text-black font-semibold text-lg shadow-lg rounded-2xl p-8 text-center hover:bg-white transition cursor-pointer"
        >
          Mental Health
        </Link>
      </div>

      {/* Footer */}
      <div className="flex justify-center gap-8 mt-12 bg-black/60 p-4 rounded-xl">
        <Link
          to="/about"
          className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition"
        >
          About Us
        </Link>
        <Link
          to="/contact"
          className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
