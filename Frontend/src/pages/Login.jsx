import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        
        {/* Logo / Brand */}
        <div className="text-center mb-4">
          <h1 className="text-blue-600 font-bold text-lg cursor-pointer">FitMind</h1>
          <p className="text-blue-500 text-sm cursor-pointer">Login</p>
        </div>

        {/* Form Title */}
        <h2 className="text-2xl font-bold mb-6">Login Form</h2>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="Enter your Email Address"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">
            Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            placeholder="Enter your Password"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Remember + Forgot */}
        <div className="flex justify-between items-center mb-4">
          <label className="flex items-center text-gray-700 text-sm">
            <input type="checkbox" className="mr-2" /> Remember me
          </label>
          <a href="#" className="text-blue-500 text-sm hover:underline">
            Forgot password?
          </a>
        </div>

        {/* Login Button */}
        <button className="w-full bg-white border border-gray-300 py-2 rounded-lg font-semibold hover:bg-gray-100">
          LOGIN
        </button>

        {/* Signup */}
        <p className="mt-4 text-center text-sm">
          Not a member?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Signup now
          </Link>
        </p>
      </div>
    </div>
  );
}
