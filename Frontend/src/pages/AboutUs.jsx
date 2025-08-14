// src/pages/AboutUs.jsx
import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-gray-50 px-6 py-12 md:px-24 text-gray-800">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-extrabold text-green-600 mb-4">
          About <span className="text-green-500">FitMind</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Your all-in-one companion for <span className="font-semibold">fitness</span>,
          <span className="font-semibold"> nutrition</span>, and{" "}
          <span className="font-semibold">mental wellness</span>. Because a healthy body
          starts with a healthy mind.
        </p>
      </div>

      {/* Content Card */}
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl p-8">
        <p className="mb-4 text-lg leading-relaxed">
          <strong>FitMind</strong> helps you track workouts, plan meals, and build strong
          mental habits — all in one place. We believe health is a balance between mind and body,
          and our app is designed to help you strengthen both.
        </p>

        <p className="mb-4 text-lg leading-relaxed">
          Whether you're just starting your journey or looking to push your limits, FitMind
          provides the tools, guidance, and motivation you need to succeed.
        </p>

        <p className="mb-4 text-lg leading-relaxed">
          Our mission is simple — make fitness and wellness accessible, enjoyable, and sustainable
          for everyone.
        </p>

        {/* Why Choose Us */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-green-500 mb-4">
            Why Choose FitMind?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-base text-gray-700">
            <li>Track your workouts and progress with ease</li>
            <li>Personalized nutrition guidance</li>
            <li>Guided tools for stress management & mindfulness</li>
            <li>Daily motivational quotes & reminders</li>
            <li>Clean, intuitive, and user-friendly design</li>
          </ul>
        </div>

        {/* Quote */}
        <div className="mt-8 text-center border-t pt-6">
          <p className="italic text-lg text-gray-500">
            “Your body achieves what your mind believes.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
