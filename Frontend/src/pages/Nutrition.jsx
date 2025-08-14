import React from "react";

function Nutrition() {
  return (
    <div className="min-h-screen px-6 py-10 text-gray-800 bg-white">
      <div className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-green-600 mb-4">Nutrition</h1>
        <p className="text-lg mb-4">
          Welcome to the Nutrition page! Fuel your body with the right nutrients to support your fitness journey.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-base">
          <li>Track your calorie intake and macros</li>
          <li>Get healthy meal ideas</li>
          <li>Explore personalized diet plans</li>
        </ul>
      </div>
    </div>
  );
}

export default Nutrition; // ✅ Only ONE default export here
