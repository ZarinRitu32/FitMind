import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const location = useLocation();
  const fullName = location.state?.fullName || localStorage.getItem("fullName") || "User";

  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [heightFeet, setHeightFeet] = useState("");
  const [heightInches, setHeightInches] = useState("");
  const [weight, setWeight] = useState("");
  const [goal, setGoal] = useState("maintain");
  const [targetWeight, setTargetWeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("regular"); 

  const handleSave = (e) => {
  e.preventDefault();

  const profileData = {
    fullName,
    age,
    gender,
    height: `${heightFeet} ft ${heightInches} in`,
    weight,
    goal,
    targetWeight: goal === "maintain" ? null : targetWeight,
    activityLevel,
  };

  console.log("Profile Data:", profileData);

  // Save the profile data so homepage can read it
  localStorage.setItem("userProfile", JSON.stringify(profileData));
  localStorage.setItem("profileCompleted", "true");

  navigate("/homepage"); // or /dashboard if homepage route is different
};

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-64px)] bg-gradient-to-r from-blue-100 to-purple-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-5">
        <h1 className="text-xl font-bold text-center text-blue-600 mb-4">Complete Your Profile</h1>

        <form onSubmit={handleSave} className="space-y-3 text-sm">
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Full Name</label>
            <input
              type="text"
              value={fullName}
              readOnly
              className="w-full px-2 py-1 border border-gray-300 rounded bg-gray-100"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1 font-medium">Gender</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-1 focus:ring-blue-400"
              required
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-1 font-medium">Age</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter your age"
              className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-1 focus:ring-blue-400"
              required
            />
          </div>

          <div className="flex space-x-2">
            <div className="flex-1">
              <label className="block text-gray-700 mb-1 font-medium">Height (feet)</label>
              <input
                type="number"
                value={heightFeet}
                onChange={(e) => setHeightFeet(e.target.value)}
                placeholder="Feet"
                className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-1 focus:ring-blue-400"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-700 mb-1 font-medium">Height (inches)</label>
              <input
                type="number"
                value={heightInches}
                onChange={(e) => setHeightInches(e.target.value)}
                placeholder="Inches"
                className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-1 focus:ring-blue-400"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-1 font-medium">Weight (kg)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter your weight"
              className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-1 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1 font-medium">Fitness Goal</label>
            <select
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-1 focus:ring-blue-400"
              required
            >
              <option value="gain">Weight Gain</option>
              <option value="loss">Weight Loss</option>
              <option value="maintain">Maintain Weight</option>
            </select>
          </div>

      
          {(goal === "gain" || goal === "loss") && (
            <div>
              <label className="block text-gray-700 mb-1 font-medium">
                {goal === "gain" ? "Target Gain (kg)" : "Target Weight (kg)"}
              </label>
              <input
                type="number"
                value={targetWeight}
                onChange={(e) => setTargetWeight(e.target.value)}
                placeholder="Enter target"
                className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-1 focus:ring-blue-400"
                required
              />
            </div>
          )}

          <div>
            <label className="block text-gray-700 mb-1 font-medium">Physical Activity Level</label>
            <select
              value={activityLevel}
              onChange={(e) => setActivityLevel(e.target.value)}
              className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-1 focus:ring-blue-400"
              required
            >
              <option value="regular">Regular physical activity</option>
              <option value="sometimes">Sometimes active</option>
              <option value="never">Rarely/Never active</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-1.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded shadow-sm hover:from-blue-600 hover:to-purple-600 transition"
          >
            Save Profile
          </button>
        </form>
      </div>
    </div>
  );
}
