import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/authSlice";

export default function Navbar() {
  const { token, user } = useSelector((s) => s.auth);
  const dispatch = useDispatch();

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 shadow-md p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-white font-bold text-2xl hover:opacity-90 transition"
        >
          FitMind
        </Link>

        {/* Navigation Links */}
        <div className="space-x-6 flex items-center">
          {token ? (
            <>
              <span className="text-white font-medium">Hello, {user}</span>
              <button
                onClick={() => dispatch(logout())}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-white hover:text-gray-200 font-medium transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-white hover:text-gray-200 font-medium transition"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
