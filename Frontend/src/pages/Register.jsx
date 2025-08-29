import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (!fullName || !email || !password || !confirmPassword) {
      alert("Please fill in all required fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // name save kore rakhe
    localStorage.setItem("fullName", fullName);

    // direct profile page e chole jabe
    navigate("/profile", { state: { fullName } });
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-64px)] bg-gradient-to-r from-blue-100 to-purple-100">
      <div className="w-full max-w-xs bg-white rounded-lg shadow-md p-4">
    
        <div className="text-center mb-2">
          <h1 className="text-xl font-bold text-blue-600">FitMind</h1>
          <p className="text-gray-500 mt-1 text-xs">
            Create your account and start your journey
          </p>
        </div>

      
        <form onSubmit={handleRegister}>
          {/* Full Name */}
          <div className="mb-2">
            <label className="block text-gray-700 mb-1 text-sm font-medium">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-400 transition text-sm"
            />
          </div>

          {/* Email */}
          <div className="mb-2">
            <label className="block text-gray-700 mb-1 text-sm font-medium">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-400 transition text-sm"
            />
          </div>

          {/* Password */}
          <div className="mb-2">
            <label className="block text-gray-700 mb-1 text-sm font-medium">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-400 transition text-sm"
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-3">
            <label className="block text-gray-700 mb-1 text-sm font-medium">
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Re-enter your password"
              className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-400 transition text-sm"
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full py-1.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded shadow-sm hover:from-blue-600 hover:to-purple-600 transition text-sm"
          >
            REGISTER
          </button>
        </form>

        
        <p className="mt-3 text-center text-gray-600 text-xs">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 font-medium hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
