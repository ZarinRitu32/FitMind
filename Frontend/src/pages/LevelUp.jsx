import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const days = [
  { 
    day: 1, 
    title: "Kickstart Your Fitness", 
    desc: "Setup your mindset & body. Start with warm-ups, cardio, and light workouts.", 
    advice: "Consistency beats intensity. Start small but don’t stop!",
    image: "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg"
  },
  { 
    day: 2, 
    title: "Strength Training", 
    desc: "Focus on weight lifting and strength exercises to build endurance.", 
    advice: "Push harder today. Your muscles grow when you challenge them!",
    image: "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg"
  },
  { 
    day: 3, 
    title: "Healthy Meals", 
    desc: "Balanced diet with protein, vegetables, and hydration for fat burn.", 
    advice: "Your diet is 70% of your fitness. Eat clean, stay lean!",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
  },
  { 
    day: 4, 
    title: "Mind & Body", 
    desc: "Meditation, stretching, and yoga to connect body with mind.", 
    advice: "A strong mind builds a stronger body. Breathe, relax, focus.",
    image: "https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg"
  },
  { 
    day: 5, 
    title: "Final Burn", 
    desc: "High-intensity workout + reflection journaling. Hard work pays off!", 
    advice: "Don’t quit now! Today defines your transformation. Give it all!",
    image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg"
  }
];

function DayCard({ day, onClick }) {
  return (
    <div 
      onClick={onClick}
      className="cursor-pointer bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg hover:scale-[1.03] transition transform border border-gray-200"
    >
      <img src={day.image} alt={day.title} className="w-full h-40 object-cover" />
      <div className="p-5">
        <h2 className="text-lg font-bold text-gray-900">Day {day.day}: {day.title}</h2>
        <p className="text-gray-700 mt-2">{day.desc}</p>
        <p className="text-xs text-green-600 mt-3 font-medium">🔥 Hard work, big results</p>
      </div>
    </div>
  );
}

export default function LevelUp() {
  const navigate = useNavigate();
  const [selectedDay, setSelectedDay] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 via-green-100 to-blue-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="mb-6 bg-white text-gray-900 px-5 py-2 rounded-lg font-medium shadow hover:shadow-md transition text-sm border border-gray-300"
        >
          ← Back to Dashboard
        </button>

        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">FitMind 5 Days Level Up</h1>
          <p className="text-gray-700 mt-2 text-base">
            Transform your body & mind in just 5 days with focused workouts, healthy meals, and mental wellness.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {days.map((d, i) => (
            <DayCard key={i} day={d} onClick={() => setSelectedDay(d)} />
          ))}
        </div>
      </div>

      {/* Motivational Modal */}
      {selectedDay && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-2xl shadow-lg max-w-md w-full p-6 relative">
            <button 
              onClick={() => setSelectedDay(null)} 
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-lg"
            >
              ✖
            </button>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Day {selectedDay.day}: {selectedDay.title}</h2>
            <p className="text-gray-700">{selectedDay.advice}</p>
            <div className="mt-5 text-right">
              <button 
                onClick={() => setSelectedDay(null)} 
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                Got it!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
