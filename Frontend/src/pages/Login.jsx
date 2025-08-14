// src/pages/Login.jsx
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/authSlice";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, error } = useSelector((s) => s.auth);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await dispatch(login(form));
    if (res.meta.requestStatus === "fulfilled") navigate("/dashboard");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-100 via-blue-100 to-purple-100">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-10 relative overflow-hidden">
        
        {/* Fitness-themed logo */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-green-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
            <span className="text-white text-5xl font-bold">💪</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Login to access your fitness, diet & mental wellness dashboard
        </p>

        {/* Form */}
        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-green-500 text-white py-3 rounded-xl hover:bg-green-600 transition font-semibold shadow-md"
          >
            {status === "loading" ? "Logging in…" : "Login"}
          </button>

          <p className="text-center text-gray-500 text-sm mt-3">
            Don't have an account?{" "}
            <Link to="/register" className="text-green-500 hover:underline">
              Register
            </Link>
          </p>
        </form>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-400 text-sm">
          © 2025 FitMind. All rights reserved.
        </div>
      </div>
    </div>
  );
}
