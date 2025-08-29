// src/pages/Nutrition.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/* ---------------- Hero Quotes ---------------- */
const quotes = [
  "Healthy eating is a form of self-respect.",
  "Small changes over time lead to big results.",
  "Choose foods that fuel your life, not just your cravings.",
  "Hydrate, move, rest — repeat.",
  "Consistency > perfection.",
  "Eat the rainbow every day.",
  "Real food. Real energy. Real results.",
  "Nutrition is the body’s foundation for everything.",
];

/* ---------------- Health Articles ---------------- */
/* ---------------- Health Articles ---------------- */
const healthArticles = [
  {
    id: 1,
    title: "Why Hydration Matters",
    excerpt:
      "Hydration impacts energy, digestion, and mood. Staying hydrated helps you perform at your best.",
    image: "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg",
    content:
      "Water makes up 60% of your body. Even mild dehydration can cause fatigue and poor focus. Aim for 8–10 glasses daily.",
  },
  {
    id: 2,
    title: "Balanced Plate Basics",
    excerpt:
      "A balanced plate includes lean proteins, whole grains, vegetables, fruits, and healthy fats.",
    image: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg",
    content:
      "Divide your plate: ½ veggies/fruits, ¼ lean protein, ¼ whole grains. Add healthy fats like olive oil or avocado.",
  },
  {
    id: 3,
    title: "Mindful Eating Tips",
    excerpt:
      "Mindful eating means slowing down, paying attention, and savoring every bite.",
    image: "https://images.pexels.com/photos/4056532/pexels-photo-4056532.jpeg",
    content:
      "Remove distractions, chew slowly, listen to hunger cues. Mindful eaters report fewer calories and more satisfaction.",
  },
  {
    id: 4,
    title: "Simple Home Workouts",
    excerpt:
      "Exercise doesn’t need a gym. Bodyweight workouts at home can be just as effective.",
    image: "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg",
    content:
      "Squats, push-ups, planks, lunges, burpees — simple yet powerful. Consistency matters more than equipment.",
  },
  // NEW 12 HEALTH ARTICLES
  {
    id: 5,
    title: "The Power of Fiber",
    excerpt:
      "Fiber aids digestion, controls blood sugar, and keeps you full longer.",
    image: "https://images.pexels.com/photos/373873/pexels-photo-373873.jpeg",
    content:
      "Eat more whole grains, vegetables, and legumes to boost fiber intake. Adults need 25–35g daily.",
  },
  {
    id: 6,
    title: "Importance of Sleep",
    excerpt:
      "Sleep affects metabolism, cravings, and overall health.",
    image: "https://images.pexels.com/photos/935743/pexels-photo-935743.jpeg",
    content:
      "Aim for 7–9 hours nightly. Poor sleep disrupts hunger hormones and slows recovery.",
  },
  {
    id: 7,
    title: "Healthy Snacking Habits",
    excerpt:
      "Smart snacks keep energy stable and prevent overeating.",
    image: "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg",
    content:
      "Choose nuts, fruits, yogurt, or veggie sticks instead of processed snacks.",
  },
  {
    id: 8,
    title: "The Role of Protein",
    excerpt:
      "Protein helps repair muscles, regulate hormones, and maintain energy.",
    image: "https://images.pexels.com/photos/235294/pexels-photo-235294.jpeg",
    content:
      "Include eggs, chicken, fish, beans, or tofu daily. Aim for 1.2–2.0g/kg body weight.",
  },
  {
    id: 9,
    title: "Gut Health Essentials",
    excerpt:
      "A healthy gut improves digestion, immunity, and mood.",
    image: "https://images.pexels.com/photos/5938/food-salad-healthy-lunch.jpg",
    content:
      "Eat fermented foods, high-fiber fruits, and vegetables to nourish your microbiome.",
  },
  {
    id: 10,
    title: "Managing Sugar Intake",
    excerpt:
      "Too much sugar can affect energy, weight, and overall health.",
    image: "https://images.pexels.com/photos/302680/pexels-photo-302680.jpeg",
    content:
      "Limit sugary drinks and desserts. Opt for natural sugars from fruits.",
  },
  {
    id: 11,
    title: "Healthy Fats Matter",
    excerpt:
      "Not all fats are bad. Healthy fats support heart and brain health.",
    image: "https://images.pexels.com/photos/5938/food-salad-healthy-lunch.jpg",
    content:
      "Use olive oil, avocado, nuts, and seeds instead of trans fats.",
  },
  {
    id: 12,
    title: "Hydration for Athletes",
    excerpt:
      "Proper hydration improves performance and recovery.",
    image: "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg",
    content:
      "Drink water before, during, and after exercise. Include electrolytes for intense workouts.",
  },
  {
    id: 13,
    title: "Boosting Immunity Naturally",
    excerpt:
      "Nutrition and lifestyle choices strengthen the immune system.",
    image: "https://images.pexels.com/photos/5938/food-salad-healthy-lunch.jpg",
    content:
      "Include vitamin C-rich foods, zinc, sleep, and regular exercise to stay healthy.",
  },
  {
    id: 14,
    title: "Mind-Body Connection",
    excerpt:
      "Mental health affects eating habits and overall wellness.",
    image: "https://images.pexels.com/photos/4056532/pexels-photo-4056532.jpeg",
    content:
      "Practice mindfulness, yoga, or meditation to improve mental clarity and reduce stress.",
  },
  {
    id: 15,
    title: "Importance of Breakfast",
    excerpt:
      "Breakfast jumpstarts your metabolism and energy levels.",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    content:
      "Include protein, fiber, and healthy fats for a balanced morning meal.",
  },
  {
    id: 16,
    title: "Hydration Tips for Busy Days",
    excerpt:
      "Stay hydrated even with a packed schedule.",
    image: "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg",
    content:
      "Carry a reusable water bottle, set reminders, and sip water throughout the day.",
  },
];

/* ---------------- Healthy Recipes ---------------- */
/* ---------------- Healthy Recipes ---------------- */
const recipes = [
  {
    id: 1,
    title: "Oats with Fruits",
    video: "https://www.youtube.com/embed/ZgQxtVRO0nA",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
  },
  {
    id: 2,
    title: "Quinoa Bowl",
    video: "https://www.youtube.com/embed/frTdXoJhfLQ",
    image: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg",
  },
  {
    id: 3,
    title: "Smoothie Power",
    video: "https://www.youtube.com/embed/RS-nrbwkfUI",
    image: "https://images.pexels.com/photos/4551971/pexels-photo-4551971.jpeg",
  },
  {
    id: 4,
    title: "Egg & Veggie Meal",
    video: "https://www.youtube.com/embed/gujbrlCK24U",
    image: "https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg",
  },
  {
    id: 5,
    title: "Avocado Toast",
    video: "https://www.youtube.com/embed/b52h7kraC3A",
    image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg",
  },
  {
    id: 6,
    title: "Chia Pudding",
    video: "https://www.youtube.com/embed/AubvorAxCWE",
    image: "https://images.pexels.com/photos/302680/pexels-photo-302680.jpeg",
  },
  {
    id: 7,
    title: "Grilled Chicken Salad",
    video: "https://www.youtube.com/embed/jI9Dcpg94mw",
    image: "https://images.pexels.com/photos/5938/food-salad-healthy-lunch.jpg",
  },
  {
    id: 8,
    title: "Veggie Stir Fry",
    video: "https://www.youtube.com/embed/UMPOIuq23Aw",
    image: "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg",
  },
  {
    id: 9,
    title: "Banana Pancakes",
    video: "https://www.youtube.com/embed/ia-GtOh7vus",
    image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg",
  },
  {
    id: 10,
    title: "Protein Shake",
    video: "https://www.youtube.com/embed/rzDVi_VxlOo",
    image: "https://images.pexels.com/photos/406152/pexels-photo-406152.jpeg",
  },
  {
    id: 11,
    title: "Mediterranean Bowl",
    video: "https://www.youtube.com/embed/O2wz9OpsQu8",
    image: "https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg",
  },
  {
    id: 12,
    title: "Zoodle Pasta",
    video: "https://www.youtube.com/embed/j1n37XkhZgw",
    image: "https://images.pexels.com/photos/4197250/pexels-photo-4197250.jpeg",
  },
];

/* ---------------- Expert Advice ---------------- */
const experts = [
  {
    id: 1,
    name: "Dr. Sethi",
    video: "https://www.youtube.com/embed/9nEPL-GZyCw",
  },
  {
    id: 2,
    name: "Dr. Ananya Bhowmik",
    video: "https://www.youtube.com/embed/39qMfHhNio8",
  },
  {
    id: 3,
    name: "Dr. Jahangir Kabir",
    video: "https://www.youtube.com/embed/NR-O-p_Gi5Q",
  },
  {
    id: 4,
    name: "Dr. Rayhan Shahidullah",
    video: "https://www.youtube.com/embed/YPcMKfq_xew",
  },
  {
    id: 5,
    name: "Abu Sufian Taj",
    video: "https://www.youtube.com/embed/KJ5ehpUcBBI",
  },
  {
    id: 6,
    name: "Nusrat Jahan",
    video: "https://www.youtube.com/embed/gHdzWYwC4bE",
  },
  {
    id: 7,
    name: "Dr. Munmun Jahan",
    video: "https://www.youtube.com/embed/YR0FUUA9rN4",
  },
  {
    id: 8,
    name: "Dr. Gazi Sazzad",
    video: "https://www.youtube.com/embed/J0qShVT0YkM",
  },
  {
    id: 9,
    name: "Dr. Sabbir Ahmed",
    video: "https://www.youtube.com/embed/8qe_yo0DjEY",
  },
  {
    id: 10,
    name: "Dr. Tamanna Chowdhury",
    video: "https://www.youtube.com/embed/_ZDR48I-emQ",
  },
  {
    id: 11,
    name: "Dr. Zara Tasnim",
    video: "https://www.youtube.com/embed/qOFAyv9Appg",
  },
  {
    id: 12,
    name: "Tv Channel",
    video: "https://www.youtube.com/embed/9biyEIx4LRI",
  },
  {
    id: 13,
    name: "Dr. Moniruzzaman",
    video: "https://www.youtube.com/embed/queoUg154gc",
  },
  {
    id: 14,
    name: "Dr. Ayesha Siddika",
    video: "https://www.youtube.com/embed/jwsraQ8Zsko",
  },
  {
    id: 15,
    name: "Dr. Unmesh Wadvani",
    video: "https://www.youtube.com/embed/F8IQQad0lTA",
  },
  {
    id: 16,
    name: "Hansaji Yogendra",
    video: "https://www.youtube.com/embed/TowtuKFRxTA",
  },
];

/* ---------------- Main Component ---------------- */
export default function Nutrition() {
  const navigate = useNavigate();
  const [quoteIndex, setQuoteIndex] = useState(0);

  const [visibleArticles, setVisibleArticles] = useState(4);
  const [visibleRecipes, setVisibleRecipes] = useState(4);
  const [visibleExperts, setVisibleExperts] = useState(4);

  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setQuoteIndex((q) => (q + 1) % quotes.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50">
      {/* HERO */}
      <section
        className="relative w-full min-h-screen bg-cover bg-center flex flex-col items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
            Nutrition & Healthy Living
          </h1>

          <p
            className="text-xl md:text-2xl text-white italic font-semibold mb-8 transition-all duration-300"
            key={quoteIndex}
          >
            "{quotes[quoteIndex]}"
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => navigate("/dashboard")}
              className="bg-white text-black px-6 py-3 rounded-full font-medium shadow hover:scale-105 transform transition"
            >
              Back to Dashboard
            </button>
            <button
              className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-green-700 transition"
              onClick={() => navigate("/log-meal")}
            >
              Log Your Meal
            </button>
          </div>
        </div>
      </section>

      {/* HEALTH SECTION */}
      <Section
        title="Health"
        data={healthArticles}
        visible={visibleArticles}
        setVisible={setVisibleArticles}
        renderCard={(a, open) => (
          <article
            key={a.id}
            className="relative rounded-2xl overflow-hidden shadow-lg min-h-[220px] bg-cover bg-center transform transition hover:scale-105 cursor-pointer"
            style={{ backgroundImage: `url(${a.image})` }}
            onClick={() => open(a)}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10" />
            <div className="relative z-10 p-6 flex flex-col h-full justify-end">
              <h3 className="text-lg md:text-xl text-white font-semibold mb-2">
                {a.title}
              </h3>
              <p className="text-sm text-white/90 line-clamp-2">{a.excerpt}</p>
            </div>
          </article>
        )}
        openItem={setSelectedArticle}
      />

      {/* RECIPES SECTION (videos only) */}
      <Section
        title="Healthy Recipes"
        data={recipes}
        visible={visibleRecipes}
        setVisible={setVisibleRecipes}
        renderCard={(r) => (
          <div
            key={r.id}
            className="bg-white rounded-xl shadow p-4 flex flex-col hover:scale-105 transition"
          >
            <h3 className="font-semibold text-lg mb-2">{r.title}</h3>
            <iframe
              className="w-full h-48 rounded-lg"
              src={r.video}
              title={r.title}
              allowFullScreen
            />
          </div>
        )}
      />

      {/* EXPERT ADVICE (videos only) */}
      <Section
        title="Expert Advice"
        data={experts}
        visible={visibleExperts}
        setVisible={setVisibleExperts}
        renderCard={(e) => (
          <div
            key={e.id}
            className="bg-white rounded-xl shadow p-4 flex flex-col hover:scale-105 transition"
          >
            <h3 className="font-semibold text-lg mb-2">{e.name}</h3>
            <iframe
              className="w-full h-48 rounded-lg"
              src={e.video}
              title={e.name}
              allowFullScreen
            />
          </div>
        )}
      />

      {/* ARTICLE MODAL */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="bg-white rounded-2xl max-w-3xl w-full overflow-auto max-h-[90vh] shadow-2xl">
            <div
              className="h-48 bg-cover bg-center rounded-t-2xl"
              style={{ backgroundImage: `url(${selectedArticle.image})` }}
            />
            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    {selectedArticle.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    Health • Nutrition • Tips
                  </p>
                </div>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="text-gray-600 hover:text-gray-900"
                >
                  ✕
                </button>
              </div>

              <p className="text-gray-700 mb-4">{selectedArticle.excerpt}</p>
              <p className="text-gray-700 whitespace-pre-line">
                {selectedArticle.content}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------------- Reusable Section ---------------- */
function Section({ title, data, visible, setVisible, renderCard, openItem }) {
  return (
    <section className="py-12 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.slice(0, visible).map((item) =>
          renderCard(item, openItem ?? (() => {}))
        )}
      </div>

      <div className="mt-6 flex justify-center">
        {visible < data.length ? (
          <button
            onClick={() => setVisible((c) => c + 4)}
            className="px-5 py-2 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            View More
          </button>
        ) : (
          <button
            onClick={() => setVisible(4)}
            className="px-5 py-2 rounded-full bg-gray-200 text-gray-800 font-medium hover:bg-gray-300 transition"
          >
            View Less
          </button>
        )}
      </div>
    </section>
  );
}
