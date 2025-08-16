import { Link, useNavigate } from "react-router-dom";

const workouts = [
  { title: "Full Body Burn", duration: "20 min", type: "No Equipment" },
  { title: "Cardio Blast", duration: "15 min", type: "HIIT" },
  { title: "Core Strength", duration: "10 min", type: "Abs & Core" },
  { title: "Leg Day", duration: "25 min", type: "Strength" },
];

export default function Workouts() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 p-6">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={() => navigate("/dashboard")}
          className="mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg font-medium shadow-sm hover:from-blue-600 hover:to-purple-600 transition text-sm"
        >
          Back to Dashboard
        </button>

        <div className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold text-blue-600">Workouts</h1>
          <p className="text-gray-600 mt-2 text-base">
            Choose a workout that fits your mood, time, and fitness level.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {workouts.map((w, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg hover:scale-[1.02] transition transform"
            >
              <h2 className="text-lg font-semibold text-gray-800">{w.title}</h2>
              <p className="text-sm text-gray-500 font-medium mt-1">{w.duration}</p>
              <p className="text-xs text-gray-400 mb-4">{w.type}</p>
              <Link
                to="#"
                className="inline-block w-full text-center bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg font-medium shadow-sm hover:from-blue-600 hover:to-purple-600 transition text-sm"
              >
                Start Workout
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
