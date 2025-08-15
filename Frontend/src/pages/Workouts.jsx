import { Link,useNavigate } from "react-router-dom";

const workouts = [
  { title:"Full Body Burn",duration:"20 min",type:"No Equipment"},
  { title:"Cardio Blast",duration:"15 min",type:"HIIT"},
  { title:"Core Strength",duration:"10 min",type:"Abs & Core"},
  { title:"Leg Day",duration:"25 min",type:"Strength"},
];

export default function Workouts() {
  const navigate= useNavigate();

  return(
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        
        <button
          onClick={() => navigate("/dashboard")}
          className="mb-6 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300"
        >
           Back to Dashboard
        </button>

        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-blue-600">Workouts</h1>
          <p className="text-gray-600 mt-2">
            Choose a workout that fits your mood, time, and fitness level.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {workouts.map((w, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-bold text-gray-800">{w.title}</h2>
              <p className="text-gray-500">{w.duration}</p>
              <p className="text-sm text-gray-400 mb-4">{w.type}</p>
              <Link
                to="#"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
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
