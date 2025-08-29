import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password.");
      return;
    }

    // check kore profile complete kina
    const isProfileCompleted = localStorage.getItem("profileCompleted") === "true";

    if (isProfileCompleted) {
      navigate("/dashboard");
    } else {
      navigate("/profile");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-64px)] bg-gradient-to-r from-blue-100 to-purple-100">
      <div className="w-full max-w-xs bg-white rounded-lg shadow-md p-4">
        <div className="text-center mb-2">
          <h1 className="text-xl font-bold text-blue-600">FitMind</h1>
          <p className="text-gray-500 mt-1 text-xs">Login to your account</p>
        </div>

        <form onSubmit={handleLogin}>
          <div className="mb-2">
            <label className="block text-gray-700 mb-1 text-sm font-medium">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-400 text-sm"
            />
          </div>

          <div className="mb-3">
            <label className="block text-gray-700 mb-1 text-sm font-medium">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-400 text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full py-1.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded shadow-sm hover:from-blue-600 hover:to-purple-600 transition text-sm"
          >
            LOGIN
          </button>
        </form>

        <p className="mt-3 text-center text-gray-600 text-xs">
          Not a member?{" "}
          <Link to="/register" className="text-blue-500 font-medium hover:underline">
            Signup now
          </Link>
        </p>
      </div>
    </div>
  );
}
