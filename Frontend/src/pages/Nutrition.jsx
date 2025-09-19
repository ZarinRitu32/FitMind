import React, { useEffect, useState } from "react";

const Nutrition = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/nutrition"); // correct route
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Nutrition Data</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item.name}: {item.calories} calories
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nutrition;
