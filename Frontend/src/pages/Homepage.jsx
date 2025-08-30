import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const[showProfile,setShowProfile]=useState(false);
  const[showProgress,setShowProgress]=useState(false);
  const[profileData,setProfileData]=useState({});
  const navigate=useNavigate();

  useEffect(()=>{
    const storedProfile = JSON.parse(localStorage.getItem("userProfile")) || {};
    setProfileData(storedProfile);
  }, []);

  useEffect(()=>{
    const handleStorageChange=()=>{
      const updatedProfile=JSON.parse(localStorage.getItem("userProfile")) || {};
      setProfileData(updatedProfile);
    };

    window.addEventListener("storage",handleStorageChange);

    return()=>window.removeEventListener("storage",handleStorageChange);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 to-blue-100 p-5">
      <div className="flex justify-between items-center mb-5">
        <button
          className="flex items-center space-x-1 px-3 py-1 bg-white rounded shadow hover:bg-gray-100"
          onClick={()=>navigate("/profile")}
        >
           Back
        </button>

        <h1 className="text-xl font-bold text-green-700">FitMind Homepage</h1>

        <div className="flex space-x-2">
          <button
            className="flex items-center space-x-1 px-3 py-1 bg-white rounded shadow hover:bg-gray-100"
            onClick={()=>{
              setShowProfile(!showProfile);
              setShowProgress(false);
            }}
          >
            <span>👤</span>
            <span>Profile</span>
          </button>

          <button
            className="flex items-center space-x-1 px-3 py-1 bg-white rounded shadow hover:bg-gray-100"
            onClick={()=>{
              setShowProgress(!showProgress);
              setShowProfile(false);
            }}
          >
            <span>📊</span>
            <span>Progress</span>
          </button>
        </div>
      </div>

      {showProfile && (
        <div className="bg-white p-4 rounded shadow-md w-full max-w-xl">
          <h2 className="font-bold text-lg mb-3">Your Profile</h2>
          <table className="w-full border-collapse">
            <tbody>
              <tr>
                <td className="border p-2 font-semibold">Name</td>
                <td className="border p-2">{profileData.fullName}</td>
              </tr>
              <tr>
                <td className="border p-2 font-semibold">Gender</td>
                <td className="border p-2">{profileData.gender}</td>
              </tr>
              <tr>
                <td className="border p-2 font-semibold">Age</td>
                <td className="border p-2">{profileData.age}</td>
              </tr>
              <tr>
                <td className="border p-2 font-semibold">Height</td>
                <td className="border p-2">{profileData.height}</td>
              </tr>
              <tr>
                <td className="border p-2 font-semibold">Weight</td>
                <td className="border p-2">{profileData.weight}</td>
              </tr>
              <tr>
                <td className="border p-2 font-semibold">Goal</td>
                <td className="border p-2">{profileData.goal}</td>
              </tr>
              {profileData.goal !=="maintain"&&(
                <tr>
                  <td className="border p-2 font-semibold">Target Weight</td>
                  <td className="border p-2">{profileData.targetWeight}</td>
                </tr>
              )}
              <tr>
                <td className="border p-2 font-semibold">Activity Level</td>
                <td className="border p-2">{profileData.activityLevel}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {showProgress && (
        <div className="bg-white p-4 rounded shadow-md w-full max-w-md">
          <h2 className="font-bold text-lg mb-3">Progress Report</h2>
          <p><strong>Current Weight:</strong> {profileData.weight} kg</p>
          {profileData.goal !== "maintain" && (
            <p><strong>Target Weight:</strong> {profileData.targetWeight} kg</p>
          )}
          <p><strong>Goal:</strong>{profileData.goal}</p>
          <p className="mt-2 text-green-600">
            Progress tracking feature coming soon 🚀
          </p>
        </div>
      )}

      <div className="mt-5">
        <h2 className="text-lg font-semibold">Welcome to FitMind!</h2>
        <p>Here you can access Workouts, Nutrition, Mental Health resources, and more.</p>
      </div>
    </div>
  );
}
