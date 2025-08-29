import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const location = useLocation();

  // registation theke full name save kore rakhe
  const fullNameFromState = location.state?.fullName;
  const fullNameFromStorage = localStorage.getItem("fullName");
  const fullName = fullNameFromState || fullNameFromStorage || "User";

  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [targetWeight, setTargetWeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("regular");

  const handleSave = (e) => {
    e.preventDefault();

    console.log({
      fullName,
      age,
      height,
      weight,
      targetWeight,
      activityLevel,
    });

    localStorage.setItem("profileCompleted", "true");


    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-64px)] bg-gradient-to-r from-blue-100 to-purple-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-5">
      
        <div className="text-center mb-4">
          <h1 className="text-xl font-bold text-blue-600">FitMind</h1>
          <p className="text-gray-500 mt-1 text-sm">Complete your profile</p>
        </div>

      
        <form onSubmit={handleSave}>
      
          <div className="mb-3">
            <label className="block text-gray-700 mb-1 text-sm font-medium">Full Name</label>
            <input
              type="text"
              value={fullName}
              readOnly
              className="w-full px-2 py-1 border border-gray-300 rounded bg-gray-100 text-sm"
            />
          </div>

          
          <div className="mb-3">
            <label className="block text-gray-700 mb-1 text-sm font-medium">Age</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter your age"
              className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-1 focus:ring-blue-400 text-sm"
            />
          </div>

        
          <div className="mb-3">
            <label className="block text-gray-700 mb-1 text-sm font-medium">Height (cm)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Enter your height"
              className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-1 focus:ring-blue-400 text-sm"
            />
          </div>

          
          <div className="mb-3">
            <label className="block text-gray-700 mb-1 text-sm font-medium">Current Weight (kg)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter your weight"
              className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-1 focus:ring-blue-400 text-sm"
            />
          </div>

        
          <div className="mb-3">
            <label className="block text-gray-700 mb-1 text-sm font-medium">Target Weight (kg)</label>
            <input
              type="number"
              value={targetWeight}
              onChange={(e) => setTargetWeight(e.target.value)}
              placeholder="Enter your target weight"
              className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-1 focus:ring-blue-400 text-sm"
            />
          </div>

          
          <div className="mb-4">
            <label className="block text-gray-700 mb-1 text-sm font-medium">Physical Activity Level</label>
            <select
              value={activityLevel}
              onChange={(e) => setActivityLevel(e.target.value)}
              className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-1 focus:ring-blue-400 text-sm"
            >
              <option value="regular">Regular Physical Activity</option>
              <option value="sometimes">Sometimes Active</option>
              <option value="never">Never Active</option>
            </select>
          </div>

        
          <button
            type="submit"
            className="w-full py-1.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded shadow-sm hover:from-blue-600 hover:to-purple-600 transition text-sm"
          >
            Save & Continue
          </button>
        </form>
      </div>
    </div>
  );
}
