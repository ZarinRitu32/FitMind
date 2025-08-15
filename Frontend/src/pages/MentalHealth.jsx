import { Link, useNavigate } from "react-router-dom";

const activities = [
  { title:"Morning Meditation",time:"10 min",type:"Guided Audio" },
  { title:"Deep Breathing Exercise",time:"5 min",type:"Relaxation" },
  { title:"Gratitude Journaling",time:"15 min",type:"Mindfulness" },
  { title:"Yoga Flow", time: "20 min",type:"Stretch & Relax" },
];

export default function MentalHealth() {
  const navigate=useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">

        <button
          onClick={() => navigate("/dashboard")}
          className="mb-6 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300"
        >
          Back to Dashboard
        </button>

        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-purple-600">Mental Health</h1>
          <p className="text-gray-600 mt-2">
            Take time to care for your mind as much as your body.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {activities.map((a, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-bold text-gray-800">{a.title}</h2>
              <p className="text-gray-500">{a.time}</p>
              <p className="text-sm text-gray-400 mb-4">{a.type}</p>
              <Link
                to="#"
                className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600"
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
