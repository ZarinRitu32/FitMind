import { useNavigate } from "react-router-dom";

export default function YogaFlow() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 text-center">
        <h1 className="text-2xl font-bold text-purple-600 mb-4">Yoga Flow</h1>
        <p className="text-gray-600 mb-6">
          A 20-minute relaxing yoga sequence for body flexibility and stress
          release.
        </p>
        <button
          onClick={() => navigate("/mental-health")}
          className="bg-purple-500 text-white px-4 py-2 rounded-lg shadow-sm hover:bg-purple-600 transition"
        >
          Back
        </button>
      </div>
    </div>
  );
}
