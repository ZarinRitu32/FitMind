import { useNavigate } from "react-router-dom";

  const bangladeshiPlan = [
  {
    day:"Day 1",
    breakfast:"Paratha (1 piece) + Boiled Egg + Tea without sugar",
    lunch:"Steamed Rice + Dal + Grilled Fish + Mixed Vegetables",
    dinner:"Ruti (2 pcs) + Chicken Curry + Salad"
  },
  {
    day:"Day 2",
    breakfast:"Flattened Rice (Chirer Polao) + Boiled Egg + Tea",
    lunch:"Steamed Rice + Lentils + Hilsa Fish Curry + Spinach",
    dinner:"Ruti (2 pcs) + Vegetable Curry + Cucumber Salad"
  },
  {
    day:"Day 3",
    breakfast:"Ruti (2 pcs) + Egg Curry + Tea",
    lunch:"Brown Rice + Grilled Chicken + Mixed Vegetables",
    dinner:"Vegetable Khichuri + Salad"
  },
  {
    day:"Day 4",
    breakfast:"Suji + Banana",
    lunch:"Rice + Moong Dal + Fish Curry + Cauliflower Fry",
    dinner:"ruti (2 pcs) + Chicken Curry + Salad"
  },
  {
    day:"Day 5",
    breakfast:"Paratha (1 piece) + Vegetable Curry + Tea",
    lunch:"Rice + Lentils + Rui Fish Curry + Mixed Vegetables",
    dinner:"Vegetable Pulao + Salad"
  },
  {
    day:"Day 6",
    breakfast:"Boiled Egg + Brown Bread (2 slices) + Tea",
    lunch:"Rice + Chicken Curry + Spinach",
    dinner:"Khichuri + Fried Eggplant + Salad"
  },
  {
    day:"Day 7",
    breakfast:"Ruti (2 pcs) + Vegetable Curry + Tea",
    lunch:"Rice + Fish Curry + Mixed Vegetables",
    dinner:"Ruti (2 pcs) + Lentils + Salad"
  }
];

export default function Nutrition() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">

        <button
          onClick={() => navigate("/dashboard")}
          className="mb-6 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300"
        >
          Back to Dashboard
        </button>

        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-green-600">Nutrition</h1>
          <p className="text-gray-600 mt-2">
            7-Day Diet Plan for a balanced and healthy lifestyle.
          </p>
        </div>

        <div className="overflow-x-auto bg-white rounded-xl shadow-md">
          <table className="w-full text-left border-collapse">
            <thead className="bg-green-500 text-white">
              <tr>
                <th className="p-3">Day</th>
                <th className="p-3">Breakfast</th>
                <th className="p-3">Lunch</th>
                <th className="p-3">Dinner</th>
              </tr>
            </thead>
            <tbody>
              {bangladeshiPlan.map((day, i) => (
                <tr
                  key={i}
                  className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="p-3 font-semibold">{day.day}</td>
                  <td className="p-3">{day.breakfast}</td>
                  <td className="p-3">{day.lunch}</td>
                  <td className="p-3">{day.dinner}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
