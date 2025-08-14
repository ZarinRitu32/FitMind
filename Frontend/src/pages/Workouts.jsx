import React from "react";

const Workouts = () => {
  return (
    <div className="min-h-screen bg-red-50 px-6 py-12 md:px-24 text-gray-800">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-8">
        <h1 className="text-4xl font-bold text-red-600 mb-6 text-center">
          Workout & Training Plans
        </h1>

        <p className="mb-4 text-lg">
          Your fitness journey starts here. Whether you're a beginner or an athlete, <strong>FitMind</strong> helps you
          stay consistent, motivated, and on track with your fitness goals.
        </p>

        <p className="mb-4 text-lg">
          Every workout brings you closer to a stronger, healthier version of yourself.
        </p>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-red-500 mb-2">Features Include:</h2>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>Custom workout programs</li>
            <li>Exercise tutorials with form tips</li>
            <li>Goal-based plans (weight loss, strength, endurance)</li>
            <li>Workout calendar & progress tracker</li>
            <li>Warm-up and cool-down routines</li>
          </ul>
        </div>

        <div className="mt-8 bg-red-100 border-l-4 border-red-500 p-4 rounded">
          <p className="italic text-red-800 text-lg">
            “The only bad workout is the one that didn’t happen.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Workouts;
