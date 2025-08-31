// src/pages/Dashboard.jsx
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const quotes = [
  "Your body achieves what your mind believes.",
  "Push yourself, because no one else is going to do it for you.",
  "Fitness is not about being better than someone else, it’s about being better than you used to be.",
  "Don’t limit your challenges. Challenge your limits.",
  "Mental strength is not the absence of fear, but the will to overcome it.",
  "Discipline is choosing between what you want now and what you want most.",
  "Every workout counts. Don’t stop now.",
  "You are one workout away from a good mood."
];

const cardQuotes = {
  workouts: "Sweat today, shine tomorrow.",
  nutrition: "Eat better, feel better.",
  mental: "A healthy mind fuels a healthy body.",
  community: "Stronger together, every step of the way."
};

const beginnerCards = [
  {
    title: "15 Days Challenge",
    desc: "Kickstart your weight loss journey",
    image: "https://images.pexels.com/photos/3757957/pexels-photo-3757957.jpeg",
    link: "/challenge/15-days"
  },
  {
    title: "Easy Workout Session",
    desc: "Simple routines for beginners",
    image: "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg",
    link: "/workouts/easy"
  },
  {
    title: "5 Days Level Up",
    desc: "Step up your fitness in 5 days",
    image: "https://images.pexels.com/photos/4498550/pexels-photo-4498550.jpeg",
    link: "/challenge/5-days"
  }
];

export default function Dashboard() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex(prev => (prev + 1) % quotes.length);
    }, 3000); // change quote every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col">

      {/* Hero Section */}
      <div
        className="w-full min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-center relative"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 p-8 flex flex-col items-center">
          <h2 className="text-6xl md:text-7xl text-white mb-6 font-semibold leading-tight">
            GET FIT WITH US
          </h2>
          <p className="text-xl md:text-2xl text-white mb-6 italic leading-snug max-w-2xl mx-auto font-semibold">
            "{quotes[quoteIndex]}"
          </p>

          {/* Join Button */}
          <button
            onClick={() => navigate("/login")}
            className="bg-white text-black px-10 py-4 rounded-full text-xl font-semibold mt-6 hover:bg-gray-200 transition"
          >
            Join
          </button>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="mt-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <FeatureCard
            title="Workouts"
            desc={cardQuotes.workouts}
            image="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg"
            link="/workouts"
          />
          <FeatureCard
            title="Nutrition"
            desc={cardQuotes.nutrition}
            image="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
            link="/nutrition"
          />
          <FeatureCard
            title="Mental Health"
            desc={cardQuotes.mental}
            image="https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg"
            link="/mental-health"
          />
          <FeatureCard
            title="Community"
            desc={cardQuotes.community}
            image="https://images.pexels.com/photos/3184406/pexels-photo-3184406.jpeg"
            link="/community"
          />
        </div>
      </div>

      {/* Beginner Section */}
      <div className="mt-8 px-2 md:px-4 text-left">
        <h2 className="text-xl md:text-2xl font-semibold mb-6">
          Are you a beginner? Let's start with us!
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {beginnerCards.map((card, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-lg min-h-[300px] flex flex-col justify-center items-center bg-cover bg-center transition-transform transform hover:scale-105"
              style={{ backgroundImage: `url('${card.image}')` }}
            >
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="relative z-10 text-center p-4 flex flex-col items-center">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">{card.title}</h3>
                <p className="text-white mb-4 font-semibold">{card.desc}</p>
                <Link
                  to={card.link}
                  className="bg-white text-black px-6 py-2 rounded-full text-lg hover:bg-gray-200 transition"
                >
                  Start
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ title, desc, image, link }) {
  return (
    <div
      className="relative rounded-lg shadow-lg flex flex-col items-center justify-center min-h-[360px] bg-cover bg-center transition-transform transform hover:scale-105"
      style={{ backgroundImage: `url('${image}')` }}
    >
      <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
      <div className="relative z-10 text-center px-4">
        <h3 className="text-3xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-white text-sm md:text-base italic mb-4 font-semibold">
          {desc}
        </p>
        <Link
          to={link}
          className="bg-white text-black px-6 py-2 rounded-full text-lg hover:bg-gray-200 transition"
        >
          Explore
        </Link>
      </div>
    </div>
  );
}
