import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const activities = [
  { title: "Morning Meditation", time: 10, type: "Guided Audio", videoUrl: "https://www.youtube.com/embed/inpok4MKVLM" },
  { title: "Deep Breathing Exercise", time: 5, type: "Relaxation", videoUrl: "https://www.youtube.com/embed/SEfs5TJZ6Nk" },
  { title: "Gratitude Journaling", time: 15, type: "Mindfulness", videoUrl: "https://www.youtube.com/embed/fS3K7KjzGdk" },
  { title: "Yoga Flow", time: 20, type: "Stretch & Relax", videoUrl: "https://www.youtube.com/embed/v7AYKMP6rOE" },
  { title: "Sleep Relaxation Music", time: 15, type: "Calming Music", videoUrl: "https://www.youtube.com/embed/qST1oKibdoA" },
  { title: "Progressive Muscle Relaxation", time: 12, type: "Guided Exercise", videoUrl: "https://www.youtube.com/embed/1nZEdqcGVzo" },
  { title: "Positive Affirmations", time: 8, type: "Mindset", videoUrl: "https://www.youtube.com/embed/4pLUleLdwY4" },
  { title: "Mindful Walking", time: 10, type: "Awareness", videoUrl: "https://www.youtube.com/embed/6p_yaNFSYao" },
  { title: "Visualization Exercise", time: 7, type: "Guided Visualization", videoUrl: "https://www.youtube.com/embed/a3vP0h2j_Ow" },
];

function ActivityCard({ activity }) {
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(activity.time * 60);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
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

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg hover:scale-[1.03] transition transform border border-gray-200">
      <div className="relative">
        <iframe
          src={activity.videoUrl}
          title={activity.title}
          className="w-full h-48"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="p-5">
        <h2 className="text-lg font-semibold text-gray-900">{activity.title}</h2>
        <p className="text-sm text-gray-700 mt-1">{activity.time} min</p>
        <p className="text-xs text-gray-500 mb-4">{activity.type}</p>
        {isRunning && (
          <p className="text-center font-mono text-gray-800 mb-2 text-lg">{formatTime(timeLeft)}</p>
        )}
        <button
          onClick={() => setIsRunning(!isRunning)}
          className="w-full text-center bg-white text-gray-900 px-4 py-2 rounded-lg font-medium shadow-sm hover:shadow transition text-sm border border-gray-300"
        >
          {isRunning ? "Pause" : "Start"}
        </button>
      </div>
    </div>
  );
}

export default function MentalHealth() {
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
          <h1 className="text-4xl font-extrabold text-gray-900">Mental Health</h1>
          <p className="text-gray-700 mt-2 text-base">
            Take care of your mind as much as your body.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {activities.map((activity, i) => (
            <ActivityCard key={i} activity={activity} />
          ))}
        </div>
      </div>
    </div>
  );
}
