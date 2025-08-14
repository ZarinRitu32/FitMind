import React from "react";

const MentalHealth = () => {
  return (
    <div className="min-h-screen bg-blue-50 px-6 py-12 md:px-24 text-gray-800">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">
          Mental Health & Wellbeing
        </h1>

        <p className="mb-4 text-lg">
          At <strong>FitMind</strong>, we believe that mental health is just as important as physical fitness.
          Balancing your thoughts and emotions plays a critical role in your overall well-being.
        </p>

        <p className="mb-4 text-lg">
          Whether you're looking to manage stress, build resilience, or simply take time to breathe,
          we offer guidance to help you along the way.
        </p>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-blue-500 mb-3">What You’ll Find Here:</h2>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>Daily mindfulness and meditation exercises</li>
            <li>Journaling prompts for self-reflection</li>
            <li>Tips to manage anxiety and stress</li>
            <li>Motivational quotes and mental strength practices</li>
            <li>Expert resources and helplines</li>
          </ul>
        </div>

        <div className="mt-8 bg-blue-100 border-l-4 border-blue-500 p-4 rounded">
          <p className="italic text-blue-800 text-lg">
            "Mental strength is not the ability to stay out of the darkness, it’s the ability to sit
            present in the darkness knowing the light will shine again."
          </p>
        </div>
      </div>
    </div>
  );
};

export default MentalHealth;
