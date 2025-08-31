// src/pages/EasyWorkout.jsx
import { useState, useRef } from "react";

export default function EasyWorkout() {
  const workouts = [
    {
      title: "Push-ups",
      duration: "10 min",
      desc: "Do 3 sets of 10 reps with short breaks. Keep your body in a straight line from head to heels, lower your chest close to the floor, and push back up while engaging your core.",
      days: "4 days/week",
      img: "https://images.pexels.com/photos/176782/pexels-photo-176782.jpeg",
    },
    {
      title: "Squats",
      duration: "12 min",
      desc: "Do 3 sets of 15 squats. Stand with feet shoulder-width apart, lower your hips back and down as if sitting in a chair, keep your chest upright, and push through your heels to return to standing.",
      days: "3 days/week",
      img: "https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg",
    },
    {
      title: "Plank",
      duration: "5 min",
      desc: "Hold the plank position for 30 seconds × 3. Keep your body in a straight line and engage your core.",
      days: "5 days/week",
      img: "https://images.pexels.com/photos/3823063/pexels-photo-3823063.jpeg",
    },
    {
      title: "Lunges",
      duration: "8 min",
      desc: "Do 3 sets of 12 reps on each leg. Step forward, lower both knees to about 90°, then push back up to starting position.",
      days: "3 days/week",
      img: "https://images.pexels.com/photos/4775203/pexels-photo-4775203.jpeg",
    },
    {
      title: "Jumping Jacks",
      duration: "2 min",
      desc: "A great warm-up exercise. Jump with feet apart and arms overhead, then return to starting position. Do continuously for 2 minutes.",
      days: "Daily",
      img: "https://images.pexels.com/photos/4853091/pexels-photo-4853091.jpeg",
    },
    {
      title: "Mountain Climbers",
      duration: "4 min",
      desc: "Start in a push-up position. Drive your right knee toward your chest, then quickly switch legs. Keep your body straight and move quickly like running in place.",
      days: "3 days/week",
      img: "https://images.pexels.com/photos/6516165/pexels-photo-6516165.jpeg",
    },
    {
      title: "Glute Bridge",
      duration: "6 min",
      desc: "Lie on your back with knees bent and feet flat on the floor. Push through your heels to lift your hips upward, squeezing your glutes at the top. Lower back down slowly.",
      days: "3 days/week",
      img: "https://images.pexels.com/photos/6516221/pexels-photo-6516221.jpeg",
    },
    {
      title: "Bicycle Crunches",
      duration: "5 min",
      desc: "Lie on your back with hands behind head. Bring one knee toward your chest while rotating your opposite elbow to meet it. Switch sides like pedaling a bicycle.",
      days: "4 days/week",
      img: "https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg",
    },
    {
      title: "High Knees",
      duration: "3 min",
      desc: "Stand tall and run in place, bringing your knees up to hip level as fast as possible. Pump your arms to increase intensity.",
      days: "Daily",
      img: "https://images.pexels.com/photos/6339341/pexels-photo-6339341.jpeg",
    },
    {
      title: "Side Plank",
      duration: "4 min",
      desc: "Lie on one side, supporting your body on your forearm and side of your foot. Keep body straight, lift hips, and hold. Switch sides after each set.",
      days: "3 days/week",
      img: "https://images.pexels.com/photos/4587293/pexels-photo-4587293.jpeg",
    },
    {
      title: "Tricep Dips",
      duration: "5 min",
      desc: "Sit on the edge of a sturdy chair or bench. Place hands next to your hips, slide forward, and lower your body by bending elbows to 90°. Push back up.",
      days: "3 days/week",
      img: "https://images.pexels.com/photos/5496589/pexels-photo-5496589.jpeg",
    },
    {
      title: "Wall Sit",
      duration: "3 min",
      desc: "Lean your back against a wall and slide down until your knees are at 90°. Hold this seated position while keeping your back flat against the wall.",
      days: "3 days/week",
      img: "https://images.pexels.com/photos/6740055/pexels-photo-6740055.jpeg",
    },
  ];

  return (
    <div className="p-6 md:p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-800">
        Easy Workout Session
      </h1>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Beginner-friendly exercises with clear instructions, images, and timers.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {workouts.map((workout, index) => (
          <WorkoutCard key={index} workout={workout} />
        ))}
      </div>
    </div>
  );
}

function WorkoutCard({ workout }) {
  const [seconds, setSeconds] = useState(0);
  const [active, setActive] = useState(false);
  const timerRef = useRef(null);

  const toggleTimer = () => {
    if (active) {
      clearInterval(timerRef.current);
      setActive(false);
    } else {
      setActive(true);
      timerRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setActive(false);
    setSeconds(0);
  };

  const formatTime = (sec) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl flex flex-col border border-gray-200 h-full">
      <h2 className="text-xl font-semibold mb-2 text-gray-800">{workout.title}</h2>
      <img
        src={workout.img}
        alt={workout.title}
        className="w-full h-48 object-cover rounded-lg mb-4 border border-gray-300"
      />
      <p className="text-gray-700 font-medium mb-1">{workout.duration}</p>
      <p className="text-gray-700 italic mb-1">{workout.days}</p>
      <p className="text-gray-600 mb-4 text-center flex-grow">{workout.desc}</p>

      {/* Timer Controls at the bottom */}
      <div className="flex items-center gap-2 mt-auto justify-center">
        <button
          onClick={toggleTimer}
          className={`px-4 py-2 rounded-lg text-white ${active ? "bg-red-500" : "bg-green-500"}`}
        >
          {active ? "Pause" : "Start"}
        </button>
        <button
          onClick={resetTimer}
          className="px-4 py-2 rounded-lg bg-gray-500 text-white"
        >
          Reset
        </button>
        <span className="font-mono text-lg">{formatTime(seconds)}</span>
      </div>
    </div>
  );
}
