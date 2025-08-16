// src/pages/DeepBreathing.jsx
import { useState, useEffect } from "react";

export default function DeepBreathing() {
  const [step, setStep] = useState("Inhale");
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev === 1) {
          // Switch between inhale and exhale
          setStep((s) => (s === "Inhale" ? "Exhale" : "Inhale"));
          return 5;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-indigo-200 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Deep Breathing Exercise</h1>
      <div className="bg-white shadow-xl rounded-2xl p-8 text-center w-[350px]">
        <p className="text-xl font-semibold mb-4">{step}</p>
        <p className="text-6xl font-bold text-indigo-600">{seconds}</p>
        <p className="mt-6 text-gray-600">
          Follow along: Inhale for 5 seconds, then exhale for 5 seconds. Repeat
          for 5 minutes.
        </p>
      </div>
    </div>
  );
}
