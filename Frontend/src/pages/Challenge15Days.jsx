// src/pages/Challenge15Days.jsx
import { useState, useEffect } from "react";

export default function Challenge15Days() {
  const initialDays = [
    { day: 1, title: "Easy Full Body Stretch", video: "https://www.youtube.com/embed/Ef6LwAaB3_E" },
    { day: 2, title: "10-Min Beginner Workout", video: "https://www.youtube.com/embed/UItWltVZZmE" },
    { day: 3, title: "Low Impact Cardio", video: "https://www.youtube.com/embed/50kH47ZztHs" },
    { day: 4, title: "Beginner Abs Routine", video: "https://www.youtube.com/embed/1f8yoFFdkcY" },
    { day: 5, title: "Yoga for Flexibility", video: "https://www.youtube.com/embed/v7AYKMP6rOE" },
    { day: 6, title: "15-Min Full Body Workout", video: "https://www.youtube.com/embed/UBMk30rjy0o" },
    { day: 7, title: "HIIT for Beginners", video: "https://www.youtube.com/embed/ml6cT4AZdqI" },
    { day: 8, title: "Core Strength Routine", video: "https://www.youtube.com/embed/ml6cT4AZdqI" },
    { day: 9, title: "Upper Body Sculpt", video: "https://www.youtube.com/embed/pSHjTRCQxIw" },
    { day: 10, title: "Lower Body Burn", video: "https://www.youtube.com/embed/I9nG-G4B5Bs" },
    { day: 11, title: "Intermediate HIIT", video: "https://www.youtube.com/embed/ml6cT4AZdqI" },
    { day: 12, title: "Strength & Endurance", video: "https://www.youtube.com/embed/UItWltVZZmE" },
    { day: 13, title: "Cardio + Core Challenge", video: "https://www.youtube.com/embed/50kH47ZztHs" },
    { day: 14, title: "Advanced Full Body Workout", video: "https://www.youtube.com/embed/UBMk30rjy0o" },
    { day: 15, title: "15 Days Challenge Finale", video: "https://www.youtube.com/embed/v7AYKMP6rOE" },
  ];

  const [unlockedDay, setUnlockedDay] = useState(1);

  // Load last unlocked day
  useEffect(() => {
    const savedUnlocked = localStorage.getItem("challengeUnlockedDay");
    if (savedUnlocked) setUnlockedDay(parseInt(savedUnlocked));
  }, []);

  // Mark day as complete and unlock next
  const markComplete = (index) => {
    const nextDay = Math.min(index + 2, 15); // unlock next day
    setUnlockedDay(nextDay);
    localStorage.setItem("challengeUnlockedDay", nextDay);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        15 Days Challenge 
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {initialDays.map((day, index) => {
          const isUnlocked = index + 1 <= unlockedDay;

          return (
            <div
              key={index}
              className={`relative p-4 rounded-lg shadow-md transition-all duration-300 bg-white`}
            >
              <h2 className="text-xl font-semibold mb-2">
                Day {day.day}: {day.title}
              </h2>

              <div className="relative mb-4">
                <iframe
                  width="100%"
                  height="200"
                  src={day.video}
                  title={`Day ${day.day} workout`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>

                {/* Overlay div blocks interaction if locked */}
                {!isUnlocked && (
                  <div
                    className="absolute inset-0 bg-black/30 flex items-center justify-center text-white font-semibold cursor-not-allowed"
                  >
                    Locked 
                  </div>
                )}
              </div>

              {isUnlocked && index + 1 === unlockedDay && (
                <button
                  onClick={() => markComplete(index)}
                  className="px-4 py-2 rounded-md font-semibold bg-green-600 text-white hover:bg-green-700"
                >
                  Mark Complete 
                </button>
              )}

              {!isUnlocked && (
                <p className="italic text-gray-500">Complete previous day to unlock this workout.</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
