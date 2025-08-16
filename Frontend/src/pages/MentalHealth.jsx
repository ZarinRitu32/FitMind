import { Link, useNavigate } from "react-router-dom";

const activities = [
  {
    title: "Morning Meditation",
    time: "10 min",
    type: "Guided Audio",
    path: "/mental-health/meditation",
  },
  {
    title: "Deep Breathing Exercise",
    time: "5 min",
    type: "Relaxation",
    path: "/mental-health/breathing",
  },
  {
    title: "Gratitude Journaling",
    time: "15 min",
    type: "Mindfulness",
    path: "/mental-health/journaling",
  },
  {
    title: "Yoga Flow",
    time: "20 min",
    type: "Stretch & Relax",
    path: "/mental-health/yoga",
  },
];

export default function MentalHealth() {
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
          <h1 className="text-3xl font-extrabold text-purple-600">
            Mental Health
          </h1>
          <p className="text-gray-600 mt-2 text-base">
            Take time to care for your mind as much as your body.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {activities.map((a, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg hover:scale-[1.02] transition transform"
            >
              <h2 className="text-lg font-semibold text-gray-800">{a.title}</h2>
              <p className="text-sm text-gray-500 mt-1">{a.time}</p>
              <p className="text-xs text-gray-400 mb-4">{a.type}</p>
              <Link
                to={a.path}
                className="inline-block w-full text-center bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium shadow-sm hover:from-purple-600 hover:to-purple-700 transition text-sm"
              >
                Try Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
