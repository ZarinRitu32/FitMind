import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const workouts = [
  { title: "Push Ups", duration: 10, type: "Strength", videoUrl: "https://www.youtube.com/embed/IODxDxX7oi4" },
  { title: "Jumping Jacks", duration: 5, type: "Cardio", videoUrl: "https://www.youtube.com/embed/c4DAnQ6DtF8" },
  { title: "Squats", duration: 12, type: "Strength", videoUrl: "https://www.youtube.com/embed/YaXPRqUwItQ" },
  { title: "Plank Hold", duration: 8, type: "Core", videoUrl: "https://www.youtube.com/embed/pSHjTRCQxIw" },
  { title: "Burpees", duration: 15, type: "HIIT", videoUrl: "https://www.youtube.com/embed/auBLPXO8Fww" },
  { title: "Lunges", duration: 10, type: "Strength", videoUrl: "https://www.youtube.com/embed/QOVaHwm-Q6U" },
  { title: "Mountain Climbers", duration: 12, type: "Cardio", videoUrl: "https://www.youtube.com/embed/nmwgirgXLYM" },
  { title: "Bicycle Crunches", duration: 8, type: "Core", videoUrl: "https://www.youtube.com/embed/Iwyvozckjak" },
  { title: "Jump Squats", duration: 10, type: "HIIT", videoUrl: "https://www.youtube.com/embed/A-cFYWvaHr0" },
  { title: "Tricep Dips", duration: 10, type: "Strength", videoUrl: "https://www.youtube.com/embed/0326dy_-CzM" },
  { title: "High Knees", duration: 5, type: "Cardio", videoUrl: "https://www.youtube.com/embed/OAJ_J3EZkdY" },
  { title: "Side Plank", duration: 6, type: "Core", videoUrl: "https://www.youtube.com/embed/K2VljzCC16g" },
  { title: "Pull Ups", duration: 15, type: "Strength", videoUrl: "https://www.youtube.com/embed/eGo4IYlbE5g" },
  { title: "Jump Rope", duration: 7, type: "Cardio", videoUrl: "https://www.youtube.com/embed/cbKkB3POqaY" },
  { title: "Glute Bridge", duration: 8, type: "Strength", videoUrl: "https://www.youtube.com/embed/wPM8icPu6H8" },
  { title: "Russian Twists", duration: 9, type: "Core", videoUrl: "https://www.youtube.com/embed/wkD8rjkodUI" },
  { title: "Shadow Boxing", duration: 12, type: "Cardio", videoUrl: "https://www.youtube.com/embed/KEe4LX0mY3U" },
  { title: "Jump Lunges", duration: 10, type: "HIIT", videoUrl: "https://www.youtube.com/embed/1nI5Khlp-p0" },
  { title: "Bench Press", duration: 15, type: "Strength", videoUrl: "https://www.youtube.com/embed/rT7DgCr-3pg" },
  { title: "Sit Ups", duration: 10, type: "Core", videoUrl: "https://www.youtube.com/embed/jDwoBqPH0jk" },
  { title: "Flutter Kicks", duration: 8, type: "Core", videoUrl: "https://www.youtube.com/embed/0t7Yy_lLFQQ" },
  { title: "Box Jumps", duration: 10, type: "HIIT", videoUrl: "https://www.youtube.com/embed/pFuX4F4zq6k" },
  { title: "Deadlifts", duration: 15, type: "Strength", videoUrl: "https://www.youtube.com/embed/op9kVnSso6Q" },
  { title: "Bicep Curls", duration: 12, type: "Strength", videoUrl: "https://www.youtube.com/embed/ykJmrZ5v0Oo" },
  { title: "Push Press", duration: 14, type: "Strength", videoUrl: "https://www.youtube.com/embed/iaBVSJm78ko" },
  { title: "Farmer's Walk", duration: 10, type: "Strength", videoUrl: "https://www.youtube.com/embed/5nZUxvGmcnU" },
  { title: "Leg Raises", duration: 8, type: "Core", videoUrl: "https://www.youtube.com/embed/JB2oyawG9KI" },
  { title: "Calf Raises", duration: 6, type: "Strength", videoUrl: "https://www.youtube.com/embed/-M4-G8p8fmc" },
  { title: "Chin Ups", duration: 12, type: "Strength", videoUrl: "https://www.youtube.com/embed/brhRXlOhsAM" },
  { title: "Clap Push Ups", duration: 10, type: "HIIT", videoUrl: "https://www.youtube.com/embed/QjJkzjFb8fY" },
];

function WorkoutCard({ workout }) {
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(workout.duration * 60);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((t) => t - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const resetTimer = () => {
    setTimeLeft(workout.duration * 60);
    setIsRunning(false);
  };

  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg overflow-hidden transition transform hover:scale-[1.03] border border-gray-200">
      <div className="relative">
        <iframe
          src={workout.videoUrl}
          title={workout.title}
          className="w-full h-48"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="p-5">
        <h2 className="text-lg font-semibold text-gray-900">{workout.title}</h2>
        <p className="text-sm text-gray-700 font-medium mt-1">{workout.duration} min</p>
        <p className="text-xs text-gray-500 mb-4">{workout.type}</p>

        {isRunning && (
          <p className="text-center font-mono text-gray-800 mb-2 text-lg">{formatTime(timeLeft)}</p>
        )}

        <button
          onClick={() => setIsRunning(!isRunning)}
          className="w-full text-center bg-white text-gray-900 px-4 py-2 rounded-lg font-medium shadow-sm hover:shadow transition text-sm border border-gray-300 mb-2"
        >
          {isRunning ? "Pause Workout" : "Start Workout"}
        </button>

        <button
          onClick={resetTimer}
          className="w-full text-center bg-white text-gray-900 px-4 py-2 rounded-lg font-medium shadow-sm hover:shadow transition text-sm border border-gray-300"
        >
          Reset Timer
        </button>
      </div>
    </div>
  );
}

export default function Workouts() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => navigate("/dashboard")}
          className="mb-6 bg-white text-gray-900 px-5 py-2 rounded-lg font-medium shadow hover:shadow-md transition text-sm border border-gray-300"
        >
          ← Back to Dashboard
        </button>

        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">
             Gym Workout Library
          </h1>
          <p className="text-gray-700 mt-2 text-base">
            Explore 30+ workouts – Strength, Cardio, Core & HIIT.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {workouts.map((w, i) => (
            <WorkoutCard key={i} workout={w} />
          ))}
        </div>
      </div>
    </div>
  );
}