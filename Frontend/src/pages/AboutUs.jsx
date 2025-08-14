// src/pages/AboutUs.jsx
import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12 md:px-24 text-gray-800">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-green-600 mb-6 text-center">
          About FitMind
        </h1>

        <p className="mb-4 text-lg">
          <strong>FitMind</strong> is your all-in-one companion for fitness, nutrition, and mental
          wellness. We believe a healthy mind is just as important as a healthy body —
          and our app is designed to help you improve both.
        </p>

        <p className="mb-4 text-lg">
          Whether you're tracking your workouts, planning meals, or taking time for
          mindfulness, FitMind gives you the tools and motivation to stay on track.
        </p>

        <p className="mb-4 text-lg">
          Our mission is to empower people of all fitness levels to achieve their goals with
          a balanced and sustainable approach. We’re not just about fitness — we’re about
          building strong habits for life.
        </p>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-green-500 mb-2">Why FitMind?</h2>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>Track your workouts and progress easily</li>
            <li>Personalized nutrition support</li>
            <li>Guided tools for mental well-being</li>
            <li>Daily motivation with inspiring quotes</li>
            <li>Simple, clean, and user-friendly design</li>
          </ul>
        </div>

        <p className="mt-6 text-center italic text-gray-600">
          “Your body achieves what your mind believes.”
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
