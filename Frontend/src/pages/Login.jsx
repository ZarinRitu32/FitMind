<<<<<<< HEAD
import { Link, useNavigate } from "react-router-dom";
=======
import { Link } from "react-router-dom";
>>>>>>> 4299ea9 (register.jsx)

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
<<<<<<< HEAD
    <div className="flex justify-center items-center min-h-[calc(100vh-64px)] bg-gradient-to-r from-blue-100 to-purple-100">
      <div className="w-full max-w-xs bg-white rounded-lg shadow-md p-4">
        <div className="text-center mb-2">
          <h1 className="text-xl font-bold text-blue-600">FitMind</h1>
          <p className="text-gray-500 mt-1 text-xs">
            Welcome back! Please login to your account
          </p>
=======
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        
        {/* Logo / Brand */}
        <div className="text-center mb-4">
          <h1 className="text-blue-600 font-bold text-lg cursor-pointer">FitMind</h1>
          <p className="text-blue-500 text-sm cursor-pointer">Login</p>
>>>>>>> 4299ea9 (register.jsx)
        </div>

        <form>
          <div className="mb-2">
            <label className="block text-gray-700 mb-1 text-sm font-medium">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-400 transition text-sm"
            />
          </div>

          <div className="mb-2">
            <label className="block text-gray-700 mb-1 text-sm font-medium">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-400 transition text-sm"
            />
          </div>

          <div className="flex justify-between items-center mb-3 text-xs">
            <label className="flex items-center text-gray-700">
              <input type="checkbox" className="mr-1" />
              Remember me
            </label>
            <Link to="#" className="text-blue-500 hover:underline">
              Forgot?
            </Link>
          </div>

          <button
            type="button"
            onClick={handleLogin}
            className="w-full py-1.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded shadow-sm hover:from-blue-600 hover:to-purple-600 transition text-sm"
          >
            LOGIN
          </button>
        </form>

        <p className="mt-3 text-center text-gray-600 text-xs">
          Not a member?{" "}
<<<<<<< HEAD
          <Link
            to="/register"
            className="text-blue-500 font-medium hover:underline"
          >
=======
          <Link to="/register" className="text-blue-500 hover:underline">
>>>>>>> 4299ea9 (register.jsx)
            Signup now
          </Link>
        </p>
      </div>
    </div>
  );
}
