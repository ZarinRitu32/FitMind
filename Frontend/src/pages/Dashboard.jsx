import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-green-600">FitMind Dashboard</h2>
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

      <p className="text-gray-600 mb-8">
        Welcome back! Track your fitness, diet, and mental wellness progress.
      </p>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">🏋️‍♂️ Workouts</h3>
          <p className="text-3xl font-bold text-green-500">12</p>
          <p className="text-gray-500 text-sm">Sessions this month</p>
        </div>
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">🥗 Nutrition</h3>
          <p className="text-3xl font-bold text-green-500">85%</p>
          <p className="text-gray-500 text-sm">Meal plan completed</p>
        </div>
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">🧘 Meditation</h3>
          <p className="text-3xl font-bold text-green-500">6 hrs</p>
          <p className="text-gray-500 text-sm">This week</p>
        </div>
      </div>

      {/* Progress Section */}
      <div className="bg-white shadow-lg rounded-2xl p-6 mt-8">
        <h3 className="text-xl font-semibold mb-4">📈 Your Progress</h3>
        <p className="text-gray-600 mb-4">
          Keep going! You're building great habits for your body and mind.
        </p>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-green-500 h-4 rounded-full"
            style={{ width: "70%" }}
          ></div>
        </div>
        <p className="text-gray-500 text-sm mt-2">70% Goal Completion</p>
      </div>

      {/* Motivation */}
      <div className="mt-8 bg-green-100 border-l-4 border-green-500 p-4 rounded">
        <p className="text-green-700 italic">
          "Your body achieves what your mind believes."
        </p>
      </div>
    </div>
  );
}
