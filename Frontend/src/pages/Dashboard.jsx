export default function Dashboard() {
  return (
    <div>
      <div className="card">
        <h2>Welcome back 👋</h2>
        <p>Your week at a glance will appear here.</p>
      </div>

      <div className="card">
        <h3>Quick actions</h3>
        <button>Add Mood</button> <button>Add Meal</button>{" "}
        <button>Add Workout</button>
      </div>

      <div className="card">
        <h3>This week</h3>
        <p>Charts will go here</p>
      </div>
    </div>
  );
}
